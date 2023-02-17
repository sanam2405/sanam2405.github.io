window.addEventListener('scroll', function() {
    const progress = document.querySelector('#progress');
    const totalHeight = document.body.scrollHeight - window.innerHeight;
    const progressWidth = (window.pageYOffset / totalHeight) * 100;
    progress.style.width = `${progressWidth}%`;
  });
