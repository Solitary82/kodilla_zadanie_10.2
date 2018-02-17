$(function(){
    var width = 450;
    var animationSpeed = 1000;
    var pause = 3000;
    var currentSlide = 1;
    
    var $carousel = $('#carousel');
    var $slideContainer = $carousel.find('.slides');
    var $slides = $slideContainer.find('.slide');
    
    var interval;
    
    function startSlider() {
        interval = setInterval(function() {
            $('.slides').animate({'margin-left': '-=' + width}, animationSpeed, function() {
            currentSlide++;
                if(currentSlide === $slides.length) {
                    currentSlide = 1;
                    setTimeout(function() {
                    $slideContainer.css('margin-left', 0);
                    }, 1000);
                }
            });
        }, pause);
    }
    
    function stopSlider () {
        clearInterval(interval);
    }
    
    $carousel.on('mouseenter', stopSlider).on('mouseleave', startSlider);
    
    startSlider();
                 
});
