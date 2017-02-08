import React from 'react';
import Data from './data';
import Header from './header';

require('../assets/sass/index.scss');

/**
 * Index page
 */
let data = new Data();
let Index = React.createClass({

    getInitialState: function(){
        return {
            data:data.state
        }
    },
    render() {
        return(
            <section id="index">
                <Header/>
                <section id="presentation">
                    <img src="../other/logo/fp-logo_second.jpg" id="logo" />
                    <p id="tagline">I am a developper, runner and performance addict</p>
                </section>
            </section>
        );
    }
});
export default Index;