/* =========================================
   Mobile Navigation + Contact Form
========================================= */

document.addEventListener('DOMContentLoaded', () => {

  const menuBtn = document.querySelector('.mobile-menu');
  const nav = document.querySelector('.main-nav');

  if (menuBtn && nav) {

    // Toggle mobile menu
    menuBtn.addEventListener('click', () => {
      nav.classList.toggle('open');
      menuBtn.classList.toggle('active');
    });

    // Close menu when a link is tapped
    nav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.remove('open');
        menuBtn.classList.remove('active');
      });
    });

    // Reset menu on desktop resize
    window.addEventListener('resize', () => {
      if (window.innerWidth > 900) {
        nav.classList.remove('open');
        menuBtn.classList.remove('active');
      }
    });
  }
});

/* -------------------------
   Contact Form Handler
------------------------- */
function handleContact(e) {
  e.preventDefault();

  const company = document.getElementById('company')?.value || '';
  const name = document.getElementById('name')?.value || '';
  const email = document.getElementById('email')?.value || '';
  const phone = document.getElementById('phone')?.value || '';
  const sector = document.getElementById('sector')?.value || '';
  const message = document.getElementById('message')?.value || '';

  if (!name || !email) {
    document.getElementById('formResult').innerText =
      'Please provide your name and email.';
    return false;
  }

  const subject = encodeURIComponent(
    `Enquiry from ${company || name} — ${sector}`
  );

  const body = encodeURIComponent(
    `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\n\nMessage:\n${message}`
  );

  window.location.href =
    `mailto:hello@rebamotaki.co.za?subject=${subject}&body=${body}`;

  return false;
}
