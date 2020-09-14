$(document).ready(function () {
    $(".banner-card-wrap").owlCarousel({
        items: 1
    });

    $(".partner-logos").owlCarousel({
        items: 5,
        nav: true,
        navText: ["<i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right'></i>"],
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 2
            },
            768: {
                items: 3
            },
            1099: {
                items: 5
            }
        }
    });
});

$('a[href^="#"]').on('click', function (e) {
    var navHeight = document.getElementById("topNavBar");

    $('html, body').animate({ scrollTop: $(this.hash).offset().top - navHeight.offsetHeight }, 800);
});

document.addEventListener('DOMContentLoaded', function () {
    var calendarEl = document.getElementById('fullcalendar');

    var calendar = new FullCalendar.Calendar(calendarEl, {

        headerToolbar: {
            left: 'prev,next today',
            center: 'title',
            right: 'listDay,listWeek'
        },

        // customize the button names,
        // otherwise they'd all just say "list"
        views: {
            listDay: { buttonText: 'list day' },
            listWeek: { buttonText: 'list week' }
        },

        initialView: 'listWeek',
        initialDate: '2020-09-12',
        navLinks: true, // can click day/week names to navigate views
        editable: true,
        height: 'auto',
        dayMaxEvents: true, // allow "more" link when too many events
        events: [
            {
                title: 'Meeting 1',
                start: '2020-09-12T12:00:00'
            },
            {
                title: 'Meeting 2',
                start: '2020-09-12T14:30:00'
            },
            {
                title: 'Meeting 3',
                start: '2020-09-12T17:30:00'
            },
            {
                title: 'Meeting 4',
                start: '2020-09-12T20:00:00'
            },
            {
                title: 'Meeting 5',
                start: '2020-09-13T07:00:00'
            },
            {
                title: 'Meeting 6',
                // url: 'http://google.com/',
                start: '2020-09-13T09:00:00'
            }
        ]
    });

    calendar.render();
});
