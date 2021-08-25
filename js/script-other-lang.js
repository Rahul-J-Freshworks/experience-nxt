$(document).ready(function () {

    $(".banner-card-wrap").owlCarousel({
        items: 1,
        autoplay: true,
        loop: false,
        mouseDrag: false
    });

    $(".speakersSlide").owlCarousel({
        items: 1,
        nav: false,
        autoplay: false,
        mouseDrag: false,
        autoplayHoverPause: false,
        dots: false,
        loop: false,
        navText: ["<i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right'></i>"]
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


$(window).on('load', function () {
    $("body").removeClass("loading");
    $('input[name="lead[custom_field][cf_source_referrer_url]"]').closest(".fserv-field").hide();
    $('input[name="lead[custom_field][cf_source_referrer_url]"]').val(window.location.href);
    $("body").removeClass("page-loading");
});



var json = [
    {
        "language": "English",
        "speakers": [
            // {
            //     "id": "e1",
            //     "name": "Anand",
            //     "fullName": "Anand Venkatraman",
            //     "designation": "VP & GM for APAC",
            //     "company": "Freshworks",
            //     "linkedin": "",
            //     "description": "",
            //     "imgSrc": "anand-venkatraman.png",
            //     "email": ""
            // },
            {
                "id": "e2",
                "name": "Ajey",
                "fullName": "Ajey Gore",
                "designation": "Operating Partner, Technology ",
                "company": "Sequoia Capital",
                "linkedin": "https://www.linkedin.com/in/ajeygore/",
                "description": "",
                "imgSrc": "ajey-gore.png",
                "email": ""
            },
            {
                "id": "e3",
                "name": "Arun",
                "fullName": "Arun Pattabhiraman",
                "designation": "Chief Growth Officer",
                "company": "Freshworks",
                "linkedin": "https://www.linkedin.com/in/arunpattabhiraman/",
                "description": "",
                "imgSrc": "arun-pattabhiraman.png",
                "email": ""
            },
            {
                "id": "e4",
                "name": "Vinod",
                "fullName": "Vinod Chandramouli",
                "designation": "Head of ASEAN Business",
                "company": "Freshworks",
                "linkedin": "https://www.linkedin.com/in/vinodchandramouli/",
                "description": "",
                "imgSrc": "vinod-chandramouli.png",
                "email": ""
            },
            {
                "id": "e5",
                "name": "Vishal",
                "fullName": "Vishal Chopra",
                "designation": "Head of Field Marketing APAC & MEA",
                "company": "Freshworks",
                "linkedin": "https://www.linkedin.com/in/vishalgchopra/",
                "description": "",
                "imgSrc": "vishal-chopra.png",
                "email": ""
            },
            {
                "id": "e7",
                "name": "Charles",
                "fullName": "Charles Manuel",
                "designation": "Managing Partner",
                "company": "Etragr Partners (Singapore)",
                "linkedin": "https://www.linkedin.com/in/charles-manuel/",
                "description": "",
                "imgSrc": "charles-manuel.png",
                "email": ""
            },
            {
                "id": "e8",
                "name": "Allian",
                "fullName": "Allian Marie Sheila Garcia",
                "designation": "Business Process Innovations Consultant",
                "company": "Philippine Seven Corporation",
                "linkedin": "https://www.linkedin.com/in/allian-marie-sheila-garcia-a8b09013/",
                "description": "",
                "imgSrc": "allian-marie.png",
                "email": ""
            },
            {
                "id": "e9",
                "name": "Raymond",
                "fullName": "Raymond Devadass",
                "designation": "Founder & CEO",
                "company": "Daythree",
                "linkedin": "https://www.linkedin.com/in/raymond-devadass-4a76178/",
                "description": "",
                "imgSrc": "raymond-devadass.png",
                "email": ""
            },
            {
                "id": "e10",
                "name": "Stanley",
                "fullName": "Stanley Chan",
                "designation": "Head of Technology Partners, Asia Pacific ",
                "company": "Amazon Web Services",
                "linkedin": "https://www.linkedin.com/in/stanleygchan/",
                "description": "",
                "imgSrc": "stanley-chan.png",
                "email": ""
            },
            {
                "id": "e11",
                "name": "Sutantijo",
                "fullName": "Cliff Ricardo Sutantijo",
                "designation": "VP of Growth & Marketing",
                "company": "Qoala",
                "linkedin": "https://www.linkedin.com/in/cliffricardosutantijo/",
                "description": "",
                "imgSrc": "cliff-ricardo.png",
                "email": ""
            },
            {
                "id": "e12",
                "name": "Maneesha",
                "fullName": "Maneesha Bhusal",
                "designation": "Director, Head of Customer Experience & Customer Service",
                "company": "JD.ID",
                "linkedin": "https://www.linkedin.com/in/maneeshabhusal/",
                "description": "",
                "imgSrc": "maneesha-bhusal.png",
                "email": ""
            },
            {
                "id": "e18",
                "name": "Ricky",
                "fullName": "Ricky S. Natapradja",
                "designation": "Dep. Chief Sales Officer - Local Sales & Distribution",
                "company": "PT Sompo Insurance Indonesia",
                "linkedin": "https://www.linkedin.com/in/ir-r-ricky-s-natapradja-1142ab1b/",
                "description": "",
                "imgSrc": "ricky-natapradja.png",
                "email": ""
            },
            {
                "id": "e19",
                "name": "Jeane",
                "fullName": "Jeane Carolina",
                "designation": "Customer Service Manager",
                "company": "Peduli Sehat",
                "linkedin": "https://www.linkedin.com/in/jeane-carolina-47777322/",
                "description": "",
                "imgSrc": "jeane-carolina.png",
                "email": ""
            },
            {
                "id": "e20",
                "name": "Puspa",
                "fullName": "Puspa Maslim",
                "designation": "Chief of Happiness Resources",
                "company": "Alterra",
                "linkedin": "https://www.linkedin.com/in/puspa-m-84573610/",
                "description": "",
                "imgSrc": "puspa-maslim.png",
                "email": ""
            },
            {
                "id": "e21",
                "name": "Mike",
                "fullName": "Mike Villar",
                "designation": "CEO",
                "company": "Growth Rocket",
                "linkedin": "https://www.linkedin.com/in/mikevillar/",
                "description": "",
                "imgSrc": "mike-villar.png",
                "email": ""
            },
            {
                "id": "e22",
                "name": "Nix",
                "fullName": "Nix Eniego",
                "designation": "Sr. Digital Marketing and Content Manager",
                "company": "Convosight",
                "linkedin": "https://www.linkedin.com/in/nixeniego/",
                "description": "",
                "imgSrc": "nix-eniego.png",
                "email": ""
            },
            {
                "id": "e6",
                "name": "Ganesh",
                "fullName": "Ganesh Raj",
                "designation": "Director of Strategic Partnerships",
                "company": "Freshworks",
                "linkedin": "https://www.linkedin.com/in/ganesh-raj-823ab65/",
                "description": "",
                "imgSrc": "ganesh-raj.png",
                "email": ""
            },
            {
                "id": "e13",
                "name": "Swaminathan",
                "fullName": "Swaminathan Raghunathan",
                "designation": "Director- Solutions Engineering, Global Partnerships",
                "company": "Freshworks",
                "linkedin": "https://www.linkedin.com/in/swaminathan-raghunathan-b89aa44/",
                "description": "",
                "imgSrc": "swaminathan-raghunathan.png",
                "email": ""
            },
            {
                "id": "e14",
                "name": "Chintu",
                "fullName": "Chintu Bousally",
                "designation": "Regional Sales Head, Singapore ",
                "company": "Freshworks",
                "linkedin": "https://www.linkedin.com/in/chintu-bousally/",
                "description": "",
                "imgSrc": "chintu-bousally.png",
                "email": ""
            },
            {
                "id": "e15",
                "name": "Kaushik",
                "fullName": "Kaushik Sekar",
                "designation": "Regional Sales Head, Phillipines ",
                "company": "Freshworks",
                "linkedin": "https://www.linkedin.com/in/sekarkaushik/",
                "description": "",
                "imgSrc": "kaushik-sekar.png",
                "email": ""
            },
            {
                "id": "e16",
                "name": "Sandeep",
                "fullName": "Sandeep John",
                "designation": "Head of Field Marketing, ASEAN",
                "company": "Freshworks",
                "linkedin": "https://www.linkedin.com/in/sandeepjohn/",
                "description": "",
                "imgSrc": "sandeep-john.png",
                "email": ""
            },
            {
                "id": "e17",
                "name": "Andrew",
                "fullName": "Andrew Navin",
                "designation": "Director, Customer Support",
                "company": "Freshworks",
                "linkedin": "https://www.linkedin.com/in/andrew-navin-b54134104/",
                "description": "",
                "imgSrc": "andrew-navin.png",
                "email": ""
            }
        ]
    },
    // {
    //     "language": "Bahasa",
    //     "speakers": [

    //         {
    //             "id": "b1",
    //             "name": "Jonathan",
    //             "fullName": "Jonathan Bryan",
    //             "designation": "Chief Marketing Officer",
    //             "company": "Koinworks",
    //             "linkedin": "https://www.linkedin.com/in/jonathan-bryan-a5615345/",
    //             "description": "Jonathan Bryan as Chief Marketing Officer is responsible to plan and execute overall marketing ideas both online and offline.As an online business enthusiast, Jonathan takes parts in conducting marketing and campaign ideas to emphasize the existence of KoinWorks. Aside from planning marketing ideas, Jonathan is also in charge of product development as he analyzes various aspects from the marketing side to make it real. With his passion in digital marketing, he was regularly coaching at 1000 Startup training hundreds of future leaders.Prior to joining KoinWorks, this Mechatronics Engineering graduate of Swiss German University, had spent his time in JobsDB and CareerBuilder Indonesia",
    //             "imgSrc": "jonathan.png",
    //             "email": "value"
    //         },
    //         {
    //             "id": "b2",
    //             "name": "Dayu",
    //             "fullName": "Dayu Dara Permata",
    //             "designation": "CEO",
    //             "company": "Pinhome",
    //             "linkedin": "https://www.linkedin.com/in/dayu-dara-permata-38072a2b/",
    //             "description": "Need access",
    //             "imgSrc": "dayu.png",
    //             "email": "value"
    //         },
    //         {
    //             "id": "b3",
    //             "name": "Kevin",
    //             "fullName": "Kevin Sugianto",
    //             "designation": "Head of Commercial",
    //             "company": "Kerry Express",
    //             "linkedin": "https://www.linkedin.com/in/kevinsugianto/",
    //             "description": "",
    //             "imgSrc": "kevin.png",
    //             "email": "value"
    //         },
    //         {
    //             "id": "b4",
    //             "name": "Yumir",
    //             "fullName": "Yumir Syamsyah Lubis",
    //             "designation": "Head of Marketing & communications",
    //             "company": "Chilibeli",
    //             "linkedin": "https://www.linkedin.com/in/yumir-lubis-36886030/",
    //             "description": "Yumir started to broaden up the marketing horizon in planning integrated advertising and promotional campaigns that stimulate sales, build consumer loyalty and increase bottom-line profitability.Previously, as the Creative Director at U-Studio Unilever, he led and commissions the team in the creation of entertaining and useful content, leveraging on creative insights from U-Studio's global network. Ten years of working in the creative industry gave him experience in creating thematic and tactical campaigns in teams such as Ogilvy, Geometry Global, TBWA, and leading a Tokopedia in-house creative team.  Also, Yumir led Tokopedia's in-house as Creative Group Lead, improving products and services for its users by using content creation both in visual and audio communication approach, standing up the social media engagement, creating and maintaining creative quality, and setting on brand guidelines.In 2015-2016, Yumir was the Senior Copywriter at Ogilvy & Mather Indonesia, where he created thematic and tactical campaigns from some of the biggest FMCG brands from Unilever and Nestle. He also joined in Thinking Machine Asia as Creative Group Head that won notable accounts for Pertamina, Mayora, PEPSI, via.com, and PZ Cussons.",
    //             "imgSrc": "yumir.png",
    //             "email": "value"
    //         },
    //         {
    //             "id": "b5",
    //             "name": "Hery Liandro",
    //             "fullName": "Hery Liandro",
    //             "designation": "Business Development Director",
    //             "company": "Weefer",
    //             "linkedin": "https://www.linkedin.com/in/hery-liandro-520a0850/",
    //             "description": "",
    //             "imgSrc": "hery.png",
    //             "email": "value"
    //         },
    //         {
    //             "id": "b6",
    //             "name": "Daud Novel Leonardo",
    //             "fullName": "Daud Novel Leonardo",
    //             "designation": "General Manager",
    //             "company": "Chilibeli",
    //             "linkedin": "https://www.linkedin.com/in/daud-novel-leonardo-2a493463/",
    //             "description": "",
    //             "imgSrc": "daud.png",
    //             "email": "value"
    //         },
    //         {
    //             "id": "b7",
    //             "name": "Aliya Amitra Tjakraamidjaja",
    //             "fullName": "Aliya Amitra Tjakraamidjaja",
    //             "designation": "COO",
    //             "company": "Tinkerlust",
    //             "linkedin": "https://www.linkedin.com/in/aliya-amitra-tjakraamidjaja-a4ab43a3/",
    //             "description": "",
    //             "imgSrc": "aliya.png",
    //             "email": "value"
    //         }
    //         // {
    //         //     "id": "b4",
    //         //     "name": "Yulia Dwi",
    //         //     "fullName": "Yulia Dwi Anggoro",
    //         //     "designation": "Sr. Community Engagement",
    //         //     "company": "Chilibeli",
    //         //     "linkedin": "https://www.linkedin.com/in/yulia-dwi-anggoro/",
    //         //     "description": "",
    //         //     "imgSrc": "yulia.png",
    //         //     "email": "value"
    //         // }

    //     ]
    // },
    // {
    //     "language": "Vietnamese",
    //     "speakers": [
    //         {
    //             "id": "v1",
    //             "name": "Kalidas Ghose",
    //             "fullName": "Kalidas Ghose",
    //             "designation": "CEO",
    //             "company": "FE Credit",
    //             "linkedin": "https://www.linkedin.com/in/kalidas-ghose-a02ab74/",
    //             "description": "",
    //             "imgSrc": "kalidas.png",
    //             "email": "value"
    //         },
    //         {
    //             "id": "v2",
    //             "name": "Vu Le Anh",
    //             "fullName": "Vu Le Anh",
    //             "designation": "CIO | Director",
    //             "company": "CMC Telecom | CMC Cloud Computing Unit",
    //             "linkedin": "https://www.linkedin.com/",
    //             "description": "",
    //             "imgSrc": "vu-le.png",
    //             "email": "value"
    //         },
    //         {
    //             "id": "v3",
    //             "name": "Vy Nguyen",
    //             "fullName": "Vy Nguyen",
    //             "designation": "Country Manager",
    //             "company": "Digi InfoFabrica",
    //             "linkedin": "https://www.linkedin.com/in/vytnguyen171/",
    //             "description": "",
    //             "imgSrc": "vy.png",
    //             "email": "value"
    //         },
    //         // {
    //         //     "id": "v4",
    //         //     "name": "Trung Dung",
    //         //     "fullName": "Trung Dung",
    //         //     "designation": "Human Resources Director",
    //         //     "company": "USG Boral Vietnam",
    //         //     "linkedin": "https://www.linkedin.com/in/trungdh/",
    //         //     "description": "",
    //         //     "imgSrc": "trun.png",
    //         //     "email": "value"
    //         // },
    //         {
    //             "id": "v4",
    //             "name": "Thinh Nguyen",
    //             "fullName": "Thinh Nguyen",
    //             "designation": "Head Of Information Technology",
    //             "company": "YOLA",
    //             "linkedin": "https://www.linkedin.com/in/thinh-nguyen-595b0430/",
    //             "description": "",
    //             "imgSrc": "thinh.png",
    //             "email": "value"
    //         },
    //         {
    //             "id": "v5",
    //             "name": "Peter Phuc Huynh",
    //             "fullName": "Peter Phuc Huynh",
    //             "designation": "Country Sales Director for Vietnam",
    //             "company": "Resulticks",
    //             "linkedin": "https://www.linkedin.com/in/hvphuc/",
    //             "description": "",
    //             "imgSrc": "peterphuchuynh.png",
    //             "email": "value"
    //         },
    //         {
    //             "id": "v5",
    //             "name": "Le Hong Phuc",
    //             "fullName": "Le Hong Phuc",
    //             "designation": "Founder & President",
    //             "company": "Vietnam Human Resources Association (VNHR)",
    //             "linkedin": "https://www.linkedin.com/in/lehongphuc/",
    //             "description": "",
    //             "imgSrc": "lehongphuc.png",
    //             "email": "value"
    //         }
    //         // {
    //         //     "id": "v3",
    //         //     "name": "Nguyễn Thịnh",
    //         //     "fullName": "Nguyễn Thịnh",
    //         //     "designation": "IT Director",
    //         //     "company": "Yola",
    //         //     "linkedin": "https://www.linkedin.com/in/thinh-nguyen-595b0430/",
    //         //     "description": "",
    //         //     "imgSrc": "thinh.png",
    //         //     "email": "value"
    //         // },
    //         // {
    //         //     "id": "v4",
    //         //     "name": "Mandy Nguyen",
    //         //     "fullName": "Mandy Nguyen",
    //         //     "designation": "Director of Ecosystem Development",
    //         //     "company": "Startup Vietnam Foundation",
    //         //     "linkedin": "https://www.linkedin.com/in/mandyquyennguyen/",
    //         //     "description": "",
    //         //     "imgSrc": "mandy.png",
    //         //     "email": "value"
    //         // },
    //         // {
    //         //     "id": "v6",
    //         //     "name": "Fulin Deok",
    //         //     "fullName": "Fulin Deok",
    //         //     "designation": "CTO",
    //         //     "company": "Infofabrica",
    //         //     "linkedin": "https://www.linkedin.com/in/fulin-deok-b0514455/",
    //         //     "description": "",
    //         //     "imgSrc": "fulin.png",
    //         //     "email": "value"
    //         // }
    //     ]
    // },
    // {
    //     "language": "Thai",
    //     "speakers": [
    //         {
    //             "id": "t2",
    //             "name": "Alex",
    //             "fullName": "Alex Natthaphon Kanjarnavoranun",
    //             "designation": "Assistant Vice President, Head of Online Marketing",
    //             "company": "Ex-robinson",
    //             "linkedin": "https://www.linkedin.com/in/natthaphon/",
    //             "description": "",
    //             "imgSrc": "alex.png",
    //             "email": "value"
    //         },
    //         {
    //             "id": "t3",
    //             "email": "value",
    //             "name": "Thanaboon Mingkaew",
    //             "fullName": "Thanaboon Mingkaew",
    //             "designation": "CEO & Chairman",
    //             "company": "SmartIoT Technology Co., Ltd.",
    //             "linkedin": "https://www.linkedin.com/in/thanaboon-mingkaew-953b332b/",
    //             "description": "",
    //             "imgSrc": "thanaboon.png",
    //             "email": "value"
    //         },
    //         {
    //             "id": "t1",
    //             "name": "Anthony Daño",
    //             "fullName": "Anthony Daño",
    //             "designation": "Head Of Business Development",
    //             "company": "SmartIoT Technology Co., Ltd.",
    //             "linkedin": "https://www.linkedin.com/in/anthony-da%C3%B1o-73314416b/",
    //             "description": "",
    //             "imgSrc": "anthony.png",
    //         },
    //         {
    //             "id": "t4",
    //             "name": "Jitti Niramitranon",
    //             "fullName": "Jitti Niramitranon",
    //             "designation": "Deputy Director (Office of Educational Administration)",
    //             "company": "Kasetsart University",
    //             "linkedin": "https://www.linkedin.com/in/jitti-niramitranon-2363211b9/",
    //             "description": "",
    //             "imgSrc": "jitti.png",
    //         },
    //         {
    //             "id": "t5",
    //             "name": "Pansak Plumkoson",
    //             "fullName": "Pansak Plumkoson",
    //             "designation": "Head of Sales",
    //             "company": "Cloudee Telecom",
    //             "linkedin": "https://www.linkedin.com/in/pansak-plumkoson-bab59a126/",
    //             "description": "",
    //             "imgSrc": "pansak.png",
    //         }

    //     ]
    // }
];

var a = '';
var b = '';
/////var c = '<div class="row justify-content-center">';
for (var i = 0; i < json.length; i++) {

    a += '<li class="nav-item"><a class= "nav-link" id = "' + json[i].language + '-tab" data-toggle="tab" href = "#' + json[i].language + '" role = "tab" aria-controls="' + json[i].language + '" aria-selected="true"> ' + json[i].language + '</a> </li>';

    b += '<div class="tab-pane fade show active in" id="' + json[i].language + '" role="tabpanel" aria-labelledby="' + json[i].language + '-tab" ></div>';

    $('#' + json[i].language).html(c);
}
$('#speakersTab').html(a);
$('#speakersTabContent').html(b);


for (var i = 0; i < json.length; i++) {

    var c = '<div class="row">';

    for (var j = 0; j < json[i].speakers.length; j++) {

        c += '<div class="col-xl-3 col-md-4 col-sm-6 col-12"><div class="speakers"><div class="speaker1"><div class="speaker-content"><h4>' + json[i].speakers[j].fullName + '</h4><p>' + json[i].speakers[j].designation + '</p><p class="speaker-company">' + json[i].speakers[j].company + '</p> </div> <div class="speakersImg-main">  <img class="speakersImg" src="images/speakers/' + json[i].speakers[j].imgSrc + '" /> </div><a data-toggle="modal"'
        c += 'data-fullName=' + JSON.stringify(json[i].speakers[j].fullName) + ''
        c += 'data-name=' + JSON.stringify(json[i].speakers[j].name) + ''
        c += 'data-designation=' + JSON.stringify(json[i].speakers[j].designation) + ''
        c += 'data-company=' + JSON.stringify(json[i].speakers[j].company) + ''
        c += 'data-description=' + JSON.stringify(json[i].speakers[j].description) + ''
        c += 'data-imgSrc=' + JSON.stringify(json[i].speakers[j].imgSrc) + ''
        c += 'data-linkedin=' + JSON.stringify(json[i].speakers[j].linkedin) + ''
        c += 'data-id=' + JSON.stringify(json[i].speakers[j].id) + ' data-target="#viewSpeakers">'
        c += '+</a> </div></div> </div>'
    }
    c += '</div>'
    $('#' + json[i].language).html(c);
    c = '';
}

$('#viewSpeakers').on('show.bs.modal', function (e) {
    // var yourparameter = e.relatedTarget.dataset.yourparameter;
    // Do some stuff w/ it.
    //alert((JSON.stringify(array)))

    //console.log($('#speakerName').length);
    $('#speakerName').html($(e.relatedTarget).attr('data-fullName'));
    $('#speakerDesignation').html($(e.relatedTarget).attr('data-designation') + "<br>" + $(e.relatedTarget).attr('data-company'));
    $('#speakerFollowName').html("Follow " + $(e.relatedTarget).attr('data-name'));
    $('.modal-speaker-img').css('background-image', 'url("images/speakers/' + $(e.relatedTarget).attr('data-imgSrc') + '")');
    $('#speakerLinkedIn').attr('href', $(e.relatedTarget).attr('data-linkedin'));
});

$('#viewSpeakers').on('shown.bs.modal', function (e) {
    $('.modal-backdrop.fade.in').remove();
});

$('#viewSpeakers').on('hidden.bs.modal', function (e) {
    $('.home-page').removeAttr("style");
});

// Mobile number validation
var WebFormEvent = {
    afterInstall: function () {
        (function ($) {
            $.fn.inputFilter = function (inputFilter) {
                return this.on("input keydown keyup mousedown mouseup select contextmenu drop",
                    function () {
                        if (inputFilter(this.value)) {
                            this.oldValue = this.value;
                            this.oldSelectionStart = this.selectionStart;
                            this.oldSelectionEnd = this.selectionEnd;
                        } else if (this.hasOwnProperty("oldValue")) {
                            this.value = this.oldValue;
                            this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
                        } else {
                            this.value = "";
                        }
                    });
            };
        }(jQuery));

        $('input[name="lead[custom_field][cf_source_referrer_url]"]').closest(".fserv-field").hide();
        $('input[name="lead[custom_field][cf_source_referrer_url]"]').val(window.location.href);
        $(".formserv-tel-field input").attr("maxlength", "15");
        $(".formserv-tel-field input").attr("minlength", "6");
        $(".formserv-tel-field input").inputFilter(function (value) {
            return /^-?\d*$/.test(value);
        });
    }
}

var loc = window.location.toString(), params = loc.split('?')[1], iframe = document.getElementById('iframe');
if (params) { iframe.src = iframe.src + '?' + params; }



function setHeightSpeakerImg() {

    var $this = $('#speakersTabContent .row>div .speakers .speakersImg-main');
    $this.css("height", $this.width())
    // console.log($this.height())
}
setHeightSpeakerImg();

$(window).resize(function () {
    setHeightSpeakerImg();
});
