document.addEventListener('DOMContentLoaded', function() {
    const paragraph = document.getElementById('english-paragraph');
    const originalText = paragraph.innerHTML;
  
    const englishText = "My name is Sébastien. <br> I am a student at O'clock, and this page aims <br> to present to you the projects completed during this course.";
  
    const translateIcon = document.getElementById('translate-icon');
  
    translateIcon.addEventListener('mouseover', function() {
      paragraph.innerHTML = englishText;
    });
  
    translateIcon.addEventListener('mouseout', function() {
      paragraph.innerHTML = originalText;
    });
  });