function openContent() {
     document.querySelector('.content').classList.toggle('active-tab');
     document.querySelector('.text-1').classList.remove('text-1-show')
     document.querySelector('.text-2').classList.remove('text-1-show');
}


function openSecondContent() {
    document.querySelector('.text-1').classList.toggle('text-1-show');
    document.querySelector('.text-2').classList.remove('text-1-show');
    document.querySelector('.content').classList.remove('active-tab');
}

function openEduContent() {
    document.querySelector('.text-2').classList.toggle('text-1-show');
    document.querySelector('.content').classList.remove('active-tab');
    document.querySelector('.text-1').classList.remove('text-1-show')
}


const initSlider = () => {
    const imageList = document.querySelector('.slider-wrapper .image-list');
    const sliderButtons = document.querySelectorAll('.slider-wrapper .slider-btn');
    const sliderScrollbar = document.querySelector('.container .slider-scrollbar');    
    const scrollbarThumb = sliderScrollbar.querySelector('.scrollbar-thumb'); 
    const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;



    //handle scrollbar thumb drag
    scrollbarThumb.addEventListener('mousedown', (e) => {
        const startX = e.clientX;
        const thumbPosiiton = scrollbarThumb.offsetLeft;



        //update thumb position on mouse move
        const  handleMouseMove = (e) => {
            const deltaX = e.clientX - startX;
            const newThumbPosition = thumbPosiiton + deltaX;
            const maxThumbposition = sliderScrollbar.getBoundingClientRect().width - scrollbarThumb.offsetWidth;

            const boundedPosition = Math.max(0, Math.min(maxThumbposition, newThumbPosition));
            const scrollPosition = (boundedPosition / maxThumbposition) * maxScrollLeft;

            scrollbarThumb.style.left = `${boundedPosition}px`;
            imageList.scrollLeft = scrollPosition;
        }



        //remove event listener on mouse up
        const handleMouseup = () => {
            document.removeEventListener('mousemove', handleMouseMove)
            document.removeEventListener('mouseup', handleMouseup)
        }

        //Add event listeners for drag interaction
        document.addEventListener('mousemove', handleMouseMove)
        document.addEventListener('mouseup', handleMouseup)
    });


 //slide images according to the slide button clicks
 sliderButtons.forEach(button => {
    button.addEventListener('click', () => {
        const direction = button.id === "prev" ? -1 : 1;
        const scrollAmount = imageList.clientWidth * direction;
        imageList.scrollBy({left: scrollAmount, behavior: 'smooth'});
    });
 });

 const handleSliderButtons = () => {
    sliderButtons[0].style.display = imageList.scrollLeft <= 0 ? 'none' : 'block';
    sliderButtons[1].style.display = imageList.scrollLeft >= maxScrollLeft ? 'none' : 'block';
 }

 //update scrollbar thumb position based on image scroll
 const  updateScrollThumbPosition = () => {
    const scrollPosition = imageList.scrollLeft;
    const thumbPosiiton = (scrollPosition / maxScrollLeft) * (sliderScrollbar.clientWidth - scrollbarThumb.offsetWidth);
    scrollbarThumb.style.left = `${thumbPosiiton}px`;
 }

 imageList.addEventListener('scroll', () => {
    handleSliderButtons();
    updateScrollThumbPosition();
 });
}

window.addEventListener('load', initSlider);



//slide


var sidemeun = document.querySelector('#sidemeun')

function openMenu() {
    sidemeun.style.right = '0';
}
function closeMenu() {
    sidemeun.style.right = '-200px';
}