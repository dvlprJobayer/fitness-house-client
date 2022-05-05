import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './Slider.css';

const Slider = () => {
    return (
        <Carousel
            showArrows={true}
            infiniteLoop={true}
            showThumbs={false}
            showStatus={false}
            autoPlay={true}
            interval={6100}
        >
            <div>
                <p>
                    Wow what great service, I love it! I couldn't have asked for more than this. I have gotten at least 50 times the value from inventory.
                </p>
                <img width={200} src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt='' />
                <div className="myCarousel">
                    <h4 className='text-uppercase color'>Shirley Fultz</h4>
                    <h5>Acomo Group</h5>
                </div>
            </div>

            <div>
                <p>
                    Dude, your stuff is the bomb!Really good.I was amazed at the quality of inventory.
                </p>
                <img width={200} src="https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt='' />
                <div className="myCarousel">
                    <h4 className='text-uppercase color'>Daniel Keystone</h4>
                    <h5>Theresa industry</h5>
                </div>
            </div>

            <div>
                <p>
                    Man, this thing is getting better and better as I learn more about it. You won't regret it. I have gotten at least 50 times the value from inventory.
                </p>
                <img width={200} src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt='' />
                <div className="myCarousel">
                    <h4 className='text-uppercase color'>Theo Sorel</h4>
                    <h5>Sheltech Group</h5>
                </div>
            </div>

            <div>
                <p>
                    Needless to say we are extremely satisfied with the results.
                </p>
                <img width={200} src="https://media.istockphoto.com/photos/overjoyed-pretty-asian-woman-look-at-camera-with-sincere-laughter-picture-id1311084168?b=1&k=20&m=1311084168&s=170667a&w=0&h=mE8BgXPgcHO1UjSmdWYa21NIKDzJvMrjOffy39Ritpo=" alt='' />
                <div className="myCarousel">
                    <h4 className='text-uppercase color'>Larsen Lott</h4>
                    <h5>Hemko industry</h5>
                </div>
            </div>
        </Carousel>
    );
};

export default Slider;