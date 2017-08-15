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
                <Radar data={this.state.data} options={this.state.chartOptions} width={600} height={250} redraw />
                <Row className="skills-set">
                    <Col s={12} m={6} l={3}>
                        <h3>Web</h3>
                        <ul className="skill-list">
                            <li>Angular2, AngularJS</li>
                            <li>ReactJS</li>
                            <li>Sass</li>
                            <li>Jquery</li>
                            <li>Sass</li>
                            <li></li>
                            <li></li>
                        </ul>
                    </Col>
                    <Col s={12} m={6} l={3}>
                        <h3>App</h3>
                        <ul className="skill-list">
                            <li>Android</li>
                            <li>Cordova</li>
                            <li></li>
                        </ul>
                    </Col>
                    <Col s={12} m={6} l={3}>
                        <h3>Methodology</h3>
                        <ul className="skill-list">
                            <li>Agile programming</li>
                            <li>Extreme programming</li>
                            <li>Test driven development</li>
                            <li>Design driven development (UX first)</li>
                            <li></li>
                        </ul>
                    </Col>
                    <Col s={12} m={6} l={3}>
                        <h3>Miscellaneous</h3>
                        <ul className="skill-list">
                            <li>Coding Dojo organizer (agile programming excercices)</li>
                            <li>Student project manager</li>
                            <li>Startup Weekend organizer (2 years) and participant for several times</li>
                            <li>High tech influencer</li>
                            <li>Community manager of several shops for a while</li>
                            <li>Video recording and editing amateur (checkout ...)</li>
                            <li></li>
                        </ul>
                    </Col>
                </Row>
            </section>

        );
    }
}
export default Skills;