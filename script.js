// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function () {

  // Main page menu button
  const mainMenuBtn = document.getElementById('mobileMenuBtn');
  if (mainMenuBtn) {
    mainMenuBtn.addEventListener('click', () => {
      const nav = document.querySelector('.main-nav');
      if (nav) {
        nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
      }
    });
  }

  // Other pages mobile menu buttons (about, services, bbbee, iso, skills, contact)
  const menuButtons = ['2', '3', '4', '5', '6', '7'];

  menuButtons.forEach(num => {
    const btn = document.getElementById('mobileMenuBtn' + num);
    if (!btn) return;

    btn.addEventListener('click', () => {
      const nav = btn.parentElement.querySelector('.main-nav');
      if (nav) {
        nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
      }
    });
  });

});


// Contact form handler
function handleContact(e) {
  e.preventDefault();

  const company = document.getElementById('company')?.value || '';
  const name = document.getElementById('name')?.value || '';
  const email = document.getElementById('email')?.value || '';
  const phone = document.getElementById('phone')?.value || '';
  const sector = document.getElementById('sector')?.value || '';
  const message = document.getElementById('message')?.value || '';

  if (!name || !email) {
    document.getElementById('formResult').innerText = 'Please provide your name and email.';
    return false;
  }

  const subject = encodeURIComponent(`Enquiry from ${company || name} — ${sector}`);
  const body = encodeURIComponent(
    `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\n\nMessage:\n${message}`
  );

  window.location.href = `mailto:hello@rebamotaki.co.za?subject=${subject}&body=${body}`;
  return false;
}
