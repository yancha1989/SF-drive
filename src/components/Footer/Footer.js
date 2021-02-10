import React from "react";
import "./footer.css";

function Footer(){
    return (
        <footer className="footer__frame">
            <div className="content__container">
                <div className="footer__frame-wrapper">
                    <div>
                        <img className="footer__frame-copyright" src="../img/copyright.svg"/>
                    </div>
                    <div className="footer__frame-socmedia">
                        <div>
                            <a className="footer__frame-item" href="https://www.instagram.com/skilldriveorg/?hl=ru" aria-label="You can find vk profile here">
                                <img src="../img/vk_icon.svg"/>
                            </a>
                        </div>
                        <div>
                            <a className="footer__frame-item" href="https://www.instagram.com/skilldriveorg/?hl=ru" aria-label="You can find instagram profile here">
                                <img src="../img/instagram_icon.svg"/>
                            </a>
                        </div>
                        <div>
                            <a className="footer__frame-item" href="https://www.instagram.com/skilldriveorg/?hl=ru" aria-label="You can find facebook profile here">
                                <img src="../img/facebook_icon.svg"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    );
}

export default Footer;
