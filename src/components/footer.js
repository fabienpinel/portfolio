import React from 'react';

require('../assets/sass/footer.scss');

/**
 * Footer component
 */
let Footer = React.createClass({

    getInitialState: function(){
        return {
        }
    },
    render() {
        return(
            <section id="footer">
                <h1 className="title">Footer</h1>
                Coming soon !
            </section>

        );
    }
});
export default Footer;