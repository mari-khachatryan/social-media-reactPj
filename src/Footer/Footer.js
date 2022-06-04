import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer-cont">
    <div> 
      <h1>OUR PURPOSE</h1>
    <p>w;/dfmllkflkwbfkjlqwbfkjlqwbfjlqkwebfklqwfbqbwflkjqbwk</p>
    </div>
    <div>
     <h1> OUR STUDIO</h1>
     <p> team group</p>
    </div>
    <div>
      <h1>OUR SOCIAL NETWORK</h1>
      <a href="https://www.facebook.com/" target="_blank">
            
      <img src="https://pnggrid.com/wp-content/uploads/2021/07/Facebook-Logo-Square-768x768.png" className="imgFooter"></img>
          </a>
          <a href="https://www.instagram.com/" target="_blank">
  
          <img src="https://img.pngio.com/instagram-clipart-psd-instagram-logo-png-hd-download-transparent-instagram-logo-png-880_803.png" className="imgFooter"></img>
          </a>
          <a href="https://web.telegram.org/z/" target="_blank">
  
           <img src="https://image.similarpng.com/thumbnail/2021/01/Telegram-icon-on-transparent-background-PNG.png" className="imgFooter"></img>
          </a>
    </div>
    </div>
  );
}
export default Footer;