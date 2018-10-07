/**
  * bestVolunteers
*/

; (function ($) {

    'use strict'

    var bestVolunteers = function () {
        var membersData = [{
            'name': 'Chaitanya Karthick S',
            'designation': 'Team Lead 1',
            'image': 'images/member/1.jpg'
        },
        {
            'name': 'Evagelin Ruby N',
            'designation': 'Team Lead 2',
            'image': 'images/member/2.jpg'
        },
        {
            'name': 'Aravind S',
            'designation': 'Team Lead 3',
            'image': 'images/member/1.jpg'
        },
        {
            'name': 'Giridharan J',
            'designation': 'Team Lead 4',
            'image': 'images/member/1.jpg'
        },
        {
            'name': 'Venkateshwaran N',
            'designation': 'Team Lead 5',
            'image': 'images/member/1.jpg'
        },
        {
            'name': 'Harish K R',
            'designation': 'Team Lead 6',
            'image': 'images/member/1.jpg'
        },
        {
            'name': 'Raju P L',
            'designation': 'Team Lead 7',
            'image': 'images/member/1.jpg'
        }];

        var carousel = $('#best-members-list');
        carousel.trigger('destroy.owl.carousel');
        carousel.find('.owl-stage-outer').children().unwrap();
        carousel.removeClass("owl-center owl-loaded owl-text-select-on");

        var html = membersData.map((member, index) => {
            return `<div class="cs-module-4">
            <div class="item">
                <div class="overlay"></div>
                <img src=${member.image} alt="image">
            </div>
            <div class="demo">
                <div class="cs-post">
                    <div class="cs-post-header">
                        <div class="cs-category-links">
                            <h6 class="name">
                                <a href="#">${member.name}</a>
                            </h6>
                            <span class="position">${member.designation}</span>

                            <div class="cs-post-footer">
                                <div class="cs-footer-share">
                                    <a href="#" target="_blank">
                                        <i class="fa fa-facebook"></i>
                                    </a>
                                    <a href="#" target="_blank">
                                        <i class="fa fa-twitter"></i>
                                    </a>
                                    <a href="#" target="_blank">
                                        <i class="fa fa-google-plus"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>`
        }).join('');

        carousel.html(html);

        carousel.owlCarousel({
            loop: true,
            nav: false,
            margin: 30,
            dots: true,
            auto: true,
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: true,
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 2
                },
                767: {
                    items: 2
                },
                991: {
                    items: 3
                },
                1200: {
                    items: 4
                }
            }
        });
    }

    var allCount = function () {
        var countData = [{
            'name' : 'Volunteers',
            'count': 86
        },
        {
            'name' : 'Events',
            'count': 13
        },
        {
            'name' : 'Donations',
            'count': 47
        },
        {
            'name' : 'Awards',
            'count': 7
        }];

        var divToPlace = document.getElementById('count-data-list');

        var html = countData.map((member, index) => {
            return `<div class="col-md-3">
            <div class="flat-counter">
                <div class="numb-count" data-to=${member.count} data-speed="2000" data-waypoint-active="yes">${member.count}</div>
                <div class="name-count">
                    <p>${member.name}</p>
                </div>
            </div>
        </div>`
        }).join('');

        divToPlace.innerHTML = html;
    }

    // Dom Ready
    $(function () {
        bestVolunteers();
        allCount();
    });

})(jQuery);