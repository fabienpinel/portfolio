import React from 'react';
import { Row, Col } from 'react-materialize';
require('../assets/sass/skills.scss');
import{Radar} from 'react-chartjs-2';


/**
 * Skills component
 */
class Skills extends React.Component{

    constructor(){
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

        return(
            <section id="skills">
                <Row className="skills-set">
                    <Col s={6} m={3} l={2} offset="l1 m3">
                        <h3>Web</h3>
                        <ul className="skill-list padding-bottom">
                            <li>Angular2, AngularJS</li>
                            <li>ReactJS</li>
                            <li>Jquery</li>
                            <li>Sass</li>
                            <li></li>
                            <li></li>
                        </ul>
                    </Col>
                    <Col s={6} m={4} l={1}>
                        <h3>App</h3>
                        <ul className="skill-list padding-bottom">
                            <li>Android</li>
                            <li>Cordova</li>
                            <li></li>
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
                            <li>Coding Dojo organizer (agile programming excercices)</li>
                            <li>External facilitator for student project</li>
                            <li>Startup Weekend organizer (2 years) and participant several times</li>
                            <li>Hightech influencer</li>
                            <li>Community manager</li>
                            <li>Video recording and editing amateur ( Checkout
                                 <spans>
                                     <a href="https://www.youtube.com/channel/UCwUX9oENen7p63zGdKUu5Hg/videos" target="_blanck"> Startup Weekend Nice youtube channel</a>
                                 </spans> )
                            </li>
                            <li></li>
                        </ul>
                    </Col>
                </Row>
            </section>

        );
    }
}
export default Skills;