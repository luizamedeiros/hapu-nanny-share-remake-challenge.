import React from 'react';
import ImageSec3 from '../../assets/images/ImageSection3.png'
import {SectionWrapper, PaymentImage, TextSection, SectionTitle, SectionSubtitle} from './PaymentStyle';

const PaymentSection = () => {
    return(
    <SectionWrapper>
        <PaymentImage src={ImageSec3}/>
        <TextSection>
            <SectionTitle>Shared payments made simple</SectionTitle>
            <SectionSubtitle>
            Sometimes it’s hard enough just sharing a restaurant bill. 
            Try sharing that bill week in, week out and you might encounter more than a few snares. 
            But not with Hapu. Simply set your rates and our automated payment system takes care of the rest. 
            You need never talk money or who owes what.
            </SectionSubtitle>
            <a href="#">
            Read how Bridget’s share (without Hapu) ended over $15
            </a>
        </TextSection>
    </SectionWrapper>
        );
}
export default PaymentSection;