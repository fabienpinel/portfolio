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
    render() {
        return(
            <section id="index">

                <Header/>

                <section id="presentation">
                    <img src="../other/logo/fp-logo_second.jpg" id="logo" />
                    <p id="tagline">{this.state.data.tagline}</p>
                    <button id="action" >who am I ?</button>
                </section>

                <section id="who">
                    <Row className="double-div-row">
                        <Col s={12} m={6} >
                            photo
                        </Col>
                        <Col s={12} m={6} >
                            <h1>{this.state.data.firstname}</h1>
                            <h1>{this.state.data.lastname}</h1>
                        </Col>
                    </Row>

                </section>

                <section id="what">
                    <h1>What I do</h1>
                    <section className="double-div">
                        <Row className="double-div-row">
                            <Col s={12} m={6} className="double-div-left">
                                My projects
                            </Col>
                            <Col s={12} m={6} className="double-div-right">
                            </Col>
                        </Row>
                    </section>
                </section>

                <section id="motivations">
                    <Row>
                        <h1>My motivations</h1>

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

                <section id="skills">
                    <h1>My skills</h1>
                    content and graphs
                </section>

                <Footer/>

            </section>
        );
    }
});
export default Index;