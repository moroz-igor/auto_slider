 'use strict';
$(document).ready(function() {
        var blink = $('img[alt=harley]');
        var imgWay = $('img[alt=harley]').attr('src');
        var imgNumber = +imgWay[14];
        var flag = true;
    function moveRight() {
            (imgNumber == 4) ? imgNumber = 0 : imgNumber;
                imgWay ='images/harley_' + ++imgNumber + '_mini.jpg';
                    blink.hide().attr('src', imgWay).show(800); 
    }
    function moveLeft() {
            (imgNumber == 1) ? imgNumber = 5 : imgNumber;
                imgWay ='images/harley_' + --imgNumber + '_mini.jpg';
                    blink.hide().attr('src', imgWay).show(800); 
    }
    var timerId = setInterval(moveRight, 4000);
    $('.fa-angle-right').click(function() {
        setTimeout(function() {
                clearInterval(timerId);
            moveRight();
            flag = false;
            timerId = 0;
        });
    });
    $('.fa-angle-left').click(function() {
        setTimeout(function() {
                clearInterval(timerId);
            moveLeft();
            flag = false;
            timerId = 0;
        });
    });    
    $('.proba').click(function(){
            if(flag === false)
            timerId = setInterval(moveRight, 4000);
            flag = true;
        });
    });

        