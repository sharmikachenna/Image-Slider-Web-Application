
# 🖼️ Image Slider

A responsive **Image Slider/Carousel** built with **HTML, CSS, and JavaScript**.  
Users can navigate images using **Next/Previous buttons**, **dots**, or let it slide **automatically**.

---

## ✨ Features
-  Next/Previous buttons for navigation  
-  Clickable navigation dots  
-  Automatic slideshow (every 3 seconds)  
-  Smooth sliding animations  
-  Responsive design for all screen sizes  
-  Easily replaceable images via `src` in `.slide img`  

---

## ⚙️ How It Works
- All images are placed inside a `.slider` container, each wrapped in a `.slide` div.  
- The `.slider` moves horizontally using `transform: translateX(-currentSlide * 100%)` to show the active slide.  
- **Next/Previous buttons** update the `currentSlide` index, looping at the ends.  
- **Navigation dots** highlight the current slide and allow jumping to any slide on click.  
- An **automatic slideshow** changes slides every 3 seconds and resets after user interaction.

---

## 🛠️ Technologies Used
- **HTML5** – Structure and content  
- **CSS3** – Styling, layout, and responsive design  
- **JavaScript (ES6)** – Slider logic, animations, and auto-slide functionality

---

## 📁 Files
- `index.html` – Structure of the slider and buttons  
- `slider.css` – Styles for slider, buttons, and dots  
- `slider.js` – Functionality including automatic sliding and navigation  

---

## 📝 Notes
- Images are currently loaded from `https://picsum.photos/` as placeholders. Replace with your own images by changing the `src` attribute.  
- Fully customizable slider width, height, and speed via CSS and JavaScript.  
- Designed to work on desktop, tablet, and mobile screens.

---

## 🌐 Live Demo
You can view the live slider here:  

[Image Slider](https://sharmikachenna.github.io/image-slider-web-app/
)  



---

## 👤 Author
Sharmika Chenna
