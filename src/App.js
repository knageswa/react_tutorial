import React, { Component } from 'react';
import './App.css';
import TacticsTabContainer from './TacticsTabContainer'


class App extends Component {


    render() {

        const defenseRows =
            {
                'DefensiveStyle':[
                    'Drop Back',
                    'Balanced',
                    'Pressure on Heavy Touch',
                    'Press after possesion Loss',
                    'constant Pressure'
                ],
                'DefensiveWidth':'slider',
                'Depth':'slider'
            };
        

        const offenseRows =[
            {
                'OffensiveStyle':[
                    'Possesion',
                    'Balanced',
                    'Long Ball',
                    'Fast Build up',
                    'constant Pressure'
                ]
            },
            {
                'OffensiveWidth':'slider'
            },
            {
                'Players in Box':'slider'
            },
            {
                'Corners':'slider'
            },
            {
                'Freekicks':'slider'
            }
        ];

        return (
            <div className="container">
                <h1>Custom Fifa Tactics</h1>
                <TacticsTabContainer data={defenseRows} />
                {/* <TacticsTabContainer data={offenseRows} /> */}
            </div>
        );
    }
}

export default App;