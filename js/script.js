


var $slider = $('.slider');

if ($slider.length) {
  var currentSlide;
  var slidesCount;
  var sliderPhotos;
  var sliderCounter = document.createElement('div');
  var sliderPhotos = document.createElement('div');
  var sliderMap = document.createElement('div');
  sliderCounter.classList.add('slider__counter');
  sliderPhotos.classList.add('slider__photos');
  sliderMap.classList.add('slider__map');
  
  var updateSliderCounter = function(slick, currentIndex) {
    currentSlide = slick.slickCurrentSlide() + 1;
    slidesCount = slick.slideCount;
    $(sliderCounter).text(currentSlide + '/' +slidesCount)
    $(sliderPhotos).text('Photos')
    $(sliderMap).text('Map')
  };

  $slider.on('init', function(event, slick) {
    $slider.append(sliderCounter);
    $slider.append(sliderPhotos);
    $slider.append(sliderMap);
    updateSliderCounter(slick);
  });

  $slider.on('afterChange', function(event, slick, currentSlide) {
    updateSliderCounter(slick, currentSlide);
  });

  $slider.slick();
}


$(document).ready(function(){
  $('.count').prop('disabled', true);
  $(document).on('click','.plus',function(){
$('.count').val(parseInt($('.count').val()) + 1 );
if ($('.count').val() == 0) {
  $('.count').val(1);
 }
  });
     $(document).on('click','.minus',function(){
   $('.count').val(parseInt($('.count').val()) - 1 );
    if ($('.count').val() == 0) {
  $('.count').val(1);
 }
      });
});