import React from 'react';
import ImageSec5 from '../../assets/images/ImageSection5.png';
import { SectionImage, SectionTitle, SectionSubtitle } from './NannyDiaryStyle';

const NannyDiary = () => {
    return(
        <section>
            <div>
                <SectionImage src={ImageSec5} alt="decorative illustrations of nanny diary upcoming feature"/>
                <SectionTitle>Coming soon: Nanny Share Daily Diary!</SectionTitle>
                <SectionSubtitle>
                With the Hapu daily diary your nanny will be able to update you 
                and your sharers with photos and commentary of the day. You and sharers will receive 
                notifications and you’ll be able to login to view the daily adventures for your little ones. 
                We can’t wait!
                </SectionSubtitle>
            </div>
        </section>
    )
}
export default NannyDiary;