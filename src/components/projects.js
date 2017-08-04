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
                    image: 'src/assets/img/projects/sc.png'
                }, {
                    title: 'Champagne Grand Conclave',
                    image: 'src/assets/img/projects/cgc.png'
                }, {
                    title: 'Technews.fr',
                    image: 'src/assets/img/projects/technews.png'
                }, {
                    title: 'Sphero battle',
                    image: 'src/assets/img/projects/sphero.jpg'
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
                            Coming soon !
                        </Col>
                        <Col s={12} m={6} className="double-div-right">
                        </Col>

                        <Col s={12} className={'center paddings-top-bottom black-background width100'}>
                            {this.state.projects.map(function(project, index){
                                return <OneProject
                                    id={"one-project-"+index}
                                    key={"one-project-"+index}
                                    title={project.title}
                                    image={project.image}
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