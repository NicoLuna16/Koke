
 
  let isPaused = false;

  function toggleAnimation() {
    const tickerContent = document.getElementById('tickerContent');
    const icon = document.getElementById('icon');

    if (isPaused) {
    
      tickerContent.style.animationPlayState = 'running';
      icon.setAttribute('name', 'pause-outline'); 
    } else {
      
      tickerContent.style.animationPlayState = 'paused';
      icon.setAttribute('name', 'play-outline'); 
    }

  
    isPaused = !isPaused;
  }


  document.getElementById('toggleButton').addEventListener('click', toggleAnimation);
