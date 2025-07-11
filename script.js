// Loader
window.addEventListener('load', () => {
    document.querySelector('.loader').style.display = 'none';
  });
  
  // Typing effect
  const typedText = document.querySelector('.typed-text');
  const texts = ["Web Developer.", "Content Creator.", "UI/UX Designer."];
  let textIndex = 0;
  let charIndex = 0;
  
  function type() {
    if (charIndex < texts[textIndex].length) {
      typedText.textContent += texts[textIndex].charAt(charIndex);
      charIndex++;
      setTimeout(type, 100);
    } else {
      setTimeout(erase, 2000);
    }
  }
  
  function erase() {
    if (charIndex > 0) {
      typedText.textContent = texts[textIndex].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(erase, 50);
    } else {
      textIndex++;
      if (textIndex >= texts.length) textIndex = 0;
      setTimeout(type, 500);
    }
  }
  
  document.addEventListener("DOMContentLoaded", function() {
    if(texts.length) setTimeout(type, 1000);
  });
  
  // Scroll Reveal
  ScrollReveal().reveal('.service-card, .post, .about p', {
    origin: 'bottom',
    distance: '50px',
    duration: 1000,
    reset: true
  });
  // Tunggu 5 detik baru notifikasi muncul
window.addEventListener('load', function() {
  setTimeout(function() {
    const notif = document.getElementById('notif');
    notif.classList.remove('hidden');
    notif.classList.add('show');
  }, 5000); // muncul setelah 5 detik
});
