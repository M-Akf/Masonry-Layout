const prevButton = document.querySelector(".prev-button");
const nextButton = document.querySelector(".next-button");
const slides = document.querySelectorAll(".slide");
let currentIndex = 0

function showSlide(index){
    slides.forEach(slide=> slide.style.display = "none");
    slides[index].style.display = "block";
}
prevButton.addEventListener("click", function(){
    currentIndex = (currentIndex -1 + slides.length) % slides.length;
    showSlide(currentIndex);
});

nextButton.addEventListener("click", function(){
    currentIndex = (currentIndex +1 + slides.length) % slides.length;
    showSlide(currentIndex);
});
showSlide(currentIndex);

const readMoreButtons = document.querySelectorAll(".read-more-button");
readMoreButtons.forEach(button =>{
    button.addEventListener("click", function(){
    const textContainer = button.parentElement;
    const hiddenText = textContainer.querySelector(".hidden-text");
    

    //toggle the visibility of hidden text 
    hiddenText.classList.toggle("show");
    
    //change the button based on the visibility

    if(hiddenText.classList.contains("show")){
        button.textContent = "Read Less";
    }else{ button.textContent = "Read More";}
})});