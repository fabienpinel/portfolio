import React from 'react';
require('../assets/sass/skills.scss');
import{Radar} from 'react-chartjs-2';


/**
 * Skills component
 */
let Skills = React.createClass({

    getInitialState: function(){
        let data = {
            labels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],
            datasets: [
                {
                    label: "My First dataset",
                    backgroundColor: "rgba(179,181,198,0.4)",
                    borderColor: "rgba(179,181,198,0.8)",
                    pointBackgroundColor: "white",
                    pointBorderColor: "#000",
                    pointHoverBackgroundColor: "#000",
                    pointHoverBorderColor: "rgba(179,181,198,1)",
                    data: [65, 59, 90, 81, 56, 55, 40]
                }
            ]
        };

        return {
            data: data,
            chartOptions: {
            scale: {
                reverse: true,
                    ticks: {
                    beginAtZero: true
                }
            }
        }
        }
    },
    render() {

        return(
            <section id="skills">
                <Radar data={this.state.data} options={this.state.chartOptions} width={600} height={250} redraw />
            </section>

        );
    }
});
export default Skills;