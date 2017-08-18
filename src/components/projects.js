import React from 'react';
import { Row, Col } from 'react-materialize';
import OneProject from './one-project';



require('../assets/sass/projects.scss');

/**
 * Projects component
 */
class Projects extends React.Component{

    constructor(){
        super();
        this.state = {
            projects: [
                {
                    title: 'Souliers & Compagnie',
                    featuredPicture: 'src/assets/img/projects/sc.png',
                    images: [],
                    description: 'Souliers & Compagnie is a shoe retailer company'
                }, {
                    title: 'Champagne Grand Conclave',
                    featuredPicture: 'src/assets/img/projects/cgc.png',
                    images: [],
                    description: 'Explain what is the company, what s the goal of the website, how did I developed and which technologies'
                }, {
                    title: 'Technews.fr',
                    featuredPicture: 'src/assets/img/projects/technews.png',
                    images: [],
                    description: ''
                }, {
                    title: 'Sphero battle',
                    featuredPicture: 'src/assets/img/projects/sphero.jpg',
                    images: [],
                    description: 'School project etc.'
                },
            ]
        };
    }


    render() {
        return(
            <section className="projects-section">
                <section className="double-div">
                    <Row className="double-div-row">
                        <Col s={12} m={6} className="double-div-left">
                            <Row className="paddings">
                                <p>
                                    What I search in every project is a great relationship with the client.
                                    I think this is very important in order to work well together and provide each other the best we can.
                                </p>
                                <p>
                                    I love searching for new UX principle and implement great looking UI with easy interactions.
                                </p>
                            </Row>
                        </Col>
                        <Col s={12} m={6} className="double-div-right">
                            <div className="quote">
                                <p>"You've got to get up every morning with determination if you're going to go to bed with satisfaction."
                                    <br/><span className="signature">George Lorimer</span>
                                </p>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col s={12} className={'center paddings-top-bottom black-background width100'}>
                            {this.state.projects.map(function(project, index){
                                return <OneProject
                                    id={"one-project-"+index}
                                    key={"one-project-"+index}
                                    title={project.title}
                                    description={project.description}
                                    featuredPicture={project.featuredPicture}
                                    images={project.images}
                                /> ;
                            })}

                        </Col>
                    </Row>
                </section>
            </section>

        );
    }
}
export default Projects;