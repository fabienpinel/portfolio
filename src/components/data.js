import React from 'react';


/**
 * Data page
 */
let Data = React.createClass({

    getInitialState: function(){
        return {
            mail:"fabien@fpinel.com",
            tagline:"I am a developper, runner and performance addict.",
            firstname: "Xxxxxx",
            lastname: "Xxxxx",
            favoriteQuote:"\"Life begins at the end of your comfort zone.\"",
            actionButton: "Discover my ambitions"
        }
    },
    render() {
        return(<span></span>);
    }
});
export default Data;