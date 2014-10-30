/*jslint browser:true */
/*global $, alert */

var scrolling = false;

function updateHeader() {
    'use strict';
    
    var wHeight = $(window).height(),
        tHeight = $('#title').height();
    $('#header').css('height', wHeight);
    $('#title').css('top', wHeight / 2 - tHeight / 2);
    
    
}

$(window).resize(updateHeader);

$(document).ready(function () {
    'use strict';
    
    updateHeader();
    
    $('.navlink').click(function (event) {
        event.preventDefault();
        
        $('.current').removeClass('current');
        $(this).addClass('current');
        
        scrolling = true;
        $('html, body').animate({
            scrollTop: $(this.hash).offset().top
        }, {
            duration: 1400,
            complete: function () {
                scrolling = false;
            }
        });
    });
    
    $('.tab').click(function (event) {
        event.preventDefault();
        
        var paragraph = $(this.hash);
        
        $('.tab.selected').removeClass('selected');
        $('.text.selected').removeClass('selected');
        $(this).addClass('selected');
        $(this.hash).addClass('selected');
    });
    
    /*$('.category_desc').css('height', '100px');
    
    $('.more_button').click(function (event) {
        event.preventDefault();
        
        var cat = $(this).parent(),
            p = cat.find('p'),
            cont = cat.find('.category_desc'),
            fade = cont.find('.fade');
        
        if ($(this).html() === 'More') {
            cont.animate({height: p.height() + 10}, 1000, function () {
                cont.css('height', 'inherit');
            });
            fade.delay(1000).fadeOut(500);
            $(this).html('Less');
        } else {
            fade.fadeIn(250);
            cont.delay(250).animate({height: 100}, 1000);
            $(this).html('More');
        }
    });*/
});

$(document).scroll(function () {
    'use strict';
    
    if (!scrolling) {
    
        var aTop = $('#about').position().top,
            cTop = $('#categories').position().top,
            pTop = $('#panelists').position().top,
            sTop = $('#speakers').position().top,
            gTop = $('#games').position().top,
            scrollTop = $(window).scrollTop() + $(window).height() / 4;

        $('.current').removeClass('current');

        if (scrollTop > gTop) {
            $('#gLink').addClass('current');
        } else if (scrollTop > sTop) {
            $('#sLink').addClass('current');
        } else if (scrollTop > pTop) {
            $('#pLink').addClass('current');
        } else if (scrollTop > cTop) {
            $('#cLink').addClass('current');
        } else if (scrollTop > aTop) {
            $('#aLink').addClass('current');
        }
        
    }
    
});