import React from 'react';
import ImageSec4 from '../../assets/images/ImageSection4.png';
import {SectionSubtitle, SectionImage} from './FrameworkStyle';

const Framework = () => {
    return(
        <section>
            <div>
                <h2>A framework built for the long term</h2>
                <SectionSubtitle>
                    Childcare is for the long term. 
                    And you need a framework you can count on that gives 
                    your share long term viability and success.
                    That’s why we’ve defined Hapu around our three tribal principles; 
                    clearly defined process, 
                    transparency over money and equality of participation.
                </SectionSubtitle>
                <a href="#">Read how Hapu’s tribal background defines our app </a>
                <SectionImage src={ImageSec4} alt="Image of user billing history"/>
            </div>
        </section>
    )
}
export default Framework;