// ===============================================
// HANDTECHNOLOGY ARS - WEBSITE CONFIG
// Ganti nomor di bawah dengan nomor WhatsApp Anda.
// Format Indonesia: 62 + nomor tanpa angka 0 di depan.
// Contoh 0812-3456-7890 menjadi 6281234567890
// ===============================================
const WHATSAPP_NUMBER = '6280000000000';

const menuBtn = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');

menuBtn?.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded', String(isOpen));
});

document.querySelectorAll('.main-nav a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuBtn?.setAttribute('aria-expanded', 'false');
  });
});

// Reveal animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// WhatsApp form
const waForm = document.getElementById('waForm');
waForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(waForm);
  const name = data.get('name');
  const company = data.get('company') || '-';
  const service = data.get('service');
  const message = data.get('message');

  if (WHATSAPP_NUMBER === '6280000000000') {
    alert('Silakan ganti WHATSAPP_NUMBER di file assets/js/main.js dengan nomor WhatsApp HandTechnology ARS terlebih dahulu.');
    return;
  }

  const text = `Halo HandTechnology ARS,%0A%0ASaya ingin konsultasi kebutuhan IT.%0A%0A*Nama:* ${encodeURIComponent(name)}%0A*Perusahaan/Instansi:* ${encodeURIComponent(company)}%0A*Layanan:* ${encodeURIComponent(service)}%0A*Kebutuhan:* ${encodeURIComponent(message)}%0A%0AMohon dibantu informasinya. Terima kasih.`;
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank', 'noopener');
});

// Floating WhatsApp button
const waFloat = document.getElementById('waFloat');
waFloat?.addEventListener('click', (event) => {
  if (WHATSAPP_NUMBER === '6280000000000') return; // default ke section kontak
  event.preventDefault();
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=Halo%20HandTechnology%20ARS,%20saya%20ingin%20konsultasi%20kebutuhan%20IT.`, '_blank', 'noopener');
});

document.getElementById('year').textContent = new Date().getFullYear();
