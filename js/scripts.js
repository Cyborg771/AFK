/*jslint browser:true */
/*global $, alert */

var scrolling = false;

function updateHeader() {
    'use strict';
    
    var wHeight = $(window).height(),
        tHeight = $('#title').height();
    $('#header').css('height', wHeight);
    $('#title').css('top', wHeight / 2 - tHeight / 2);
    
    
    var pTop = $('#panelists').offset().top,
        pHeight = $('#panelists').height(),
        gTop = $('#games').offset().top,
        gHeight = $('#games').height();
    
    $('.coming_soon.panelists').css('top', pTop + pHeight / 2);
    $('.coming_soon.games').css('top', gTop + gHeight / 2);
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