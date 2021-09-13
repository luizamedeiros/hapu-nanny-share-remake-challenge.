import React from 'react';
import {Links, Link, Item} from './LinksSectionStyle';

const LinksSection = ()=>{
     return(
    <Links>
        <Link><Item href="#">Share Your Nanny</Item></Link>
        <Link><Item href="#">Our Story</Item></Link>    
        <Link><Item href="#">Blog</Item></Link>
        <Link><Item href="#"> Terms & Privacy</Item></Link>
    </Links>
)}
export default LinksSection;