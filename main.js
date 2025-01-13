// Get all the layers
const layers = document.querySelectorAll('.layer');

// Track pointer movement
const pointer = { x: 0, y: 0 };
window.addEventListener('mousemove', (e) => {
  pointer.x = (e.clientX / window.innerWidth - 0.5) * 2;
  pointer.y = (e.clientY / window.innerHeight - 0.5) * 2;
});

// Update layers with motion
function updateParallaxEffect() {
  layers.forEach((layer, index) => {
    const depth = index * 10; // Control depth of each layer
    const offsetX = pointer.x * depth;
    const offsetY = pointer.y * depth;
    layer.style.transform = `translate3d(${offsetX}px, ${offsetY}px, 0px)`;
  });

  requestAnimationFrame(updateParallaxEffect);
}

updateParallaxEffect();
