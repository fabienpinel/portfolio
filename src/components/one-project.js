import React from 'react';

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

    openProjectFullDescription(event){
        console.log("openning project full description", event);
        //console.log("openning project full description", this.props);
        this.openWarningModal();
    }

    openWarningModal(){
        $('#warningModal').modal({
            backdrop: 'static',
            keyboard: false
        }, 'show');
    }

    render() {
        return(
            <section
                className="one-project-section"
                id={this.props.id}
                onClick={this.openWarningModal}>
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

                <div className="modal fade"
                     id="projectDescriptionModal"
                     tabIndex="-1" role="dialog"
                     aria-labelledby="projectDescriptionModal">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-body">
                                <p className="project-description-text">{this.props.description}</p>
                            </div>
                            <div className="modal-footer">
                                <button type="button">Close</button>
                            </div>
                        </div>
                    </div>
                </div>

    </section>

        );
    }
}
export default OneProject;