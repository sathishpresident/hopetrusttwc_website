/**
  * membersLoading
  * boardMembersLoading
*/

; (function ($) {

    'use strict'

    var membersLoading = function () {
        var membersData = [{
            'name': 'Satish Kumar S',
            'designation': 'Founder & President',
            'image': 'images/member/1.jpg'
        },
        {
            'name': 'Khuthbudin T',
            'designation': 'Vice President',
            'image': 'images/member/3.jpg'
        },
        {
            'name': 'Rekha M',
            'designation': 'Secretary',
            'image': 'images/member/2.jpg'
        },
        {
            'name': 'Abdulkhudus R M',
            'designation': 'Treasurer',
            'image': 'images/member/4.jpg'
        },
        {
            'name': 'Ravi Chandhran P B',
            'designation': 'Trust Manager',
            'image': 'images/member/3.jpg'
        },
        {
            'name': 'Yuvashree S',
            'designation': 'Joint Secretary',
            'image': 'images/member/2.jpg'
        },
        {
            'name': 'Jagadeesh Y M',
            'designation': 'Head Organizer',
            'image': 'images/member/4.jpg'
        },
        {
            'name': 'Praveen Kumar R',
            'designation': 'Organizer 1',
            'image': 'images/member/1.jpg'
        },
        {
            'name': 'Arun Kumar K',
            'designation': 'Organizer 2',
            'image': 'images/member/1.jpg'
        },
        {
            'name': 'Abhinav R',
            'designation': 'Organizer 3',
            'image': 'images/member/1.jpg'
        },
        {
            'name': 'Venkatraman R',
            'designation': 'Organizer 4',
            'image': 'images/member/1.jpg'
        },
        {
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

        var carousel = $('#members-list');
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

        // members.innerHTML = html;
    }

    var boardMembersLoading = function () {
        var membersData = [{
            'name': 'Satish Kumar S',
            'designation': 'Founder & President',
            'image': 'images/member/1.jpg'
        },
        {
            'name': 'Khuthbudin T',
            'designation': 'Vice President',
            'image': 'images/member/3.jpg'
        },
        {
            'name': 'Rekha M',
            'designation': 'Secretary',
            'image': 'images/member/2.jpg'
        },
        {
            'name': 'Abdulkhudus R M',
            'designation': 'Treasurer',
            'image': 'images/member/4.jpg'
        },
        {
            'name': 'Ravi Chandhran P B',
            'designation': 'Trust Manager',
            'image': 'images/member/3.jpg'
        },
        {
            'name': 'Yuvashree S',
            'designation': 'Joint Secretary',
            'image': 'images/member/2.jpg'
        },
        {
            'name': 'Jagadeesh Y M',
            'designation': 'Head Organizer',
            'image': 'images/member/4.jpg'
        }];

        var carousel = $('#boardmembers-list');
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

    var administrators = function () {
        var membersData = [{
            'name': 'Venkatraman R',
            'designation': 'Organizer',
            'image': 'images/member/1.jpg'
        },
        {
            'name': 'Raju P L',
            'designation': 'Team Lead',
            'image': 'images/member/1.jpg'
        }];

        var carousel = $('#administrators-list');
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

    var fundRaisers = function () {
        var membersData = [{
            'name': 'Arun Kumar K',
            'designation': 'Organizer',
            'image': 'images/member/1.jpg'
        },
        {
            'name': 'Aravind S',
            'designation': 'Team Lead 1',
            'image': 'images/member/1.jpg'
        },
        {
            'name': 'Giridharan J',
            'designation': 'Team Lead 2',
            'image': 'images/member/1.jpg'
        }];

        var carousel = $('#fundraisers-list');
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

    var needyHunters = function () {
        var membersData = [{
            'name': 'Praveen Kumar R',
            'designation': 'Organizer',
            'image': 'images/member/1.jpg'
        },
        {
            'name': 'Chaitanya Karthick S',
            'designation': 'Team Lead 1',
            'image': 'images/member/1.jpg'
        },
        {
            'name': 'Evagelin Ruby N',
            'designation': 'Team Lead 2',
            'image': 'images/member/2.jpg'
        }];

        var carousel = $('#needyhunters-list');
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

    var eventizers = function () {
        var membersData = [{
            'name': 'Abhinav R',
            'designation': 'Organizer',
            'image': 'images/member/1.jpg'
        },
        {
            'name': 'Venkateshwaran N',
            'designation': 'Team Lead 1',
            'image': 'images/member/1.jpg'
        },
        {
            'name': 'Harish K R',
            'designation': 'Team Lead 2',
            'image': 'images/member/1.jpg'
        }];

        var carousel = $('#eventizers-list');
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

    // Dom Ready
    $(function () {
        membersLoading();
        boardMembersLoading();
        administrators();
        fundRaisers();
        needyHunters();
        eventizers();
    });

})(jQuery);