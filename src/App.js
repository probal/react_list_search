import React, {Component} from 'react';
import { HashRouter, Switch, Route, Link } from 'react-router-dom';

import Assignment1 from './Assignment1'
import VotingApp from './VotingApp'

class App extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <div className="flex-row fixed-top justify-center align-center">
                        <div>
                            <img className="banner-image" src="images/banner_image.jpg" alt="Cefalo School"/>
                        </div>
                        <nav className="nav-box">
                            <ul className="nav navbar-nav">
                                <li className="navbar-brand"><Link to="/">Home</Link></li>
                                <li className="navbar-brand"><Link to="/demo">Assignment One</Link></li>
                                <li className="navbar-brand"><Link to="/voting">Voting Application</Link></li>
                            </ul>
                        </nav>
                    </div>
                    <div>
                        <Switch>
                            <Route exact path='/' component={Assignment1}/>
                            <Route exact path='/demo' component={Assignment1}/>
                            <Route exact path='/voting' component={VotingApp}/>
                        </Switch>
                    </div>
                </div>
            </HashRouter>
        );
    }
}

export default App;
