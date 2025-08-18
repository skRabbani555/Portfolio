(function(){
  const glow = document.createElement('div');
  glow.className = 'cursor-glow';
  document.body.appendChild(glow);

  let mouseX = -100, mouseY = -100;
  let glowX = -100, glowY = -100;
  const speed = 0.15;

  window.addEventListener('pointermove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function animate() {
    glowX += (mouseX - glowX) * speed;
    glowY += (mouseY - glowY) * speed;
    glow.style.left = glowX + 'px';
    glow.style.top = glowY + 'px';
    requestAnimationFrame(animate);
  }
  animate();

  const hoverTargets = 'a, button, .btn, input, textarea, .card, .interactive';
  document.querySelectorAll(hoverTargets).forEach(el => {
    el.addEventListener('pointerenter', () => glow.classList.add('hover'));
    el.addEventListener('pointerleave', () => glow.classList.remove('hover'));
  });
})();
