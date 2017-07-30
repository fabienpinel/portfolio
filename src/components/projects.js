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
                    </Row>
                </section>
            </section>

        );
    }
}
export default Projects;