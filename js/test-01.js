var TAG = '[main]';
var clog = console.log;
var sections;
var totalSections;
var windowHeight;

$(function() {
    clog(TAG + '[starts]');
    sections = $('section.card-container');
    totalSections = sections.length;
    clog('totalSections -> ', totalSections);
    windowHeight = window.innerHeight;
    clog('windowHeight -> ', windowHeight);

    $(window).on('scroll', function() {
        let TAG = '[window][scroll]';
        clog(TAG + '[starts]');
        let yWindow = window.scrollY;
        clog(yWindow);

        for (var i = 0; i < totalSections; i++) {
            clog('[' + i + ']');
            let currentSection = $(sections[i]);
            let sectionPosition = currentSection.position();
            clog(sectionPosition);
            let sectionHeight = currentSection.css('height');
            let sectionBottom = sectionPosition.top + Number.parseInt(sectionHeight);
            clog(sectionBottom)
            if (sectionBottom > (yWindow + windowHeight)) {
                currentSection.css('top', '-' + yWindow + 'px');
                clog(currentSection.css('top'))
                clog(currentSection.css('height'))
            }
            // if (sectionPosition.top < yWindow) {
            //     currentSection.css('top', yWindow + 'px');
            //     clog(currentSection.css('top'))
            //     clog(currentSection.css('height'))
            // }
        }

        clog(TAG + '[ends]');
    });
    clog(TAG + '[ends]');
});