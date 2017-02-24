import React from 'react';
import { Row, Col } from 'react-materialize';
import ParallaxHover from 'react-parallax-hover';

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
let Index = React.createClass({

    getInitialState: function(){
        window.addEventListener('resize', this.onResize);
        return {
            data:data.state
        }
    },
    componentDidMount: function() {
        this.resizePicture();
    },
    scrollToWho: function(){
        $('html, body').animate({
            scrollTop: $("#who").offset().top
        }, 800);
    },
    onResize: function(){
        console.log("resize");
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
                    <p id="tagline">{this.state.data.tagline}</p>
                    <button id="action" onClick={this.scrollToWho}>{this.state.data.actionButton}</button>
                </section>

                <section id="who" className="section-content">
                    <Row className="double-div-row">
                        <Col s={12} m={6} className="picture-container picture"></Col>
                        <Col s={12} m={6} id="whoInfos">
                            <div className="section-padding" >
                                <h1>{this.state.data.firstname}</h1>
                                <h1>{this.state.data.lastname}</h1>
                                <p>I work as a software engineer and do some motivative projects on the side.</p>
                                <p>As a background: </p>
                                <ul>
                                    <li>Polytech Nice Sophia - Engineering school</li>
                                    <li>European Innovation Academy - Summer entrepreneurship program</li>
                                    <li>Startup Week-End - 2 times attended (Lille and Nice) + 2 times organizer</li>
                                    <li>Coding Dojo organizer - Challenging coding events</li>
                                </ul>
                                <br />
                                <h3>Coming soon</h3>
                            </div>
                        </Col>
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