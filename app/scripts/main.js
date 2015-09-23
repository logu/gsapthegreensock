/*eslint-disable */
(function(){
    'use strict';


    var $mainButton = $(".main-button"),
        $closeButton = $(".close-button"),
        $buttonWrapper = $(".button-wrapper"),
        $ripple = $(".ripple"),
        $layer = $(".layered-content"),
        $detail = $('.thermo-detail'),
        $widget = $('.thermo-widget');

    var timeline = new TimelineMax({paused:true});

    timeline.to($ripple, 0.3, { ease: Bounce.easeOut, scale: 2, alpha: 0, BackgroundColor: '#00bcd4'})
    		.to($buttonWrapper, 0.3, {top: -100,
    								  right: -100,
    								  rotation:45,
                                      BackgroundColor: '#00bcd4'})

    		.to($buttonWrapper.find('.main-button'),0.3, {alpha: 0}, '-=0.1')
    		.to($buttonWrapper.find('.layer'),0.9,{scale: 100}, '#layerShown');

    timeline.to($layer, 0.5, {autoAlpha:1}, '#layerShown+=0.4')
    		.from($layer.find('.close-button'), 0.5, {scale: 0}, '#layerShown+=0.2')
            .from($layer.find('.c-datepicker__header-date'), 0.5, {rotationY: 90}, '#layerShown+=0.1');
    timeline.from($detail, 0.5, {width: $widget.width(), x:-$widget.width(), flex:0});


    $mainButton.on("click", function(){
        timeline.timeScale(1);
        timeline.play();
    });

    $closeButton.on("click", function(){
        timeline.timeScale(2);
        timeline.reverse();
    });

    $detail.on('date-changed',function(){
        $("#bars li .bar").each( function( key, bar ) {
            var percentage = Math.floor(Math.random() * 60) + 10;
            TweenMax.to($(this), 1, {height: percentage + '%'});
      });
    });

})();