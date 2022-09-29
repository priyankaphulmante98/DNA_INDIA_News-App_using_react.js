import React from 'react'
import './Footer.css';


const Footer = () => {
  return (
    <div>
    <footer className="footer-content">
    <div id="container">
        <div className="footer-box">
            <div className="row">
                <ul className="nav">
                    <li className="nav-item">
                        <a className="nav-link" href="/">
                            <div className="dna-logo">
                                <img src="https://english.cdn.zeenews.com/static/apprun/dna/icons/logodna.png" alt="logo" height="40"  
                               / >
                            </div>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/india">INDIA</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/world">WORLD</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active" href="/business">BUSINESS</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/technology">TECHNOLOGY</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active" href="/sports">SPORTS</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/cricket">CRICKET</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active" href="/entertainment">ENTERTAINMENT</a>
                    </li>
                </ul>
            </div>
        </div>
        <div className="middle-footer-box">
            <div className="row">
                <div className="middle-footer-txt">
                    <div className="left-text">
                        <p>FOLLOW US ON</p>
                        <ul className="middle-nav">
                            <li>
                                <a href="https://www.facebook.com/dnaindia" target="">
                                    <img src="https://english.cdn.zeenews.com/static/apprun/dna/icons/icon-facebook.svg" alt="facebook"  />
                                </a>
                            </li>
                            <li>
                                <a href="https://twitter.com/dna" target=""  >
                                    <img src="https://english.cdn.zeenews.com/static/apprun/dna/icons/icon-twitter.svg" alt="twitter"  />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.youtube.com/channel/UCIRAYFbJmrP--jyrC9MAIWQ/videos" target=""  >
                                        <img src="https://english.cdn.zeenews.com/static/apprun/dna/icons/youtube-white.svg" alt="you-tube"  />
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <ul className="nav">
                            <li className="nav-item">
                                <a className="nav-link" href="/about">ABOUT DNA</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/contact">CONTACT US</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="/investors/index.html" target="_blank">INVESTORS </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/advertise">ADVERTISE</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/privacy-policy">PRIVACY-POLICY</a>
                            </li>
                        </ul>
                    </div>
                </div>
        </div>
        <div className="footer-box">
            <div className="row">
                <ul className="nav">
                    <li className="nav-item">
                        <div className="final-footer-box">
                            <p>PARTNER SITE</p>
                        </div>
                    </li>
                        <li className="nav-item">
                            <a className="nav-link" href="https://zeenews.india.com/" target="">ZEE NEWS</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="https://zeenews.india.com/hindi" target="">HINDI NEWS</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="https://zeenews.india.com/marathi" target="">MARATHI NEWS</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="https://zeenews.india.com/bengali" target="">BENGALI NEWS</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="https://zeenews.india.com/tamil" target="">TAMIL NEWS</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="https://zeenews.india.com/malayalam" target="">MALAYALAM NEWS </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="https://www.zeebiz.com/" target="">ZEE BUSINESS</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="https://www.wionews.com/" target="">WItON</a>
                        </li>
                    </ul>
                </div>
        </div>
        <div className="footer-end">
            <p>©1998-2022 INDIA DOT COM PRIVATE LIMITED, ALL RIGHTS RESERVED.</p>
        </div>
    </div>
</footer>
    
    </div>
  );
}

export default Footer
