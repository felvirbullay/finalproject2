document.addEventListener("DOMContentLoaded", function() {
    const loaderWrapper = document.querySelector('.loader-wrapper');
  
    
    window.addEventListener('load', function() {
      loaderWrapper.style.display = 'none';
    });
  
    
    const links = document.querySelectorAll('a');
    links.forEach(function(link) {
      link.addEventListener('click', function() {
        loaderWrapper.style.display = 'block';
      });
    });
  });