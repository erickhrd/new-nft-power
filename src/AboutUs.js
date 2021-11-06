import React from 'react';
import './AboutUs.css';


function AboutUs() {

    return (
        <div className='aboutus'>
           <h1>CupCake Founders</h1>
           <div className="display__inside__aboutus">
                  <div>
                    <img src="./cupcake.jpg"/>
                    <h2>@Founder1</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div>
                    <img src="./cupcake.jpg"/>
                    <h2>@Founder2</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div>
                    <img src="./cupcake.jpg"/>
                    <h2>@Founder3</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
        </div>
        </div>
    )
}

export default AboutUs;