import React from 'react';
import {Row, Input, Icon, Col} from 'react-materialize';
import axios from 'axios';

require('../assets/sass/footer.scss');

/**
 * Footer component
 */
class Footer extends React.Component {

    constructor() {
        super();
        this.state = {
            name: '',
            email: '',
            message:''
        };
        this.onNameChange = this.onNameChange.bind(this);
        this.onEmailChange = this.onEmailChange.bind(this);
        this.onMessageChange = this.onMessageChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.initState = this.initState.bind(this);
    }

    initState(){
        this.setState(
            {
                name: '',
                message: '',
                email: ''

            });
    }

    onNameChange(e) {
        this.setState({name: e.target.value});
    }

    onEmailChange(e) {
        this.setState({email: e.target.value});
    }

    onMessageChange(e) {
        this.setState({message: e.target.value});
    }

    handleSubmit(event) {
        console.log('A name was submitted: ', this.state);
        event.preventDefault();
        var self=this;
        axios.post('http://fabienpinel.pro/mail.php', this.state)
            .then(function (response) {
                Materialize.toast('Mail envoyé !', 2000);
                self.initState();
            })
            .catch(function (error) {
                Materialize.toast('Erreur lors de l\'envoi du mail', 2000);
            });
    }

    render() {
        return (
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
                    <form onSubmit={this.handleSubmit}>
                        <Row>
                            <Col s={12} m={6} offset="m3">
                                <Input s={12} placeholder="Name"
                                       value={this.state.name}
                                       onChange={this.onNameChange}
                                       validate><Icon>account_circle</Icon></Input>
                            </Col>
                            <Col s={12} m={6} offset="m3">
                                <Input s={12} type="email" placeholder="Email"
                                       value={this.state.email}
                                       onChange={this.onEmailChange}
                                       validate><Icon>email</Icon></Input>
                            </Col>
                            <Col s={12} m={6} offset="m3">
                                <Input s={12} type="textarea" placeholder="Your message" className="white-background"
                                       value={this.state.message}
                                       onChange={this.onMessageChange}
                                       validate><Icon>short_text</Icon></Input>
                            </Col>
                            <Col s={12} m={6} offset="m3">
                                <button id="heyButton" onClick={this.submitContactForm} className="">Hey !</button>
                            </Col>
                        </Row>
                    </form>
                </div>

            </section>

        );
    }
}
export default Footer;