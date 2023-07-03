// Function to toggle a class on an element
function toggleClass(elementId, className) {
    var element = document.getElementById(elementId);
    element.classList.toggle(className);
  }
  
  // Function to show a hidden element
  function showElement(elementId) {
    var element = document.getElementById(elementId);
    element.style.display = 'block';
  }
  
  // Function to hide a visible element
  function hideElement(elementId) {
    var element = document.getElementById(elementId);
    element.style.display = 'none';
  }
  
  // Function to display a message when a button is clicked
  function showMessage(message) {
    alert(message);
  }
  
  // Function to change the background color of an element
  function changeBackgroundColor(elementId, color) {
    var element = document.getElementById(elementId);
    element.style.backgroundColor = color;
  }
  
  // Function to animate an element by changing its position
  function animateElement(elementId, finalPosition, duration) {
    var element = document.getElementById(elementId);
    var currentPosition = element.offsetLeft;
    var distance = finalPosition - currentPosition;
    var startTime = null;
  
    function animationStep(timestamp) {
      if (!startTime) startTime = timestamp;
      var progress = timestamp - startTime;
      var step = Math.min(progress / duration, 1) * distance;
      element.style.left = currentPosition + step + 'px';
  
      if (progress < duration) {
        requestAnimationFrame(animationStep);
      }
    }
  
    requestAnimationFrame(animationStep);
  }
  
  // Function to set language proficiency level
  function setLanguageLevel(languageId, level) {
    var languageProgress = document.getElementById(languageId);
    languageProgress.classList.add(level);
  }
  
  // Set language proficiency levels
  setLanguageLevel('english-progress', 'expert');
  setLanguageLevel('bahasa-progress', 'expert');
  setLanguageLevel('hakka-progress', 'expert');
  setLanguageLevel('melayu-progress', 'intermediate');
  