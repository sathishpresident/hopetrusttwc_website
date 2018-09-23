/**
  * eventsLoading
*/

; (function ($) {

    'use strict'

    var eventsLoading = function () {
        var eventsData = [{
            'eventDate': '26 March 2017',
            'place': 'Placepalayam & Gudiyam',
            'Time': '6.00AM - 6.00PM',
            'Members': '12 Members',
            'Description': 'We provided solar lamp to each family, as there is no electricity available.\nWe entertained people by singing songs, providing small gifts and chocolates and provided special lunch.\nWe also gave a brief talk on cleanliness & health, child marriage and child labour.',
            'image': 'images/about/index-2/5.jpg'
        },
        {
            'eventDate': '06 May 2017',
            'place': 'Bharath Matha Sevai Illam',
            'Time': '1.00PM - 6.00PM',
            'Members': '9 Members',
            'Description': 'We provided special and gave stationary items to the special people. We thank Mourya and Sumanth for doing this good cause.',
            'image': 'images/about/index-2/5.jpg'
        },
        {
            'eventDate': '13 May 2017',
            'place': 'Thiruvallur',
            'Time': '10.00AM - 3.00PM',
            'Members': '6 Members',
            'Description': '"Talentron" an cultural fest for college students to raise funds to help the needy.',
            'image': 'images/about/index-2/5.jpg'
        },
        {
            'eventDate': '10 June 2017',
            'place': 'Asirvadhu Ashram',
            'Time': '6.00AM - 6.00PM',
            'Members': '12 Members',
            'Description': 'We provided solar lamp to each family, as there is no electricity available.\nWe entertained people by singing songs, providing small gifts and chocolates and provided special lunch.\nWe also gave a brief talk on cleanliness & health, child marriage and child labour.',
            'image': 'images/about/index-2/5.jpg'
        },
        {
            'eventDate': '28 - 29 July 2017',
            'place': 'IIAP, Kavalur, Thiruvanamalai Dist',
            'Time': '2 Days',
            'Members': '19 Members',
            'Description': 'We organized a special tour for orphan children. We had full of thoughts and experience sharing session about the observatory telescope view and geek science facts.',
            'image': 'images/about/index-2/5.jpg'
        },
        {
            'eventDate': '02 October 2017',
            'place': 'Irrukam Island',
            'Time': '7.00AM - 8.00PM',
            'Members': '57 Members',
            'Description': 'We had a conversation with the Children and gathered in a place and started our events.\nWe began with Games first and then few Cultural programs.\nour Trust ladies prepared a good lunch for everyone.',
            'image': 'images/about/index-2/5.jpg'
        },
        {
            'eventDate': '26 November 2017',
            'place': 'SRMC Porur, Chennai',
            'Time': '10.00AM - 3.00PM',
            'Members': '11 Members',
            'Description': 'An Workshop on "Students role in the Development of NGO" along with appreciating the young achievers who are all from poor background.',
            'image': 'images/about/index-2/5.jpg'
        },
        {
            'eventDate': '23 December 2017',
            'place': 'Pathiri Village',
            'Time': '6.30AM - 7.00PM',
            'Members': '24 Members',
            'Description': 'we planned an awareness program on Usage of Plastics – Its Merits & De-merits. T-shirts were one of their need, hence’ we managed to get t-shirts based on the sizes of the children & packed it according to the size and gender along with a snack in each pack for the children to relish.',
            'image': 'images/about/index-2/5.jpg'
        }]

        var events = document.getElementsByClassName("events-story")[0];

        var html = eventsData.map((event, index) => {
            let className = "";
            if (index % 2 !== 0) {
                className = "entry-style1";
            }

            return `<article class="entry clearfix ${className}">
            <div class="events-post">
                <a href="#">
                    <img src=${event.image} alt="image">
                </a>
            </div>
            <div class="content-post">
                <p class="date">${event.eventDate}</p>
                <h2 class="title-post">
                    <a href="#">${event.place}</a>
                </h2>
                <div class="meta-post clearfix">
                    <ul>
                        <li class="time">${event.Time}</li>
                        <li class="address">
                            <a href="#">${event.Members}</a>
                        </li>
                    </ul>
                </div>
                <div class="entry-post">
                    <p>${event.Description}</p>
                    <div class="more">
                        <a href="#">Learn More</a>
                    </div>
                </div>
            </div>
        </article>`
        }).join('');

        events.innerHTML = html;

    }

    // Dom Ready
    $(function () {
        eventsLoading();
    });

})(jQuery);