// Get important elements from the page DOM

const slider = document.querySelector('.slider');           // The box that moves left/right to show images
const slides = document.querySelectorAll('.slide');         // All individual slides (each contains an image)
const prevBtn = document.querySelector('.prev');            // "Previous" button
const nextBtn = document.querySelector('.next');            // "Next" button
const dotsContainer = document.querySelector('.dots-container'); // The area where dots will appear

// Keeps track of which slide is currently showing
let currentSlide = 0;

// Counts how many slides we have
const totalSlides = slides.length;

// A variable to store the automatic slide timer
let autoSlideInterval;

// Creates navigation dots below the slider

for (let i = 0; i < totalSlides; i++) {
  const dot = document.createElement('div');  // Creates a new dot
  dot.classList.add('dot');                   // Give it a CSS class for styling

  if (i === 0) dot.classList.add('active');   // Makes the first dot active (white)

  // When user clicks a dot, goes to that slide
  dot.addEventListener('click', () => goToSlide(i));

  // Adds the dot into the dots container
  dotsContainer.appendChild(dot);
}

// Now grabs all the dots we just created
const dots = document.querySelectorAll('.dot');

// Function: Updates the slider to show the current image

function updateSlider() {
  // Moves the slider so the current image is visible
  slider.style.transform = `translateX(-${currentSlide * 100}%)`;

  // Change which dot is highlighted
  dots.forEach(dot => dot.classList.remove('active'));   // Removes active class from all dots
  dots[currentSlide].classList.add('active');            // Adds it to the current dot
}
// Function: Jumps to a specific slide (when clicking a dot)

function goToSlide(index) {
  currentSlide = index;  // Sets the new current slide number
  updateSlider();        // Updates the image and dots
  resetAutoSlide();      // Restart the auto-slide timer
}

// Function: Goes to the next slide

function nextSlide() {
  // Increase slide index, loop back to 0 if we reach the end
  currentSlide = (currentSlide + 1) % totalSlides;
  updateSlider(); // Shows new image
}

// Function: Goes to the previous slide

function prevSlide() {
  // Decrease slide index, loop to last if we go below 0
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  updateSlider(); // Shows new image
}


// Button click events (when user clicks Next/Prev)

nextBtn.addEventListener('click', () => {
  nextSlide();      // Moves forward
  resetAutoSlide(); // Restart timer so it doesn't skip too fast
});

prevBtn.addEventListener('click', () => {
  prevSlide();      // Moves backward
  resetAutoSlide(); // Restart timer
});


// Function: Start the automatic slideshow

function startAutoSlide() {
  // Every 3 seconds, goes to the next slide automatically
  autoSlideInterval = setInterval(nextSlide, 3000);
}

// Function: Reset the automatic slideshow timer

function resetAutoSlide() {
  // Stops the old timer and starts a new one
  clearInterval(autoSlideInterval);
  startAutoSlide();
}

// When the page loads, starts everything

updateSlider();   // Shows the first image
startAutoSlide(); // Begin automatic sliding
