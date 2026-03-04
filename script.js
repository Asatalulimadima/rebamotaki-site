/* =========================================
   Mobile Navigation + Contact Form
========================================= */

/* =========================================
   Mobile Navigation (FIXED)
========================================= */

document.addEventListener('DOMContentLoaded', () => {

  const menuBtn = document.querySelector('.menu-toggle');
  const drawer = document.querySelector('.side-drawer');
  const closeBtn = document.querySelector('.close-drawer');

  if (menuBtn && drawer) {

    // Open drawer
    menuBtn.addEventListener('click', () => {
      drawer.classList.add('active');
    });

    // Close drawer (X button)
    if (closeBtn) {
      closeBtn.addEventListener('click', () => {
        drawer.classList.remove('active');
      });
    }

    // Close when clicking any link
    drawer.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        drawer.classList.remove('active');
      });
    });

    // Close if screen resized to desktop
    window.addEventListener('resize', () => {
      if (window.innerWidth > 992) {
        drawer.classList.remove('active');
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
