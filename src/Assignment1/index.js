import React, {Component} from 'react'

import './style.css'
import CategoryFilter from './CategoryFilter'

export default class Assignment1 extends Component { 
    render(){
        return (
            <div class="container" style={{"padding":"50px"}}>
                <div className="column title border-me">React List Search Demo</div>
                <div className="column border-me">
                    <CategoryFilter />
                </div>
            </div>
        )
    }
}