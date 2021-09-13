import React from 'react';
import profilepic from '../../../assets/images/ProfileImage.png';
import { CarrouselDiv, ProfilePicture, SitterHours, SitterLink} from './AvailableSitterStyle';

const AvailableSitter = () => {
    return(
        <CarrouselDiv>
            <ProfilePicture src={profilepic} alt="Nanny's profile photo"/>
            <SitterLink href="#">Sarah's day care available now in North Sydney</SitterLink>
            <SitterHours>Wednesday, Thursday, Friday - 7:30 - 5:30</SitterHours>
        </CarrouselDiv>
    );
}
export default AvailableSitter;