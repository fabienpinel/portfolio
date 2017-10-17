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
                    fixedFooter
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
                    <br />
                    <hr />
                    <img ref='image'
                         src={this.props.featuredPicture}
                         className="one-project-image"/>
                    <p className="project-content-text">{this.props.description}</p>
                    <div>
                        {this.props.images.map(function(image, index){
                            return <img
                                id={"one-image-"+index}
                                key={"one-image-"+index}
                                src={image}
                                className="max100 other-pictures"/>;
                                })}
                    </div>
                </Modal>

            </section>

        );
    }
}
export default OneProject;