$(document).ready(function () {
    $(".banner-card-wrap").owlCarousel({
        items: 1,
        autoplay: true,
        loop: true,
    });

    $(".partner-logos").owlCarousel({
        items: 5,
        nav: true,
        autoplay: true,
        loop: true,
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


$('a[href^="#"]:not([data-toggle="tab"])').on('click', function (e) {
    var navHeight = document.getElementById("topNavBar");
    $('html, body').animate({ scrollTop: $(this.hash).offset().top - navHeight.offsetHeight }, 800);
    return false;
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

$(window).on('load', function () {
    $("body").removeClass("loading");
});


var speakerObj;
speakerObj = {
    "en": [
        { "name": "Oliver", "fullName": "Oliver Fortades", "designation": "Head of Corporate Process Management", "company": "W-Tech Solutions Inc.", "linkedin": "https://www.linkedin.com/in/oliverfortades/", "description": "ITIL Expert, CCISO, PRINCE2, CRM", "imgSrc": "src", "email": "oliver.fortades@w-techsolutions.com" },
        { "name": "Asmah", "fullName": "Asmah Yassin", "designation": "Snr. Manager Business Application", "company": "Sapura", "linkedin": "https://www.linkedin.com/in/asmah-yassin-700b1912/", "description": "Group Transformation and Performance, Technology", "imgSrc": "src", "email": "asmah.yassin@sapura-omv.com" },
        {
            "name": "Chan", "fullName": "Chan Kee Siak", "designation": "Founder & CEO, Exabytes Group", "company": "Exabytes Group", "linkedin": "https://www.linkedin.com/in/keesiak/", "description": "Started humbly as a helper at his father’s hawker store, Chan enrolled into a local college at 18 years old, selling PC hardware on a part time basis to earn his tuition fees. As he discovered the potential of web hosting and lack of providers in Malaysia when building a website for his customer, at 19 he set up his first web hosting reseller business which was 100% Online based, and business kept coming in. To grab the once in a lifetime opportunity, Chan dropped out of college to concentrate on his online business.Under the leadership of Chan, today the Exabytes Group consists of 12 subsidiaries, with businesses ranging from web hosting to eCommerce and e- Deliveries, serving over 140, 000 businesses with over 1 million users in 121 countries.Besides being the local director of Founder Institute, Chan is also the president of the Internet Alliance, Malaysia, and the honoree of TOYM(Top Outstanding Young Malaysian), 2015. Chan is also co- founder of EasyParcel, EasyStore, EasyWork, EasySpace and angel investors in several startups. ", "imgSrc": "src", "email": "chan@exabytes.com"
        },
        {
            "name": "Jaymes", "fullName": "Jaymes Deok", "designation": "Chief Digital Officer", "company": "Infofabrica Consulting Pte Ltd", "linkedin": "https://www.linkedin.com/in/fulin-deok-b0514455/", "description": "Jaymes Deok is the Chief Digital Officer of InfoFabrica. He spearheads InfoFabrica’s digital transformation journey. After spending more than a decade in digital consultancy, Jaymes truly understands how digital transformation can help businesses achieve improved customer experience, employee experience and desired business outcomes. Jaymes worked with Infineon, Royal Sporting House, Singapore Petroleum Company and NAFDA to achieve improved customer experience, employee productivity and data accuracy. Jaymes had also worked with a broad spectrum of digital solutions like ERP solutions, accounting solutions, finance performance management solutions, finance budgeting & planning solutions, cloud contact centre solutions, omnichannel communication solutions, service desk ticketing solutions, project management solutions, task management solutions, sales management solutions, customer relationship management solutions, point - of - sales solutions, business intelligence solutions etc.", "imgSrc": "src", "email": "value"
        },
        // { "name": "nam", "fullName": "fullName", "designation": "value", "company": "value", "linkedin": "value", "description": "value", "imgSrc": "src", "email": "value" },


    ],
    "ba": [
        {
            "name": "Jonathan Bryan", "fullName": "Jonathan Bryan", "designation": "Chief Marketing Officer", "company": "Koinworks", "linkedin": "https://www.linkedin.com/in/jonathan-bryan-a5615345/", "description": "Jonathan Bryan as Chief Marketing Officer is responsible to plan and execute overall marketing ideas both online and offline.As an online business enthusiast, Jonathan takes parts in conducting marketing and campaign ideas to emphasize the existence of KoinWorks. Aside from planning marketing ideas, Jonathan is also in charge of product development as he analyzes various aspects from the marketing side to make it real. With his passion in digital marketing, he was regularly coaching at 1000 Startup training hundreds of future leaders.Prior to joining KoinWorks, this Mechatronics Engineering graduate of Swiss German University, had spent his time in JobsDB and CareerBuilder Indonesia", "imgSrc": "src", "email": "value"
        },

        { "name": "Dayu Dara Permata", "fullName": "Dayu Dara Permata", "designation": "CEO", "company": "Pinhome", "linkedin": "https://www.linkedin.com/in/dayu-dara-permata-38072a2b/", "description": "Need access", "imgSrc": "src", "email": "value" },

    ],
    "vi": [
        { "name": "Colin", "fullName": "Colin Blackwell", "designation": "Chairman of HR Group", "company": "Vietnam Business Forum", "linkedin": "https://www.linkedin.com/in/colin-blackwell-70772030/", "description": "Colin has been in Vietnam since 1995 and is the founder of the national HR Associations. Hs experience ranges from consulting for PwC, to global HR leadership roles, to now founding a tech startup social enterprise. He advises the Vietnam government on HR matters in his role with the World Bank's Vietnam Business Forum. He is a judge of the Vietnam HR Awards and a number of global startup competitions, including the United Nations Generation Unlimited and the Hult Prize. He is a keynote speaker around Asia on the future of work and how people can best adapt to technology transformation.", "imgSrc": "src", "email": "value" },

    ],
    "th": [

    ]
}