import React from 'react';
import { Modal} from 'react-materialize';

require('../assets/sass/one-project.scss');

/**
 * OneProject component
 */
class OneProject extends React.Component{

    //noinspection JSAnnotator
    title: string;

    constructor(props){
        super(props);
    }

    render() {
        return(
            <section
                className="one-project-section"
                id={this.props.id}>

                <Modal
                    header={this.props.title}
                    trigger={
                        <div className="one-project-div">
                            <div className="project-title-container">
                                <h1 className="project-title">{this.props.title}</h1>
                            </div>
                            <div className="one-project-image-div">
                                <img ref='image'
                                     src={this.props.featuredPicture}
                                     className="one-project-image"/>
                            </div>
                        </div>
                    }>
                    <p>{this.props.description}</p>
                </Modal>

            </section>

        );
    }
}
export default OneProject;