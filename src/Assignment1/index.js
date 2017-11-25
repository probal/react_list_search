import React, {Component} from 'react'

import './style.css'
import CategoryFilter from './CategoryFilter'

export default class Assignment1 extends Component { 
    render(){
        return (
            <div className="container" style={{"padding":"50px"}}>
                <div className="row">
                    <span className="col">React List Search Demo</span>
                </div>
                <CategoryFilter />
            </div>
        )
    }
}