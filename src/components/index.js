import React from 'react';

import Data from './data';

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
                {this.state.data.mail}
            </section>

        );
    }
});
export default Index;