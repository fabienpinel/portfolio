import React from 'react';
import Data from './data';
import Header from './header';

require('../assets/sass/reset.scss');
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
                    <button id="action" >who am I ?</button>
                </section>
            </section>
        );
    }
});
export default Index;