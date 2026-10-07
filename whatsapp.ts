import { contactInfo } from './data';

export function buildWhatsAppUrl(message: string): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${contactInfo.phoneRaw}?text=${encoded}`;
}

export function orderSingleCake(
  cakeName: string,
  price: number,
  quantity: number = 1,
): string {
  const message = `Hello Kuziva Cakes! I would like to order:

Cake: ${cakeName}
Price: $${price}
Quantity: ${quantity}
Total: $${price * quantity}

Please let me know how to proceed. Thank you!`;
  return buildWhatsAppUrl(message);
}

export function checkoutViaWhatsApp(data: {
  name: string;
  phone: string;
  deliveryMethod: string;
  dateNeeded: string;
  message: string;
  items: { name: string; price: number; quantity: number }[];
  total: number;
}): string {
  const itemsText = data.items
    .map(
      (item, i) =>
        `${i + 1}. ${item.name} — $${item.price} x ${item.quantity} = $${item.price * item.quantity}`,
    )
    .join('\n');

  const message = `Hello Kuziva Cakes! I would like to place an order:

Customer: ${data.name}
Phone: ${data.phone}
Delivery/Pickup: ${data.deliveryMethod}
Date Needed: ${data.dateNeeded}
${data.message ? `Message on Cake: ${data.message}\n` : ''}
Order Items:
${itemsText}

Total: $${data.total}

Thank you!`;
  return buildWhatsAppUrl(message);
}

export function contactWhatsApp(
  name: string,
  message: string,
): string {
  const text = `Hello Kuziva Cakes! My name is ${name}.\n\n${message}`;
  return buildWhatsAppUrl(text);
}
