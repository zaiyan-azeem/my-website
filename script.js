


function fetchJoke() {
  fetch('https://icanhazdadjoke.com/', {
      headers: {
          'Accept': 'application/json'
      }
  })
  .then(response => response.json())
  .then(data => {
      document.getElementById('joke').textContent = data.joke;
  });
}

// Fetch joke when the page loads
/* COMMENTED OUT SO IT APPEARS ON LOGO CLICK
window.onload = fetchJoke;
*/

// Fetch joke when the 'Azeem' logo is clicked
document.querySelector('.logo').addEventListener('click', function(event) {
  event.preventDefault(); // Prevent the default action of the click
  fetchJoke();
});


//CHANGING TEXT

// Array of titles
var titles = [' Photographer', ' Media Editor', ' Athlete', ' Student', ' Gamer'];

// Get the span element
var titleElement = document.querySelector('#title');

// Initial index
var index = 0;

// Function to update title
function updateTitle() {
  // Update the span element's text
  titleElement.textContent = titles[index];
  
  // Move to next index
  index = (index + 1) % titles.length;
}

// Delay of 5 seconds before starting the cycle, then update title every 3 seconds
setTimeout(function() {
  setInterval(updateTitle, 4000);
}, 2700); // ms delay before the first title change


//POPUP CONTACT WINDOW

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementsByClassName("contact-button")[0];

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
if (event.target == modal) {
  modal.style.display = "none";
}
}


//SCROLL NAVBAR

window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.header');
  if (window.scrollY > 10) {  // Change the 10 to adjust the scroll distance required
      navbar.classList.add('solid-nav');
  } else {
      navbar.classList.remove('solid-nav');
  }
});
