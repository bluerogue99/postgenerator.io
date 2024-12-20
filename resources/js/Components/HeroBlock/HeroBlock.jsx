import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn} from '@fortawesome/free-brands-svg-icons';
import './HeroBlock.css';

const HeroBlock = () => {


    const scrollToGenerator = () => {
        const generatorSection = document.getElementById('postgenerator');
        if (generatorSection) {
            generatorSection.scrollIntoView({ behavior: 'smooth' });
        }
    };


    return (
            <div className="hero-block" id="home">
            <div className="hero-scroll-icon-wrapper" onClick={scrollToGenerator}>
                <img src="/assets/GuestLayoutDesign/Home/chevron-down.svg"></img>
            </div>
            <div className="hero-content">
                <h1 className="hero-title">
                    <span className="hero-title-set">Ready, Set, </span>
                    <span className="hero-title-word hero-title-future" style={{ animationDelay: "0.3s" }}>Post!</span>{" "}
                    <p className="hero-title-set">AI-Generated</p>
                </h1>
                <h1 className="hero-title">Posts in Seconds</h1>
                <p className="hero-text">Experience the power of AI to create engaging posts effortlessly. Our AI-driven tool crafts high-quality, unique content for your social media, blogs, and more—in seconds. Perfect for marketers, influencers, and businesses alike.</p>
                <button className="hero-button" onClick={scrollToGenerator}>Try for Free!</button>
                <div className="social-icons">
                <a href="https://www.facebook.com/people/PostGeneratorio/61568373193221/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faFacebookF} className="social-icon" />
                </a>
                <a href="https://x.com/simcojozsef" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faTwitter} className="social-icon" />
                </a>
                <a href="https://www.instagram.com/postgeneratorio/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faInstagram} className="social-icon" />
                </a>
                <a href="https://www.linkedin.com/company/postgenerator-io/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedinIn} className="social-icon" />
                </a>
                </div>
            </div>
            <div className="hero-image">
                <img src="/assets/GuestLayoutDesign/Home/hero-svg.svg" alt="Hero" />
            </div>
        </div>
        
    );
};

export default HeroBlock;
