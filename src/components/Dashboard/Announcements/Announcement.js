import React from 'react';
import Slider from 'react-slick';

const Announcement = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    };
    return (
        <div className="announcement">
            <Slider {...settings}>
                <div>
                    Lorem ipsum dolor amet try-hard blog pour-over bushwick 3 wolf moon 
                    humblebrag adaptogen thundercats aesthetic heirloom tbh. Plaid disrupt 
                    cornhole roof party banjo, letterpress air plant shaman +1.
                
                </div>
                <div>
                    Vaporware air plant echo park, shaman subway tile ramps drinking vinegar
                     hoodie selvage. Tumeric air plant +1 photo booth af gluten-free affogato
                    pitchfork sriracha.
                </div>
                <div>
                    You probably haven't heard of them kinfolk shabby chic, brooklyn VHS cred
                     iPhone small batch. Photo booth vinyl stumptown hoodie live-edge skateboard
                      deep v sustainable ugh mustache swag polaroid crucifix ethical.
                </div>
            </Slider>
        </div>
    );
};

export default Announcement;