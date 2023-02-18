const colorEffects = document.querySelectorAll('.color-effect');
for (const colorEffect of colorEffects) {
  colorEffect.addEventListener('mouseenter', function() {
    const color = '#' + Math.floor(Math.random() * 16777215).toString(16);
    colorEffect.style.backgroundColor = color;
  });

  colorEffect.addEventListener('mouseleave', function() {
    colorEffect.style.backgroundColor = 'white';
  });
}
