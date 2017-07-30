import React from 'react';
import { Row, Col } from 'react-materialize';
import ParallaxHover from 'react-parallax-hover';
import Typed from 'typed.js';

import Data from './data';
import Header from './header';
import Footer from './footer';
import Skills from './skills';

require('../assets/sass/reset.scss');
require('../assets/sass/index.scss');

/**
 * Index page
 */
let data = new Data();
let typed;
let Index = React.createClass({

    getInitialState: function(){
        window.addEventListener('resize', this.onResize);
        return {
            data:data.state
        }
    },
    componentDidMount: function() {
        let options = {
            strings: ["runner", "developer", "performance addict", "in love with code"],
            startDelay: 100,
            showCursor: false,
            typeSpeed: 20,
            backSpeed: 10,
            backDelay: 1500,
            loop: true
        };
        typed = new Typed("#tagline", options);
        this.resizePicture();
    },
    componentDidUpdate: function(){

    },
    scrollToWho: function(){
        $('html, body').animate({
            scrollTop: $("#who").offset().top
        }, 800);
    },
    onResize: function(){
        this.resizePicture();
    },
    resizePicture: function(){
        $('.picture-container').height($('#whoInfos').height());
    },
    render() {
        return(
            <section id="index">

                <Header/>

                <section id="presentation" className="section-content">

                    <div className="parallax-logo">
                        <ParallaxHover width={200} height={200} >
                            <img ref='image' src="./src/assets/img/fp-logo_second.jpg" id="logo" />
                        </ParallaxHover>
                    </div>
                    <p className="tagline"><span id="tagline"> </span></p>
                    <button id="action" onClick={this.scrollToWho}>{this.state.data.actionButton}</button>
                </section>

                <section id="who" className="section-content">
                    <Row className="double-div-row">
                        <Col s={12} m={6} id="whoInfos">
                            <div className="section-padding" >
                                <h1>{this.state.data.firstname}</h1>
                                <h1>{this.state.data.lastname}</h1>
                                <h5 className="role">SOFTWARE ENGINEER @AMADEUS <br/> AND FREELANCE DEVELOPER</h5>
                                <div>
                                    <div>
                                        <span className="col m2 profile-description-line"></span>
                                    </div>
                                    <Col s={12} m={10} className="no-paddings">
                                        <p className="profile-description">
                                            I am a front-end developer specialized in UI and UX development.
                                            I am driven by inspiring projects and I love working for innovative solutions with disruptive designs.
                                            I am 300% passionate about what I do and I always try to push myself to the edge of my knowledge.
                                            I deeply believe that going out of our comfort zone must be an everyday moto.
                                        </p>
                                    </Col>
                                </div>

                            </div>
                        </Col>
                        <Col s={12} m={6} className="picture-container picture"></Col>
                    </Row>

                </section>

                <section id="what" className="section-content">
                    <h1 className="title">My projects</h1>
                    <section className="double-div">
                        <Row className="double-div-row">
                            <Col s={12} m={6} className="double-div-left">
                                Coming soon !
                            </Col>
                            <Col s={12} m={6} className="double-div-right">
                            </Col>
                        </Row>
                    </section>
                </section>

                <section id="motivations" className="section-content">
                    <Row>
                        <h1 className="title">My motivations</h1>

                        <Col s={12} m={6}>
                            <div className="quote">
                                <p>
                                    {this.state.data.favoriteQuote}
                                </p>
                            </div>
                        </Col>
                        <Col s={12} m={6}>
                            <p>
                                I am driven by inspiring projects...
                            </p>
                        </Col>
                    </Row>
                </section>

                <section id="skills" className="section-content">
                    <h1 className="title">My skills</h1>
                    Coming soon !
                    <Skills/>
                </section>

                <Footer/>

            </section>
        );
    }
});
export default Index;