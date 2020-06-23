import React from 'react';
import {Row, Col, Modal} from 'react-materialize';
require('../assets/sass/skills.scss');
import{Radar} from 'react-chartjs-2';


/**
 * Skills component
 */
class Skills extends React.Component {

    constructor() {
        super();
        let data = {
            labels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],
            datasets: [
                {
                    label: "My First dataset",
                    backgroundColor: "rgba(179,181,198,0.4)",
                    borderColor: "rgba(179,181,198,0.8)",
                    pointBackgroundColor: "white",
                    pointBorderColor: "#000",
                    pointHoverBackgroundColor: "#000",
                    pointHoverBorderColor: "rgba(179,181,198,1)",
                    data: [65, 59, 90, 81, 56, 55, 40]
                }
            ]
        };
        //<Radar data={this.state.data} options={this.state.chartOptions} width={600} height={250} redraw />


        this.state = {
            data: data,
            chartOptions: {
                scale: {
                    reverse: true,
                    ticks: {
                        beginAtZero: true
                    }
                }
            }
        };
    }

    render() {

        return (
            <section id="skills" className="wow fadeIn">
                <Row className="skills-set">
                    <Col s={6} m={3} l={2} offset="l1 m3">
                        <h3>Web</h3>
                        <ul className="skill-list padding-bottom">
                        <li>ReactJS</li>
                        <li>NextJS</li>
                            <li>Angular4, AngularJS</li>
                            <li>Jquery</li>
                            <li>Sass, Less</li>
                            <li></li>
                            <li></li>
                        </ul>
                    </Col>
                    <Col s={6} m={4} l={1}>
                        <h3>App</h3>
                        <ul className="skill-list padding-bottom">
                            <li>Android</li>
                            <li>Cordova</li>
                        </ul>
                    </Col>
                    <Col s={12} m={6} l={3}>
                        <h3>Methodology</h3>
                        <ul className="skill-list padding-bottom">
                            <li>Agile programming</li>
                            <li>Extreme programming</li>
                            <li>Test driven development</li>
                            <li>Design driven development (UX first)</li>
                            <li></li>
                        </ul>
                    </Col>
                    <Col s={12} m={6} l={4} offset="m3">
                        <h3>Miscellaneous</h3>
                        <ul className="skill-list padding-bottom">
                            <li>
                                <a href="javascript:void(0)"
                                   onClick={() => {
                                       $('#codingDojoModal').modal('open')
                                   }}>
                                    Coding Dojo organizer (agile programming excercices) [click to show more]
                                </a>
                            </li>
                            <li>
                                <a href="javascript:void(0)"
                                   onClick={() => {
                                       $('#facilitatorModal').modal('open')
                                   }}>External facilitator for student project [click to show more]
                                </a>
                            </li>
                            <li>Startup Weekend organizer (2 years) and participant several times</li>
                            <li>Hightech influencer (<a href="http://technews.fr" target="_blanck">Technews.fr</a>)</li>
                            <li>Community manager (<a href="http://soulierscompagnie.fr" target="_blanck">Souliers & Compagnie</a>)</li>
                            <li>Video recording and editing amateur ( Checkout
                                <span>
                                    <a href="https://www.youtube.com/channel/UCwUX9oENen7p63zGdKUu5Hg/videos"
                                       target="_blanck"> Startup Weekend Nice youtube channel</a>
                                </span>
                                )
                            </li>
                        </ul>
                    </Col>
                </Row>
                <Modal
                    header="Coding Dojo organizer (agile programming excercices)"
                    fixedFooter
                    id="codingDojoModal">
                    <br />
                    <h2>Photos</h2>
                    <img
                        className="width100"
                        src="../src/assets/img/codingdojos/coding-dojo-polytech1.jpg"/>
                    <img
                        className="width100"
                        src="../src/assets/img/codingdojos/coding-dojo-polytech2.jpg"/>
                    <img
                        className="width100"
                        src="../src/assets/img/codingdojos/coding-dojo-polytech3.jpg"/>
                    <h2>Videos</h2>
                    <iframe width="100%" height="315" src="https://www.youtube.com/embed/0Jh7qsgcUDA" frameBorder="0"
                            allowFullScreen></iframe>
                    <iframe width="100%" height="315" src="https://www.youtube.com/embed/9tcf7VuDc1Q" frameBorder="0"
                            allowFullScreen></iframe>
                    <iframe width="100%" height="315" src="https://www.youtube.com/embed/YDEIjAgxBrI" frameBorder="0"
                            allowFullScreen></iframe>
                </Modal>
                <Modal
                    header="External facilitator for student project"
                    fixedFooter
                    id="facilitatorModal">
                    <br />
                    <h2>Photo</h2>
                    <img
                        className="width100"
                        src="../src/assets/img/projects.jpg"/>
                </Modal>
            </section>

        );
    }
}
export default Skills;