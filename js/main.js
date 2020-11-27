var TAG = "[main]";
var clog = console.log;
var total_sections = 0;
var education_slide_id = 0;
var total_slides = 3;

$(function () {
    clog(TAG + "[starts]");
    total_sections = $("section.slide").length;
    clog(total_sections);
    $(".slider-button").click(function () {
        clog("[slider-button][clicked]");
        let type = $(this).attr("type");
        let slide_item = $(this).siblings(".current-item");
        clog(type);
        current_slide_id = $(slide_item).attr("item-id");
        if (type == "left") {
            new_slide_id = (current_slide_id - 1) % total_slides;
        } else if (type == "right") {
            new_slide_id = (current_slide_id + 1) % total_slides;
        }
        if (new_slide_id < 0) {
            new_slide_id += total_slides;
        }
        clog(current_slide_id, new_slide_id);
        $(slide_item).removeClass("current-item");
        $(`.slider-item[item-id=${new_slide_id}]`).addClass("current-item");
    });
    clog(TAG + "[ends]");
});
