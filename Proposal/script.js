// pehli aur dusri no ke liye
function redirectToPage1() {
    window.location.href = 'no2.html';
}

function redirectToPage2() {
    window.location.href = 'no3.html';
}

// kabi bhi haan kre toh yeh
function redirectToPage5(){
    window.location.href = 'yes.html';
}

//teesre pe b na kre toh 
/* function randomizePositionOnClick(elementId) {
    var button = document.getElementById(elementId);
    if (!button) return; // Exit if button element is not found
    
    button.addEventListener('click', function() {
        var maxX = window.innerWidth - button.offsetWidth;
        var maxY = window.innerHeight - button.offsetHeight;
        var newX = Math.floor(Math.random() * maxX);
        var newY = Math.floor(Math.random() * maxY);
        
        button.style.left = newX + 'px';
        button.style.top = newY + 'px';
    });
}

// Call the function with the ID of the button element
randomizePositionOnClick('randomButton');*/
/* document.addEventListener("DOMContentLoaded", function() {
    // Function to randomize button position
    function randomizePositionOnClick(elementId) {
        var button = document.getElementById(elementId);
        if (!button) return; // Exit if button element is not found
        
        button.addEventListener('click', function() {
            var maxX = window.innerWidth - button.offsetWidth;
            var maxY = window.innerHeight - button.offsetHeight;
            var newX = Math.floor(Math.random() * maxX);
            var newY = Math.floor(Math.random() * maxY);
            
            button.style.left = newX + 'px';
            button.style.top = newY + 'px';
        });
    }
    
    // Call randomizePositionOnClick with the ID of the button
    randomizePositionOnClick('randomButton');
});

*/ 

const buttonHeight = 70;
const buttonWidth = 70;

const maxWidth = window.innerWidth - buttonWidth;
const maxHeight = window.innerHeight - buttonHeight;

window.addEventListener('DOMContentLoaded',() =>{
    const button = document.getElementById('button');

    button.addEventListener('click',() => alert('You clicked me !!!'))

    button.addEventListener('mouseover',() => {
        button.style.left = Math.floor(Math.random() * (maxWidth + 1)) + 'px';
        button.style.top = Math.floor(Math.random() * (maxHeight + 1)) + 'px';
})
});


// ganna
