import React from 'react';
import {Row, Col} from 'react-materialize';
import OneProject from './one-project';


require('../assets/sass/projects.scss');

/**
 * Projects component
 */
class Projects extends React.Component {

    constructor() {
        super();
        this.state = {
            projects: [
                {
                    title: 'Souliers & Compagnie',
                    featuredPicture: 'src/assets/img/projects/sc.png',
                    images: [],
                    description: 'Souliers & Compagnie is a shoe retailer company'
                }, {
                    title: 'Champagne Grand Conclave',
                    featuredPicture: 'src/assets/img/projects/cgc.png',
                    images: [],
                    description: 'Explain what is the company, what s the goal of the website, how did I developed and which technologies'
                }, {
                    title: 'Technews.fr',
                    featuredPicture: 'src/assets/img/projects/technews.png',
                    images: [],
                    description: 'The best way to make sure you understand something, is to explain it simply. The reason why I created Technews.fr in 2012 was to share my passion for new technologies & innovation while making sure I was up to date with creations of the sector. ' +
                    'My curiosity pushed me to start testing high-tech products and write tutorials in order to make it easier for my readers to use/take on new technologies, removing a cognitive barrier. From flash news, event communications, tutorials and detailed reviews of products, ' +
                    'Technews.fr allows me to express my love for new technologies in a useful manner. '
                }, {
                    title: 'Sphero battle',
                    featuredPicture: 'src/assets/img/projects/sphero.jpg',
                    images: [],
                    description: 'Sphero Battle is a duelling game. Two players are confronted in a combat with no mercy. Each player controls his/her robot Sphero using a MYO bracelet. The goal is to survive the duel with a maximum of hits. When hit, a player loses a percentage of his life. ' +
                    'The public can vote for players to help give them more power and allow them to surpass their capabilities during a short period of time (the opponent’s movement is slowed down, the commands are reversed, immunity is provided and even bonus life). ' +
                    'Star Wars is virtual, while ours is pretty real. Play Sphero Battle and the force will be with you. ' +
                    'Project created during a computer science major at Polytech Nice Sophia'
                }, {
                    title: 'Jeffrey',
                    featuredPicture: 'src/assets/img/projects/jeffrey/jeffrey6.png',
                    images: ['src/assets/img/projects/jeffrey/jeffrey2.png',
                        'src/assets/img/projects/jeffrey/jeffrey3.png',
                        'src/assets/img/projects/jeffrey/jeffrey4.png',
                        'src/assets/img/projects/jeffrey/jeffrey5.png'],
                    description: 'Jeffrey est un service qui permet de développer et maintenir une audience Instagram ciblée et de qualité. '
                }
            ]
        };
    }

    render() {
        return (
            <section className="projects-section">
                <section className="double-div">
                    <Row className="double-div-row">
                        <Col s={12} m={6} className="double-div-left">
                            <Row className="paddings">
                                <p>
                                    What I search in every project is a great relationship with the client.
                                    I think this is very important in order to work well together and provide each other
                                    the best we can.
                                </p>
                                <p>
                                    I love searching for new UX principle and implement great looking UI with easy
                                    interactions.
                                </p>
                            </Row>
                        </Col>
                        <Col s={12} m={6} className="double-div-right">
                            <div className="quote">
                                <p>"You've got to get up every morning with determination if you're going to go to bed
                                    with satisfaction."
                                    <br/><span className="signature">George Lorimer</span>
                                </p>
                            </div>
                        </Col>
                    </Row>
                </section>
                <section>
                    <div className={'center paddings-top-bottom black-background width100'}>
                        {this.state.projects.map(function (project, index) {
                            return <OneProject
                                id={"one-project-" + index}
                                key={"one-project-" + index}
                                title={project.title}
                                description={project.description}
                                featuredPicture={project.featuredPicture}
                                images={project.images}
                            />;
                        })}

                    </div>
                </section>
            </section>

        );
    }
}
export default Projects;