import React, {Component} from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import Assignment1 from './Assignment1'
import VotingApp from './VotingApp'

class App extends Component {
    render() {
        return (
            <div>
                <div className="flex-row fixed-top justify-center">
                    <h3>Assignment One</h3>
                </div>
                <div>
                <Switch>
                    <Route exact path='/' component={Assignment1}/>
                    <Route exact path='/demo' component={Assignment1}/>
                    <Route exact path='/voting' component={VotingApp}/>
                </Switch>
                </div>
            </div>
        );
    }
}

export default App;
