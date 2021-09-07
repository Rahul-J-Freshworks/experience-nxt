$(document).ready(function () {

    $(".banner-card-wrap").owlCarousel({
        items: 1,
        autoplay: true,
        loop: true,
        mouseDrag: false,
        autoHeight: true
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
            {
                "id": "e1",
                "name": "Hervé Danzelaud",
                "fullName": "Hervé Danzelaud ",
                "designation": "Global Vice President - Channels, Alliances, Marketplace & Startups",
                "company": "Freshworks",
                "linkedin": "https://www.linkedin.com/in/danzelaud/",
                "description": "",
                "imgSrc": "herve-dan.png",
                "email": ""
            },
            {
                "id": "e2",
                "name": "Roy Tondra",
                "fullName": "Roy Tondra",
                "designation": "Head of Customer Care",
                "company": "Ace Hardware Indonesia",
                "linkedin": "https://www.linkedin.com/in/m-nurul-karim-roy-tondra-382a85163/",
                "description": "M. Nurul Karim Roy Tondra, is the full name of Roy Tondra. Born in Jakarta, January 21, 1989, the eldest of 2 children, he graduated from the Indonesian Institute of Technology in Chemical Engineering major. He is currently continuing the degree at Indonesia Open University majoring in Communication Studies. Started a career 10 years ago as a Call Center Staff in a Pizza delivery company. As his career progresses, he now holds the position of Head of Customer Care at PT ACE Hardware Indonesia Tbk.The journey and experience of handling and treating customers is a part of his life.",
                "imgSrc": "roy-tondra.png",
                "email": ""
            },
            {
                "id": "e3",
                "name": "Dery Mukti Hardiansah",
                "fullName": "Dery Mukti Hardiansah",
                "designation": "Head of Customer Care",
                "company": "DOKU",
                "linkedin": "https://www.linkedin.com/in/dery-mh-b7111585/",
                "description": "A professional Customer Service Operation with more than 9 years of experience in handling clients and national customers. Successfully has been building a customer service operation team and support system tools, customer satisfaction programs that increase customer loyalty.",
                "imgSrc": "dery-mh.png",
                "email": ""
            },
            {
                "id": "e4",
                "name": "Marcos Samosir",
                "fullName": "Marcos Samosir",
                "designation": "Country Leader - Customer Experience",
                "company": "CISCO Indonesia",
                "linkedin": "https://www.linkedin.com/in/marcossamosir/",
                "description": "",
                "imgSrc": "marcos-samosir.png",
                "email": ""
            },
            {
                "id": "e5",
                "name": "Andre Gunawan",
                "fullName": "Andre Gunawan",
                "designation": "VP Ops Excellence",
                "company": "PT Shippindo Teknologi Logistik (Shipper.id)",
                "linkedin": "https://www.linkedin.com/in/andre-gunawan/",
                "description": "Andre is leading the Operations Excellence team of Shipper, with the goal to modernize and scale Shipper operations by leveraging automation, product and technology. Prior to joining Shipper, Andre was heading product and digital marketing of Tokopedia. A scientist by discipline, Andre focus of interest is around adopting cutting edge technology to create disruption across Indonesia industries.",
                "imgSrc": "andre-gunawan.png",
                "email": ""
            },
            {
                "id": "e6",
                "name": "Kelly Oktavian",
                "fullName": "Kelly Oktavian",
                "designation": "Chief Commercial Officer",
                "company": "Riuh Renjana Creative",
                "linkedin": "https://www.linkedin.com/in/kellyoktavian/",
                "description": "",
                "imgSrc": "kelly-oktavian.png",
                "email": ""
            },
            {
                "id": "e7",
                "name": "Johnson Tan",
                "fullName": "Johnson Tan",
                "designation": "Sales Director",
                "company": "Optimaa Data",
                "linkedin": "https://www.linkedin.com/in/johnson-tan-a2810237/",
                "description": "",
                "imgSrc": "johnson-tan.png",
                "email": ""
            }
        ]
    },
    {
        "language": "Bahasa",
        "speakers": [
            {
                "id": "b1",
                "name": "Hervé Danzelaud",
                "fullName": "Hervé Danzelaud ",
                "designation": "Global Vice President - Channels, Alliances, Marketplace & Startups",
                "company": "Freshworks",
                "linkedin": "https://www.linkedin.com/in/danzelaud/",
                "description": "",
                "imgSrc": "herve-dan.png",
                "email": ""
            },
            {
                "id": "b2",
                "name": "Roy Tondra",
                "fullName": "Roy Tondra",
                "designation": "Head of Customer Care",
                "company": "Ace Hardware Indonesia",
                "linkedin": "https://www.linkedin.com/in/m-nurul-karim-roy-tondra-382a85163/",
                "description": "M. Nurul Karim Roy Tondra, adalah nama lengkap dari Roy Tondra. Lahir di Jakarta 21 Januari 1989 anak pertama dari 2 bersaudara mengenyam pendidikan di Institut Teknologi Indonesia program studi Chemical Engineering dan saat ini sedang melanjutkan kuliah dengan program studi Ilmu Komunikasi Universitas Terbuka. Meniti karir 10 tahun lalu sebagai Call Center Staff di perusahaan delivery Pizza. Seiring berjalannya karir, kini menduduki posisi sebagai Head of Customer Care di PT ACE Hardware Indonesia Tbk. Perjalanan dan pengalaman menghandle serta mentreatment customer adalah menjadi bagian dari hidupnya.",
                "imgSrc": "roy-tondra.png",
                "email": ""
            },
            {
                "id": "b3",
                "name": "Dery Mukti Hardiansah",
                "fullName": "Dery Mukti Hardiansah",
                "designation": "Head of Customer Care",
                "company": "DOKU",
                "linkedin": "https://www.linkedin.com/in/dery-mh-b7111585/",
                "description": "Customer Service Operation profesional dengan pengalaman lebih dari 9 tahun menangani client dan pelanggan nasional. Telah berhasil membangun tim operasi layanan pelanggan dan sistem pendukung, serta program kepuasan pelanggan yang bertujuan untuk meningkatkan loyalitas pelanggan.",
                "imgSrc": "dery-mh.png",
                "email": ""
            },
            {
                "id": "b4",
                "name": "Marcos Samosir",
                "fullName": "Marcos Samosir",
                "designation": "Country Leader - Customer Experience",
                "company": "CISCO Indonesia",
                "linkedin": "https://www.linkedin.com/in/marcossamosir/",
                "description": "",
                "imgSrc": "marcos-samosir.png",
                "email": ""
            },
            {
                "id": "b5",
                "name": "Andre Gunawan",
                "fullName": "Andre Gunawan",
                "designation": "VP Ops Excellence",
                "company": "PT Shippindo Teknologi Logistik (Shipper.id)",
                "linkedin": "https://www.linkedin.com/in/andre-gunawan/",
                "description": "Andre is leading the Operations Excellence team of Shipper, with the goal to modernize and scale Shipper operations by leveraging automation, product and technology. Prior to joining Shipper, Andre was heading product and digital marketing of Tokopedia. A scientist by discipline, Andre focus of interest is around adopting cutting edge technology to create disruption across Indonesia industries.",
                "imgSrc": "andre-gunawan.png",
                "email": ""
            },
            {
                "id": "b6",
                "name": "Kelly Oktavian",
                "fullName": "Kelly Oktavian",
                "designation": "Chief Commercial Officer",
                "company": "Riuh Renjana Creative",
                "linkedin": "https://www.linkedin.com/in/kellyoktavian/",
                "description": "",
                "imgSrc": "kelly-oktavian.png",
                "email": ""
            },
            {
                "id": "b7",
                "name": "Johnson Tan",
                "fullName": "Johnson Tan",
                "designation": "Sales Director",
                "company": "Optimaa Data",
                "linkedin": "https://www.linkedin.com/in/johnson-tan-a2810237/",
                "description": "",
                "imgSrc": "johnson-tan.png",
                "email": ""
            }

        ]
    },
    {
        "language": "Vietnamese",
        "speakers": [
            {
                "id": "v1",
                "name": "Hervé Danzelaud",
                "fullName": "Hervé Danzelaud ",
                "designation": "Global Vice President - Channels, Alliances, Marketplace & Startups",
                "company": "Freshworks",
                "linkedin": "https://www.linkedin.com/in/danzelaud/",
                "description": "",
                "imgSrc": "herve-dan.png",
                "email": ""
            }
        ]
    },
    {
        "language": "Thai",
        "speakers": [
            {
                "id": "t1",
                "name": "Hervé Danzelaud",
                "fullName": "Hervé Danzelaud ",
                "designation": "Global Vice President - Channels, Alliances, Marketplace & Startups",
                "company": "Freshworks",
                "linkedin": "https://www.linkedin.com/in/danzelaud/",
                "description": "",
                "imgSrc": "herve-dan.png",
                "email": ""
            }
        ]
    }
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
    $('.speakersImg-main').each(function () {
        $(this).css("height", $(this).width());
    });
}
setHeightSpeakerImg();

$(window).on('resize', function () {
    setHeightSpeakerImg();
});
