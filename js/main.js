//button mouse over style. Creates bubble effect and the removes it once mouse moves
let buttons = document.querySelectorAll('.button');
buttons.forEach(function(button) {
button.addEventListener('mouseover', function(){
button.style.transform = 'scale(1.1)';
button.style.transition = 'transform 0.3s ease';
});

button.addEventListener('mouseout', function(){
    button.style.transform = 'scale(1)';
})
});

//
let navLinks = document.querySelectorAll("nav a");
navLinks.forEach((link) => {
  link.addEventListener("click", function () {
    navLinks.forEach((l) => l.classList.remove("active"));
    link.classList.add("active");
  });
});
// changes color to green when mouse over
let allLinks = document.querySelectorAll ('a');
allLinks.forEach(link=> {
link.addEventListener('mouseover', function() {
   link.style.color = '#444C22';
});


//changes link color back to normal
link.addEventListener('mouseout', function(){
    link.style.color = '';
});
});

// hero heading animation
let textReveal = document.getElementById('hero-heading');
let words = textReveal.textContent.split(' ');
textReveal.textContent = '';

words.forEach((word, index)=> {
    let span = document.createElement('span');
    span.textContent = word;
    span.classList.add('word');
    span.style.opacity =0;
    textReveal.appendChild(span);

    if (index < words.length -1) {
        textReveal.appendChild(document.createTextNode(' '));
    }
    
    setTimeout(() => {
        span.style.opacity = 1;
    }, index * 100);
});


//nav menu
let hamburger = document.getElementById('hamburger');
let navMenu = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('nav-active');
});

navMenu.addEventListener('mouseleave',()=> {
    navMenu.classList.remove('nav-active');
});



// Athlete page
let athletes = [
    {name: 'Craig Jackson', weightClass:'Welterweight'},
    {name: 'Sam Osteinhauser', weightClass:'Featherweight'},
    {name: 'Amanda Crossbey', weightClass:'Rooster'}
];
console.log(athletes);
function showAthleteList() {
    console.log('showAthleteList function is being called');
    let athleteList = document.getElementById('athleteList');
    console.log('Athlete List Element:', athleteList);
    athletes.forEach(function(athlete){
let athleteInfo =`<p>${athlete.name} - ${athlete.weightClass}</p>`;
athleteList.innerHTML += athleteInfo;
    });
   
}
window.onload = function(){
showAthleteList();
};

//countdown clock
let countdownDate = new Date("Jan 01, 2025 00:00:00").getTime();
let update = setInterval(function(){
    const now = new Date().getTime();
    const difference = countdownDate - now;
    
    const days = Math.floor (difference / (1000* 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference  % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference  % (1000 * 60)) / 1000);

    document.getElementById('countdown-clock').innerHTML = days + ':' + hours + ':' + minutes + ':' + seconds;
});


// Contact form
document.addEventListener('DOMContentLoaded', function(){
    let form = document.getElementById('contactForm');
    let nameInput = document.getElementById('name');
    let emailInput = document.getElementById ('email');
    let msgInput = document.getElementById ('msg');

    // nameInput.setAttribute('required','');
    // emailInput.setAttribute('required', '');
    // msgInput.setAttribute ('required', '');

    form.addEventListener('submit', function(event){
        console.log('Submit event triggered'); 
       let isValid = true;
       if (!nameInput.value.trim()) {
        isValid = false;
       }
       if (!emailInput.value.trim()) {
        isValid =false;
       }
       if (!msgInput.value.trim()) {
        isValid = false;
       }
       if(!isValid) {
        event.preventDefault();
        alert('Please fill out all fields.');
       
        }
    });
});
