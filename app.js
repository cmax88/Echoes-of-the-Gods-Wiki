document.addEventListener('DOMContentLoaded', function() {

    // Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.querySelector('.clickable-image');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

span.onclick = function() { 
  modal.style.display = "none";
}

// Function to zoom in and out
var slider = document.getElementById("zoom-slider");
var modalImg = document.getElementById("img01");
slider.oninput = function() {
    modalImg.style.transform = 'scale(' + this.value + ')';
}

var modalImg = document.getElementById("img01");
var isDragging = false;
var startX, startY, translateX = 0, translateY = 0;

// Mouse down event
modalImg.addEventListener('mousedown', function(e) {
    isDragging = true;
    startX = e.clientX - translateX;
    startY = e.clientY - translateY;
    modalImg.style.cursor = 'grabbing'; // Change cursor to indicate dragging
});

// Mouse move event
window.addEventListener('mousemove', function(e) {
    if (isDragging) {
        translateX = e.clientX - startX;
        translateY = e.clientY - startY;
        modalImg.style.transform = 'scale(' + slider.value + ') translate(' + translateX + 'px, ' + translateY + 'px)';
    }
});

// Mouse up event
window.addEventListener('mouseup', function() {
    if (isDragging) {
        isDragging = false;
        modalImg.style.cursor = 'grab'; // Change cursor back
    }
});

var slider = document.getElementById("zoom-slider");
slider.oninput = function() {
    modalImg.style.transform = 'scale(' + this.value + ') translate(' + translateX + 'px, ' + translateY + 'px)';
};

document.getElementById('searchForm').onsubmit = function(event) {
    event.preventDefault(); // Prevents the default form submission action
    var searchTerm = document.getElementById('searchInput').value;
    console.log('Searching for:', searchTerm);
    // Implement your search logic here, or navigate to a search results page
};

});