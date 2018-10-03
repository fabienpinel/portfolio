import React from 'react';
import {Row, Col} from 'react-materialize';
import 'materialize-css';
import ParallaxHover from 'react-parallax-hover';
import Typed from 'typed.js';

import Data from './data';
import Header from './header';
import Footer from './footer';
import Skills from './skills';
import Projects from './projects';

require('../assets/sass/reset.scss');
require('../assets/sass/index.scss');

/**
 * Index page
 */
let data = new Data();
let typed;
class Index extends React.Component {
    constructor() {
        super();
        this.state = {
            data: data.state
        };
        this.onResize = this.onResize.bind(this);
        window.addEventListener('resize', this.onResize);

    }

    componentDidMount() {
        let options = {
            strings: ["runner", "developer", "performance addict", "in love with code", "vintage bike fan"],
            startDelay: 100,
            showCursor: false,
            typeSpeed: 20,
            backSpeed: 10,
            backDelay: 1500,
            loop: true
        };
        typed = new Typed("#tagline", options);
        this.onResize();
        const wow = new WOW();
        wow.init();
    }

    componentDidUpdate() {

    }

    scrollToWho() {
        $('html, body').animate({
            scrollTop: $("#who").offset().top
        }, 800);
    }

    onResize() {
        $('.picture-container').height($('#whoInfos').height());
        $('.width100').width($('body').width());
    }

    render() {
        return (
            <section id="index">
                <section id="presentation" className="section-content">

                    <div className="parallax-logo animated pulse">
                        <ParallaxHover width={200} height={200}>
                            <img ref='image' src="./src/assets/img/fp-logo_second.jpg" id="logo"/>
                        </ParallaxHover>
                    </div>
                    <p className="tagline wow fadeIn"><span id="tagline"> </span></p>
                    <button id="action" className="action wow slideInUp"
                            onClick={this.scrollToWho}>{this.state.data.actionButton}</button>
                    <div className="or-container  wow slideInUp">
                        <span className="or">or</span>
                    </div>
                    <a href="https://www.linkedin.com/in/fabienpinel/" target="_blanck">
                        <button className="action red-button wow slideInUp">
                        <span className="icon-container"><img
                            className="linkedin-icon"
                            src="../../src/assets/img/linkedin-icon.png"/></span> Visit my Linkedin
                        </button>
                    </a>
                </section>

                <section id="who" className="section-content">
                    <Row className="double-div-row">
                        <Col s={12} m={6} id="whoInfos">
                            <div className="custom-pad-top-bot">
                                <div className="section-padding">
                                    <h1 className="wow fadeInUp">{this.state.data.firstname}</h1>
                                    <h1 className="wow fadeInUp">{this.state.data.lastname}</h1>
                                    <h5 className="role wow fadeInUp">SOFTWARE ENGINEER @LELIVRESCOLAIRE.FR <br/> AND FREELANCE DEVELOPER</h5>
                                    <div>
                                        <div>
                                            <span className="col m2 profile-description-line wow fadeInUp"></span>
                                        </div>
                                        <div className="wow fadeInUp">
                                            <div className="no-paddings">
                                                <p className="profile-description">
                                                    I am a front-end developer specialized in UI and UX development.
                                                    Driven by inspiring projects, I love working for innovative
                                                    solutions with disruptive designs.
                                                    I am 300% passionate about what I do, always trying to push myself
                                                    to the
                                                    edge of my knowledge.
                                                    I deeply believe that going out of our comfort zone must be an
                                                    everyday
                                                    moto.
                                                </p>
                                            </div>
                                        </div>

                                    </div>

                                </div>
                            </div>
                        </Col>
                        <Col s={12} m={6} className="picture-container picture"></Col>
                    </Row>

                </section>

                <section id="what">
                    <h1 className="title ">My work</h1>
                    <Projects />
                </section>

                <section id="motivations" className="section-content">
                    <Row>
                        <h1 className="title wow fadeInDown">My motivation</h1>

                        <Col s={12} m={6} className="wow slideInLeft">
                            <div className="quote">
                                <p>
                                    "Pay attention to what users do, not what they say."
                                    — Jakob Nielsen
                                </p>
                            </div>
                            <br />
                            <div className="quote">
                                <p>"Simplicity is the ultimate complexity"</p>
                            </div>
                        </Col>
                        <Col s={12} m={6} className="wow slideInRight">
                            <p className="padding-top-mobile">
                                My thirst for knowledge is a never ending love story... That's why:
                                <li>- I always have more books than I can read</li>
                                <li>- I listen to various podcasts to learn new things every day</li>
                                <li>- I invest in personal development, try to apply minimalism, and I'm environmentally
                                    conscious (recycling, going to work by bike, lowering consumerism)
                                </li>
                                <li>- I'm constantly looking to improve my processes, making changes to my daily routine
                                    (agility, remote jobs etc.)
                                </li>
                                <li>- The wilderness is my escape. Travelling by van through various landscapes, trail
                                    running and hiking allows me to clear my mind, stay creative and most important of
                                    all, healthy and energetic
                                </li>
                            </p>
                        </Col>
                    </Row>
                </section>

                <section id="skills" className="section-content">
                    <h1 className="title">My skills</h1>
                    <Skills/>
                </section>

                <Footer/>

            </section>
        );
    }
}

export default Index;