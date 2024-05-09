import React from 'react';
import data from "../../data/data.json";
import {
  FacebookIcon,
  FacebookMessengerIcon,
  LinkedinIcon,
  PinterestIcon,
  RedditIcon,
  TumblrIcon,
  TwitterIcon,
  WhatsappIcon,
} from "react-share";
import { Link } from 'react-router-dom';

export default function SocialLinks() {
  
  return (
    <>
        <Link to="https://www.facebook.com" target="_blank">
            <FacebookIcon  size={32} round={true} />
         </Link>     
         <Link to="https://www.messenger.com/" target="_blank">
            <FacebookMessengerIcon size={32} round={true} />
          </Link>   
          <Link to="https://linkedin.com" target="_blank">
            <LinkedinIcon size={32} round={true} />
          </Link>
          <Link to="https://www.pinterest.com/" target="_blank">
            <PinterestIcon size={32} round={true} />
          </Link>  
          <Link to="https://www.reddit.com/?rdt=33923" target="_blank">
            <RedditIcon size={32} round={true} />
          </Link>
          <Link to="https://www.tumblr.com/" target="_blank">
            <TumblrIcon size={32} round={true} />
          </Link>
          <Link to="https://twitter.com/?lang=en" target="_blank">
            <TwitterIcon size={32} round={true} />
           </Link>
          <Link to="https://www.whatsapp.com/" target="_blank">
            <WhatsappIcon size={32} round={true} />
          </Link>           
    </>
  )
}
