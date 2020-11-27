var TAG = '[main]';
var clog = console.log;
var prevScroll = 0;
var nextScroll = 0;
var windowHeight = 0;
var slide_no = 0;
var total_sections = 0;

$(function() {
    clog(TAG + '[starts]');
    total_sections = $('section.slide').length;
    clog(total_sections);
    windowHeight = window.innerHeight;
    clog(TAG + windowHeight);
    // $(window).on('scroll', function() {
    //     clog('[window.scroll][starts]');
    //     nextScroll = window.scrollY;

    //     for (var i = 0; i < total_sections; i++) {
    //         if (nextScroll >= i * windowHeight && nextScroll < (i + 1) * windowHeight) {
    //             slide_no = i;
    //         }
    //     }

    //     clog(nextScroll + '; ' + slide_no);

    //     for (var i = 0; i < total_sections; i++) {
    //         if (i <= slide_no) {
    //             $('section[slide_no=' + i + ']').css('top', nextScroll);
    //         }
    //         //  else {
    //         //     $('section[slide_no=' + i + ']').removeClass('fixed-slide');
    //         // }
    //     }
    //     prevScroll = nextScroll;
    //     clog('[window.scroll][ends]');
    // });
    clog(TAG + '[ends]');
});