//I WANT MY IMAGES (500PX EACH) TO TRANSLATE AND OCCUPY THE 100 % OF MY CAROUSEL, WHICH WIDTH IS ALSO 500PX
//USE THE LENGTH OF MY GALLERY TO CHANGE THE IMAGES ONE BY ONE
    //I NEED AN INTERVAL OF TIME, SO THEY CAN ROTATE.
    //THE IMAGES HAVE TO STOP WHEN SHOWING THE LAST ONE (CONDITIONAL STATEMENT USING THE LENGTH)
//ADD EVENTLISTENER TO THE BUTTONS



const imgs = document.getElementById('imgs');
const leftButton = document.getElementById('left');
const rightButton = document.getElementById('right');

const img = document.querySelectorAll('#imgs img');

//the first element of my nodeList (it's similar than array in its structure, but it's not the same? - ASK!)
let index = 0;


//setInterval is a function that takes two parameter: a function and time
let interval = setInterval(run, 2000);

function run() {
    index = index + 1
    changeImage()
}

function changeImage() {
    //this will work like a reset
    if(index > img.length - 1) {
        index = 0
    } else if(index < 0) {
        index = img.length - 1
    }
    //to enter and change css, use style and then the property transform
    imgs.style.transform = `translate(${-index * 500}px)`
}

function resetInterval() {
    clearInterval(interval)
    //to reset the interval
    interval = setInterval(run, 2000)
}

rightButton.addEventListener('click', function(){
    //increase the index
    index = index + 1
    changeImage();
    //when changing the image the interval is not reseting, so we are going to reset it in a function above
    resetInterval()
})

leftButton.addEventListener('click', function(){
     //decrease the index
     index = index - 1
     changeImage()
     resetInterval()
})