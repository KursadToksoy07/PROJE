let currentIndex = 0;
const reviews = document.querySelectorAll('.review');

function showReview(index) {
  reviews.forEach((review, i) => {
    review.style.display = (i === index) ? 'block' : 'none';
  });
}

function slide(direction) {
  currentIndex += direction;
  if (currentIndex < 0) currentIndex = reviews.length - 1;
  if (currentIndex >= reviews.length) currentIndex = 0;
  showReview(currentIndex);
}

showReview(currentIndex);

// İletişim formu gönderimi
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Mesajınız gönderildi, teşekkür ederiz!');
  this.reset();
});

// Otomatik slider (isteğe bağlı aktif edebilirsin)
// setInterval(() => slide(1), 5000);
