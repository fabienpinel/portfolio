import React from 'react';
import { Row, Input, Icon } from 'react-materialize';

require('../assets/sass/footer.scss');

/**
 * Footer component
 */
class Footer extends React.Component{

    constructor(){
        super();
    }
    render() {
        return(
            <section id="footer" className="section-content">
                <h1 className="title">Say hey!</h1>
                <div className="switch">
                    <label>
                        <input type="checkbox" checked disabled="true"/>
                            <span className="lever"></span>
                            Available for projects
                    </label>
                </div>
                <div className="contact-div">
                    <p className="text-grey">If you want to get in touch with me just send me a <i>hey</i></p>
                    <Row>
                        <Input s={4} label="First Name" validate><Icon>account_circle</Icon></Input>
                        <Input s={4} label="Telephone" validate type='tel'><Icon>phone</Icon></Input>
                    </Row>
                </div>

            </section>

        );
    }
}
export default Footer;