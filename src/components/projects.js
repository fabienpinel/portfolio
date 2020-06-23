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
                    description: 'Souliers & Compagnie is a shoe retailer company. ' +
                    'This website is where they can communicate about their full story. ' +
                    'It\'s also a place where there are all the information a client would need to enter in contact: ' +
                    'Map and addresses of all the shops, timetables, phone numbers, facebook pages etc.',
                    website: 'http://soulierscompagnie.fr',
                    technologies: ['PHP', 'CSS', 'SQL', 'Parallax scrolling']
                }, {
                    title: 'Champagne Grand Conclave',
                    featuredPicture: 'src/assets/img/projects/cgc.png',
                    images: ['src/assets/img/projects/cgc-vignettes.png', 'src/assets/img/projects/cgc-edition.png'],
                    description: 'Champagne Grand Conclave is a Champagne brand. ' +
                    'They wanted their website to be a showcase which could show the visitor what are the values of the brand and make people feel the spirit they want to share.',
                    website: 'http://champagnegrandconclave.technews.fr',
                    technologies: ['Angular2', 'Sass']
                }, {
                    title: 'Technews.fr',
                    featuredPicture: 'src/assets/img/projects/technews.png',
                    images: [],
                    description: 'The best way to make sure you understand something, is to explain it simply. The reason why I created Technews.fr in 2012 was to share my passion for new technologies & innovation while making sure I was up to date with creations of the sector. ' +
                    'My curiosity pushed me to start testing high-tech products and write tutorials in order to make it easier for my readers to use/take on new technologies, removing a cognitive barrier. From flash news, event communications, tutorials and detailed reviews of products, ' +
                    'Technews.fr allows me to express my love for new technologies in a useful manner.',
                    website: 'http://technews.fr',
                    technologies: ['PHP', 'SQL', 'CSS']

                }, {
                    title: 'Sphero battle',
                    featuredPicture: 'src/assets/img/projects/sphero.jpg',
                    images: ['src/assets/img/projects/sphero-archi.png'],
                    description: 'Sphero Battle is a duelling game. Two players are confronted in a combat with no mercy. Each player controls his/her robot Sphero using a MYO bracelet. The goal is to survive the duel with a maximum of hits. When hit, a player loses a percentage of his life. ' +
                    'The public can vote for players to help give them more power and allow them to surpass their capabilities during a short period of time (the opponent’s movement is slowed down, the commands are reversed, immunity is provided and even bonus life). ' +
                    'Star Wars is virtual, while ours is pretty real. Play Sphero Battle and the force will be with you. ' +
                    'Project created during a computer science major at Polytech Nice Sophia.',
                    website: 'https://vimeo.com/155295677',
                    technologies: ['Cordova', 'Java', 'Native Android', 'Sphero API', 'Myo API']
                }, {
                    title: 'Jeffrey',
                    featuredPicture: 'src/assets/img/projects/jeffrey/jeffrey6.png',
                    images: ['src/assets/img/projects/jeffrey/app-tryjeffrey.png'],
                    description: 'Jeffrey is a service which provides a way to develop and maintain a targeted and quality Instagram audience.',
                    website: 'http://tryjeffrey.com',
                    technologies: ['AngularJS']
                }, {
                    title: 'Jeffrey TikTok',
                    featuredPicture: 'src/assets/img/projects/jeffrey-tiktok.png',
                    images: ['src/assets/img/projects/jeffrey-tiktok.png'],
                    description: 'Jeffrey is a service which provides a way to develop and maintain a targeted and quality TikTok audience.',
                    website: 'http://tiktok.tryjeffrey.com',
                    technologies: ['ReactJS', 'NextJS', 'Less']
                }
            ]
        };
    }

    render() {
        return (
            <section className="projects-section">
                <section className="double-div wow fadeIn">
                    <Row className="double-div-row">
                        <Col s={12} m={6} className="double-div-left red-back dtable">
                            <Row className="paddings dtablecell">
                                <p>
                                    I value good relationships with clients. It is a good driver for good results, thanks to good communication and mutual understanding .
                                </p>
                                <p>
                                    I keep myself up to date with new UX principles, so I'm able to implement great looking UI with easy interactions.
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
                                technologies={project.technologies}
                                featuredPicture={project.featuredPicture}
                                website={project.website}
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