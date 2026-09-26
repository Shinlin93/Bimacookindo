import whatsappChatImage from '../assets/whatsapp-chat-sekarang.png'

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
      <img src={whatsappChatImage} alt="Chat Sekarang via WhatsApp" />
    </a>
  )
}
