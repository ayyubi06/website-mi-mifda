import { getSekolah } from "@/data/konten";

export default function WAFloat() {
  const SEKOLAH = getSekolah();
  return (
    <a
      href={`https://wa.me/${SEKOLAH.wa}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Hubungi via WhatsApp"
      className="fixed bottom-5 right-5 z-50 w-14 h-14 rounded-full bg-[#25d366] shadow-lg flex items-center justify-center hover:scale-105 transition-transform"
    >
      <svg width="30" height="30" viewBox="0 0 24 24" fill="#ffffff">
        <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.1l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.6-6.1c-.3-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.3-.6.8-.8 1-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4 0-.5.1-.7l.5-.6c.1-.2.1-.4 0-.5l-.8-1.9c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.2-.7.6-.9 2.1.7 4.4 2.3 6a9.6 9.6 0 0 0 3.7 2.3c1.7.6 2.4.4 3.2.1.5-.2 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2 0-.1-.2-.1-.4-.2z" />
      </svg>
    </a>
  );
}
