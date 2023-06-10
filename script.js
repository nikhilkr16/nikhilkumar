document.addEventListener('DOMContentLoaded', function() {
    var items = document.querySelectorAll('.item');
    var container2 = document.getElementById('container2');
    var successMessage = document.createElement('p');
    successMessage.className = 'success-message';
    successMessage.textContent = 'Item dropped successfully!';
    
    // Add dragstart event listener to items
    items.forEach(function(item) {
      item.addEventListener('dragstart', function(e) {
        e.dataTransfer.setData('text/plain', e.target.textContent);
        e.target.classList.add('dragging');
      });
    });
  
    // Add dragover event listener to container2 to allow dropping
    container2.addEventListener('dragover', function(e) {
      e.preventDefault();
    });
  
    // Add drop event listener to container2
    container2.addEventListener('drop', function(e) {
      e.preventDefault();
      var data = e.dataTransfer.getData('text/plain');
      var newItem = document.createElement('div');
      newItem.className = 'item';
      newItem.textContent = data;
      container2.appendChild(newItem);
      container2.appendChild(successMessage);
    });
  
    // Add dragend event listener to items to remove dragging class
    items.forEach(function(item) {
      item.addEventListener('dragend', function() {
        item.classList.remove('dragging');
      });
    });
  
    // Add click event listener to reset button
    var resetButton = document.getElementById('resetButton');
    resetButton.addEventListener('click', function() {
      container2.innerHTML = '<h2>Second Container</h2>';
    });
  });
  