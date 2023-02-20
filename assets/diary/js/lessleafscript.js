const floatingImages = [];

floatingImages.push({
  container: document.getElementById('floating-image-container-1'),
  image: document.getElementById('floating-image-1'),
  lastTime: 0,
  x: window.innerWidth,
  y: window.innerHeight,
  angle: Math.random() * 360
});

floatingImages.push({
  container: document.getElementById('floating-image-container-2'),
  image: document.getElementById('floating-image-2'),
  lastTime: 0,
  x: window.innerWidth,
  y: -window.innerHeight,
  angle: Math.random() * 360
});

floatingImages.push({
  container: document.getElementById('floating-image-container-3'),
  image: document.getElementById('floating-image-3'),
  lastTime: 0,
  x: -window.innerWidth,
  y: window.innerHeight,
  angle: Math.random() * 360
});



// Wait for 2 seconds and show the image
setTimeout(function() {
  floatingImages[0].image.style.display = "block";
  floatingImages[1].image.style.display = "block";
  floatingImages[2].image.style.display = "block";
}, 2000);



function moveImages(currentTime) {
  floatingImages.forEach((image) => {
    const timeDelta = (currentTime - image.lastTime);
    const smallScreen = window.matchMedia("(max-width: 767px)").matches;
    image.lastTime = currentTime;

    if (!image.isPaused) {

      if (smallScreen) {
        image.x += Math.sin(image.angle * Math.PI / 180) * timeDelta / 35;
        image.y += Math.cos(image.angle * Math.PI / 180) * timeDelta / 35;
      } else {
        image.x += Math.sin(image.angle * Math.PI / 180) * timeDelta / 10;
        image.y += Math.cos(image.angle * Math.PI / 180) * timeDelta / 10;
      }
      image.angle += 0.1;
    }

    // Check if the image has gone off the right edge of the screen
    if (image.x > window.innerWidth || image.y > window.innerHeight) {
      // Smoothly hide the image
      image.container.style.opacity = '0.1';

      const getRandomDirection = Math.ceil(Math.random() * 10) % 4;

      // Reset the position and angle

      if (getRandomDirection === 0) {
        image.x = 0.85 * window.innerWidth;
        image.y = image.image.height;
      } else if (getRandomDirection === 1) {
        image.x = -0.85 * window.innerWidth;
        image.y = image.image.height;
      } else if (getRandomDirection === 2) {
        image.x = 0.85 * window.innerWidth;
        image.y = image.image.height;
      } else {
        image.x = -0.85 * window.innerWidth;
        image.y = image.image.height;
      }
      image.angle = Math.random() * 360;

      // Smoothly show the image
      setTimeout(() => {
        image.container.style.opacity = '0.9';
        image.container.style.transition = 'opacity 1s ease-in-out';
      }, 1000);
    }

    const opacity = 0.85 + 0.10 * Math.sin(currentTime / 1000);
    image.container.style.opacity = opacity;
    image.image.style.transform = `translate(${image.x}px, ${image.y}px) rotate(${image.angle}deg)`;
  });

  requestAnimationFrame(moveImages);
}

floatingImages.forEach((image) => {
  image.isPaused = false;

  // Pause the image movement when hovering or touching
  image.container.addEventListener('mouseenter', () => {
    image.isPaused = true;
  });

  image.container.addEventListener('touchstart', () => {
    image.isPaused = true;
  });

  // Resume the image movement when the hover or touch ends
  image.container.addEventListener('mouseleave', () => {
    image.isPaused = false;
  });

  image.container.addEventListener('touchend', () => {
    image.isPaused = false;
  });
});

// Wait for 2 seconds and show the image
setTimeout(function() {
  requestAnimationFrame(moveImages);
}, 2000);
