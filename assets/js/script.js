document.querySelectorAll('.box').forEach((box) => {
    box.addEventListener('click', () => {
      const radio = box.querySelector('input[type="radio"]');
      if (!radio.checked) radio.checked = true;
  
      // Remove 'active' class from all boxes
      document.querySelectorAll('.box').forEach((b) => b.classList.remove('active'));
  
      // Add 'active' class to the clicked box
      box.classList.add('active');
    });
  });
  