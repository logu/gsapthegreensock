(function(){
    'use strict';


    var $mainButton = $(".main-button"),
        $closeButton = $(".close-button"),
        $buttonWrapper = $(".button-wrapper"),
        $ripple = $(".ripple"),
        $layer = $(".layered-content");

    var timeline = new TimelineMax({paused:true});

    timeline.to($ripple, 0.3, {scale: 2, alpha: 0})
    		.to($buttonWrapper, 0.3, {right: 0,
    								  bottom: 0,
    								  y: -96,
    								  rotation:180}, '#rippling')

    		.to($buttonWrapper.find('.main-button'),0.3, {alpha: 0}, '#rippling-=0.1')
    		.to($buttonWrapper.find('.layer'),0.9,{scale: 100}, '#layerShown');

    timeline.to($layer, 0.5, {autoAlpha:1}, '#layerShown+=0.3')
    		.from($layer.find('.close-button'), 0.5, {scale: 0}, '#layerShown+=0.2');


    $mainButton.on("click", function(){
        timeline.timeScale(1);
        timeline.play();
    });

    $closeButton.on("click", function(){
        timeline.timeScale(2);
        timeline.reverse();
    });

})();