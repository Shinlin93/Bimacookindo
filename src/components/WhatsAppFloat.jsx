import iconWhatsapp from '../assets/icon_whatsapp.png'

export const whatsappUrl = 'https://wa.me/6289677809007'

export default function WhatsAppFloat() {
  return (
    <a
      className="whatsapp-float"
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat WhatsApp dengan Bima Cookindo"
    >
      <img src={iconWhatsapp} alt="" aria-hidden="true" />
      <span>Chat WhatsApp</span>
    </a>
  )
}
