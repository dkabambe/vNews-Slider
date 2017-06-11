/*globals window, $, clearInterval, setInterval */
function getDateFmt(timestamp, format) {      //Uses JQuery UI datepicker
    "use strict";
    var dateArray = timestamp.replace(/ /g, ":").replace(/-/g, ":").split(":");
    return $.datepicker.formatDate(format, new Date(Date.UTC(dateArray[0], dateArray[1] - 1, dateArray[2], dateArray[3], dateArray[4])));
}

(function ($) {
    $.fn.vNews = function (options) {
        var defaults = {
            headerTag: 'h4',
            headerWidth: '31%', //Width of header section
            dateAttr: 'date',
            contentTag: 'div',
            contentWidth: '', //Width of content section. NB: 0 = Fill remaining space
            headerClass: '',
            contentClass: '',
            dateFormat: 'd M yy',
            selected: 0, //Which news item to start with (0-based index)
            speed: 5000 // in ms
        },
            masterObj = this,
            tempHTML = '';
        
        options = $.extend(true, defaults, options);

        masterObj.addClass("vnHeaderWrap")
            .each( function() {
                var obj = $(this),
                    selIndex = 0,
                    vnTimer;
                //this code run for each element called, (i.e. to actually update the display)
                function doTimedSwitch() {
                    if(options.speed===0) { return false; }
                    vnTimer = setInterval( function () {
                        $next = obj.children(".vnSelected").nextAll(options.headerTag).first();
                        if($next.length===0) { $next = obj.children(options.headerTag).first(); }
                        $next.trigger("click");
                    }, options.speed);
                }
            
                maxHeight = 10;
                obj.children(options.contentTag).addClass("vnContent")
                    .each( function () {
                        maxHeight = ($(this).outerHeight(true) > maxHeight) ? $(this).outerHeight(true) : maxHeight;
                    }) //obj.children(content).each
                    .hover( function () { clearInterval(vnTimer); } , doTimedSwitch );
                obj.wrap('<div class="vnWrap"></div>').css("min-height",maxHeight);
                obj.children(options.headerTag)
                    .addClass("vnHeader")
                    .click( function () {
                        obj.children(options.contentTag).hide();
                        $(this).siblings(options.headerTag).removeClass("vnSelected");
                        $(this)
                            .addClass("vnSelected")
                            .nextAll(options.contentTag).first().show();
                    }) //obj.children(header).click
                    .hover( function () {
                        obj.siblings(".vnSelected").addClass("vnSelTemp").removeClass("vnSelected");
                        obj.children(options.contentTag).hide();
                        $(this).nextAll(options.contentTag).first().show();
                        clearInterval(vnTimer);
                    }, function () {
                        obj.siblings(".vnSelTemp").addClass("vnSelected").removeClass("vnSelTemp");
                        if(!$(this).hasClass("vnSelected")) {
                            obj.children(options.contentTag).hide();
                            $(this).siblings(".vnSelected").nextAll(options.contentTag).first().show();
                        }
                        doTimedSwitch();
                    })  //obj.children(header).hover
                    .each( function () {
                        if($(this).attr(options.dateAttr)) {
                            dateString = getDateFmt($(this).attr(options.dateAttr), options.dateFormat);
                            $(this).append($('<div class="vnDate">').html(dateString));
                        }
                    }); //obj.children(header).each
                if(Math.abs(options.selected) < obj.children(options.headerTag).length){
                    obj.children(options.headerTag).eq(options.selected).trigger("click");
                } else {
                    obj.children(options.headerTag).first().trigger("click");
                }
                doTimedSwitch();
            }); //masterObj.each
    };
}(jQuery));        