// JavaScript for sparkle cursor goes here
const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', (e) => {
  cursor.style.top = `${e.pageY}px`;
  cursor.style.left = `${e.pageX}px`;
});

const sparkleTrail = () => {
  const sparkle = document.createElement('div');
  sparkle.className = 'sparkle';
  sparkle.style.left = cursor.style.left;
  sparkle.style.top = cursor.style.top;
  document.body.appendChild(sparkle);
  setTimeout(() => sparkle.remove(), 500);
};

setInterval(sparkleTrail, 60);
