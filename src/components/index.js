import React from 'react';
import { Row, Col } from 'react-materialize';

import Data from './data';
import Header from './header';
import Footer from './footer';

require('../assets/sass/reset.scss');
require('../assets/sass/index.scss');

/**
 * Index page
 */
let data = new Data();
let Index = React.createClass({

    getInitialState: function(){
        return {
            data:data.state
        }
    },
    scrollToWho: function(){
        $('html, body').animate({
            scrollTop: $("#who").offset().top
        }, 800);
    },
    render() {
        return(
            <section id="index">

                <Header/>

                <section id="presentation" className="section-content">
                    <img src="./src/assets/img/fp-logo_second.jpg" id="logo" />
                    <p id="tagline">{this.state.data.tagline}</p>
                    <button id="action" onClick={this.scrollToWho}>{this.state.data.actionButton}</button>
                </section>

                <section id="who" className="section-content">
                    <Row className="double-div-row">
                        <Col className="picture-container" s={12} m={6} >
                            <img src="./src/assets/img/Fabien.JPG" id="profile"/>
                        </Col>
                        <Col s={12} m={6} className="section-padding">
                            <h1>{this.state.data.firstname}</h1>
                            <h1>{this.state.data.lastname}</h1>
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
                </section>

                <Footer/>

            </section>
        );
    }
});
export default Index;