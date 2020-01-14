var TAG = '[main]';
var clog = console.log;
var prevScroll = 0,
    nextScroll = 0,
    windowHeight = 0;

$(function() {
    clog(TAG + '[starts]');
    windowHeight = window.innerHeight;
    clog(TAG + windowHeight);
    $(window).on('scroll', function() {
        nextScroll = window.scrollY;
        var slide_sections = $('section.slide');
        clog('[window][scroll] nextScroll -> ' + nextScroll);
        for (let section of slide_sections) {
            var section_top = $(section).attr('slide_no') * windowHeight;
            clog(section_top + "; " + $(section).css('top'));
            if (nextScroll > section_top) {
                clog(section_top);
                $(section).css('top', nextScroll);
            }
        }

        // if (nextScroll - prevScroll >= 0) {
        //     clog('scroll down');
        //     for (let section of slide_sections) {
        //         var section_top = $(section).attr('slide_no') * windowHeight;
        //         if (nextScroll > section_top) {
        //             clog(section_top);
        //             $(section).css('top', nextScroll);
        //         }
        //     }
        // } else {
        //     clog('scroll up');
        //     for (let section of slide_sections) {
        //         var section_top = $(section).attr('slide_no') * windowHeight;
        //         if (nextScroll > section_top) {
        //             clog(section_top);
        //             $(section).css('top', nextScroll);
        //         }
        //     }
        // }
        prevScroll = nextScroll;
    });
    clog(TAG + '[ends]');
});