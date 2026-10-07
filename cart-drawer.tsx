'use client';

import { useState } from 'react';
import Image from 'next/image';
import { X, Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useCart } from '@/lib/cart-context';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { checkoutViaWhatsApp } from '@/lib/whatsapp';

export function CartDrawer() {
  const {
    items,
    isOpen,
    closeCart,
    removeItem,
    updateQuantity,
    clearCart,
    totalPrice,
    totalItems,
  } = useCart();

  const [showCheckout, setShowCheckout] = useState(false);
  const [form, setForm] = useState({
    name: '',
    phone: '',
    deliveryMethod: 'delivery',
    dateNeeded: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};
    if (!form.name.trim()) newErrors.name = 'Please enter your name';
    if (!form.phone.trim()) newErrors.phone = 'Please enter your phone number';
    if (!form.dateNeeded) newErrors.dateNeeded = 'Please select a date';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const url = checkoutViaWhatsApp({
      name: form.name,
      phone: form.phone,
      deliveryMethod:
        form.deliveryMethod === 'delivery' ? 'Delivery' : 'Pickup at Campus',
      dateNeeded: form.dateNeeded,
      message: form.message,
      items: items.map((i) => ({
        name: i.name,
        price: i.price,
        quantity: i.quantity,
      })),
      total: totalPrice,
    });

    window.open(url, '_blank');
    clearCart();
    setShowCheckout(false);
    closeCart();
    setForm({
      name: '',
      phone: '',
      deliveryMethod: 'delivery',
      dateNeeded: '',
      message: '',
    });
  };

  return (
    <>
      {/* Overlay */}
      <div
        className={cn(
          'fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm transition-opacity duration-300',
          isOpen ? 'opacity-100' : 'pointer-events-none opacity-0',
        )}
        onClick={closeCart}
      />

      {/* Drawer */}
      <div
        className={cn(
          'fixed right-0 top-0 z-[70] flex h-full w-full max-w-md flex-col bg-background shadow-2xl transition-transform duration-300 ease-out',
          isOpen ? 'translate-x-0' : 'translate-x-full',
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-border px-6 py-4">
          <div className="flex items-center gap-2">
            <ShoppingBag className="h-5 w-5 text-secondary" />
            <h2 className="font-display text-lg font-bold text-primary">
              {showCheckout ? 'Checkout' : `Your Cart (${totalItems})`}
            </h2>
          </div>
          <button
            onClick={() => {
              setShowCheckout(false);
              closeCart();
            }}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-muted transition-colors hover:bg-muted/80"
            aria-label="Close cart"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-4 px-6 text-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-muted">
              <ShoppingBag className="h-10 w-10 text-muted-foreground" />
            </div>
            <p className="font-display text-lg font-semibold text-primary">
              Your cart is empty
            </p>
            <p className="text-sm text-muted-foreground">
              Browse our delicious cakes and add your favorites to get started.
            </p>
            <Button
              onClick={closeCart}
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Browse Cakes
            </Button>
          </div>
        ) : showCheckout ? (
          /* Checkout Form */
          <form
            onSubmit={handleCheckout}
            className="flex flex-1 flex-col overflow-y-auto"
          >
            <div className="flex-1 space-y-4 px-6 py-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  value={form.name}
                  onChange={(e) =>
                    setForm({ ...form, name: e.target.value })
                  }
                  placeholder="Enter your full name"
                />
                {errors.name && (
                  <p className="text-xs text-destructive">{errors.name}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  value={form.phone}
                  onChange={(e) =>
                    setForm({ ...form, phone: e.target.value })
                  }
                  placeholder="e.g. 071 234 5678"
                />
                {errors.phone && (
                  <p className="text-xs text-destructive">{errors.phone}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label>Delivery or Pickup *</Label>
                <RadioGroup
                  value={form.deliveryMethod}
                  onValueChange={(v) =>
                    setForm({ ...form, deliveryMethod: v })
                  }
                  className="flex gap-4"
                >
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="delivery" id="delivery" />
                    <Label htmlFor="delivery" className="cursor-pointer">
                      Delivery
                    </Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="pickup" id="pickup" />
                    <Label htmlFor="pickup" className="cursor-pointer">
                      Pickup at Campus
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-2">
                <Label htmlFor="date">Date Needed *</Label>
                <Input
                  id="date"
                  type="date"
                  value={form.dateNeeded}
                  onChange={(e) =>
                    setForm({ ...form, dateNeeded: e.target.value })
                  }
                />
                {errors.dateNeeded && (
                  <p className="text-xs text-destructive">{errors.dateNeeded}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message on Cake (optional)</Label>
                <Textarea
                  id="message"
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  placeholder="e.g. Happy Birthday Tanaka!"
                  rows={3}
                />
              </div>

              {/* Order summary */}
              <div className="rounded-lg border border-border bg-muted/50 p-4">
                <h3 className="mb-3 text-sm font-semibold text-primary">
                  Order Summary
                </h3>
                <div className="space-y-2">
                  {items.map((item) => (
                    <div
                      key={item.id}
                      className="flex justify-between text-sm"
                    >
                      <span className="text-foreground/80">
                        {item.name} x {item.quantity}
                      </span>
                      <span className="font-medium">
                        ${item.price * item.quantity}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-3 flex justify-between border-t border-border pt-3">
                  <span className="font-semibold text-primary">Total</span>
                  <span className="font-bold text-secondary">
                    ${totalPrice}
                  </span>
                </div>
              </div>
            </div>

            <div className="border-t border-border px-6 py-4">
              <Button
                type="submit"
                className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90"
              >
                Send Order via WhatsApp
              </Button>
              <button
                type="button"
                onClick={() => setShowCheckout(false)}
                className="mt-2 w-full text-center text-sm text-muted-foreground hover:text-primary"
              >
                Back to Cart
              </button>
            </div>
          </form>
        ) : (
          /* Cart Items */
          <>
            <div className="flex-1 overflow-y-auto px-6 py-4">
              <div className="space-y-4">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-3 rounded-lg border border-border p-3"
                  >
                    <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-md">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                        sizes="80px"
                      />
                    </div>
                    <div className="flex flex-1 flex-col">
                      <div className="flex items-start justify-between">
                        <h3 className="text-sm font-semibold text-primary">
                          {item.name}
                        </h3>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-muted-foreground transition-colors hover:text-destructive"
                          aria-label="Remove item"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                      <p className="text-sm text-secondary font-medium">
                        ${item.price}
                      </p>
                      <div className="mt-auto flex items-center gap-2">
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity - 1)
                          }
                          className="flex h-7 w-7 items-center justify-center rounded-md border border-border transition-colors hover:bg-muted"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="w-8 text-center text-sm font-medium">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                          className="flex h-7 w-7 items-center justify-center rounded-md border border-border transition-colors hover:bg-muted"
                          aria-label="Increase quantity"
                        >
                          <Plus className="h-3 w-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-border px-6 py-4">
              <div className="mb-3 flex justify-between">
                <span className="font-semibold text-primary">Total</span>
                <span className="font-bold text-lg text-secondary">
                  ${totalPrice}
                </span>
              </div>
              <Button
                onClick={() => setShowCheckout(true)}
                className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90"
              >
                Proceed to Checkout
              </Button>
            </div>
          </>
        )}
      </div>
    </>
  );
}
