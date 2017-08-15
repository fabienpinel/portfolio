import React from 'react';

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
            <section id="footer">
                <h1 className="title">Footer</h1>
                Coming soon !
                <p> Toggle -> I am available for project /// I am not accepting new projects right now</p>
                <p>If you want to get in touch with me just send me a mail :</p>
                <p>Linkedin link</p>
            </section>

        );
    }
}
export default Footer;