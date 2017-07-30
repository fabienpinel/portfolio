import React from 'react';

require('../assets/sass/one-project.scss');

/**
 * OneProject component
 */
class OneProject extends React.Component{

    //noinspection JSAnnotator
    title: string;

    constructor(props){
        console.log("Oneproject props",props);
        super(props);
    }
    render() {
        return(
            <section
                className="one-project-section"
                id={this.props.id}
            >
                <div className="one-project-div">
                    <div className="one-project-image-div">
                        <img ref='image'
                             src={this.props.image}
                             className="one-project-image"
                        />
                    </div>
                </div>
            </section>

        );
    }
}
export default OneProject;