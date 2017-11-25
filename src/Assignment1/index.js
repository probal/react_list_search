import React, {Component} from 'react'

import './style.css'
import CategoryFilter from './CategoryFilter'

export default class Assignment1 extends Component { 
    render(){
        return (
            <div className="container" style={{"padding":"50px"}}>
                <div className="d-flex flex-row">
                    <div className="col centered">
                        <h1>React List Search Demo</h1>
                    </div>
                </div>
                <CategoryFilter />
            </div>
        )
    }
}