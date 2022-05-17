const search = document.querySelector('.search');
const button = document.querySelector('.searchButton');
const input = document.querySelector('.searchInput');

//add eventListener
button.addEventListener('click', () => {
    console.log('click');
     //classList to remove and add classes - when click, toggle to active
    //toggle() is a method to switch between classes
    search.classList.toggle('active');
    
    

   
    
})