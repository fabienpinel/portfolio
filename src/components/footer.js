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
                <h1>Footer</h1>
            </section>

        );
    }
});
export default Footer;