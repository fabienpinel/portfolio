import React from 'react';


/**
 * Data page
 */
class Data extends React.Component{

    constructor(){
        super();
        this.state = {
            mail:"fabien@fpinel.com",
            tagline:"I am a developper, runner and performance addict.",
            firstname: "Fabien",
            lastname: "Pinel",
            favoriteQuote:"\"Life begins at the end of your comfort zone.\"",
            actionButton: "Discover my ambitions"
        };
    }
    render() {
        return(<span></span>);
    }
}
export default Data;