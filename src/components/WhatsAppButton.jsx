import { company } from '../data/company.js';
import WhatsAppLogo from './WhatsAppLogo.jsx';

export default function WhatsAppButton({
  message = 'Hello Asghar Engineering Works, I want to inquire about your products.',
  className = 'btn-whatsapp',
  label = 'WhatsApp Inquiry',
}) {
  const url = `${company.whatsappUrl}?text=${encodeURIComponent(message)}`;

  return (
    <a className={`${className} focus-ring`} href={url} target="_blank" rel="noreferrer">
      <WhatsAppLogo size={20} />
      <span>{label}</span>
    </a>
  );
}
