 // input var
 const inputMenu = document.getElementById('toggle');

 // Close Menu button var
 const closeMenu = document.querySelector('.closeMenu');

 closeMenu.addEventListener('click', function () {
     // What happens when I click my button
     inputMenu.checked = false;
 });