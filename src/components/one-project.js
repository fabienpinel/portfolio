import React from 'react';
import {Modal} from 'react-materialize';

require('../assets/sass/one-project.scss');

/**
 * OneProject component
 */
class OneProject extends React.Component {

    //noinspection JSAnnotator
    title: string;

    constructor(props) {
        super(props);
    }

    render() {
        let imageList = 
        <div>
        <hr />
        <div className="margin-top">
            <h3>Captures</h3>
            <div className={'center paddings-top-bottom'}>
            {this.props.images.map(function (image, index) {
                return <img
                    id={"one-project-pitcure" + index}
                    key={"one-project-picture" + index}
                    className="image-capture-project"
                    src={""+image}
                />;
            })}
        </div>
        </div>
        </div>;

        return (
            <section
                className="one-project-section"
                id={this.props.id}>

                <Modal
                    header={this.props.title}
                    fixedFooter
                    trigger={
                        <div className="one-project-div">
                            <div className="project-title-container">
                                <div className="project-title">
                                    <h1 className="wow fadeIn">{this.props.title}</h1>
                                    <button className="margin-top wow slideInUp hide-mobile">View project</button>
                                </div>
                            </div>
                            <div className="one-project-image-div">
                                <img ref='image'
                                     src={this.props.featuredPicture}
                                     className="one-project-image"/>
                            </div>
                            <button className="show-mobile div100">View project</button>
                        </div>
                    }>
                    <br />
                    <hr />
                    <img ref='image'
                         src={this.props.featuredPicture}
                         className="one-project-image"/>
                    <p className="project-content-text">{this.props.description}</p>
                    <div className="center">
                        <a href={this.props.website} target="_blanck">
                            <button className="btn btn-large div100">
                                Visit Website
                            </button>
                        </a>
                    </div>
                    
                    <hr />
                    <div className="margin-top">
                        <h3>Technologies</h3>
                        <ul className="techno-list">
                            {this.props.technologies.map(function (techno, index) {
                                return <li
                                    key={"one-techno-" + index}
                                    className="technology-item"
                                >{techno}</li>;
                            })}
                        </ul>
                    </div>

                    { (this.props.images.length >0) ? imageList : null }
                </Modal>

            </section>

        );
    }
}
export default OneProject;