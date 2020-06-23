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
            message: ''
        };
        this.onNameChange = this.onNameChange.bind(this);
        this.onEmailChange = this.onEmailChange.bind(this);
        this.onMessageChange = this.onMessageChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.initState = this.initState.bind(this);
    }

    initState() {
        this.setState(
            {
                name: '',
                message: '',
                email: ''

            });
    }

    isFormOkay() {
        return (
            this.state.name && this.state.name.length > 0
            && this.state.email && this.state.email.length > 0
            && this.state.message && this.state.message.length > 0
        );
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
        event.preventDefault();
        if (this.isFormOkay()) {
            var self = this;
            axios.post('http://fabienpinel.pro/mail.php', this.state)
                .then(function (response) {
                    Materialize.toast('Mail envoyé !', 2000);
                    self.initState();
                })
                .catch(function (error) {
                    Materialize.toast('Erreur lors de l\'envoi du mail', 2000);
                });
        } else {
            Materialize.toast('Le formulaire n\'est pas valide.', 2000);
        }
    }

    render() {
        return (
            <section id="footer" className="section-content">
                <h1 className="title">Say hello!</h1>
                <div className="switch">
                    <label>
                        <input type="checkbox" disabled={true} />
                        <span className="lever"></span>
                        Available for projects
                    </label>
                </div>
                <div className="contact-div">
                    <p className="text-grey">If you want to get in touch with me just send me a <i>hello</i></p>
                    <form onSubmit={this.handleSubmit}>
                        <Row>
                            <Col s={12} m={6} offset="m3">
                                <Input s={12} placeholder="Name"
                                       value={this.state.name}
                                       onChange={this.onNameChange}
                                       validate/>
                            </Col>
                            <Col s={12} m={6} offset="m3">
                                <Input s={12} type="email" placeholder="Email"
                                       value={this.state.email}
                                       onChange={this.onEmailChange}
                                       validate/>
                            </Col>
                            <Col s={12} m={6} offset="m3">
                                <Input s={12} type="textarea" placeholder="Your message" className=""
                                       value={this.state.message}
                                       onChange={this.onMessageChange}
                                       validate/>
                            </Col>
                            <Col s={12} m={6} offset="m3" className="heyContainer">
                                <button id="heyButton" className="">Hello!</button>
                            </Col>
                        </Row>
                    </form>
                </div>

                <hr />

                <div className="icons-footer padding-left-right">
                    <ul className="social-icons-list">
                            <a href="https://twitter.com/pinelfabien" target="_blanck">
                            <li className="social-icon">
                                <i className="fa fa-twitter" aria-hidden="true"> </i>
                            </li>
                            </a>
                            <a href="https://www.instagram.com/fabien.pinel/" target="_blanck">
                            <li className="social-icon">
                                <i className="fa fa-instagram" aria-hidden="true"> </i>
                            </li>
                            </a>
                            <a href="https://www.linkedin.com/in/fabienpinel/" target="_blanck">
                            <li className="social-icon">
                                <i className="fa fa-linkedin-square" aria-hidden="true"> </i>
                            </li>
                            </a>
                    </ul>
                </div>

            </section>

        );
    }
}
export default Footer;