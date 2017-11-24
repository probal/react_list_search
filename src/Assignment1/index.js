import React, {Component} from 'react'

import './style.css'
import CategoryFilter from './CategoryFilter'

export default class Assignment1 extends Component { 
    render(){
        return (
            <section class="section">
                <h1 className="title">Assignment One</h1>
                <CategoryFilter />
                <div className="tile is-vertical " style={{"height":"200px"}}>
                    <div className="tile is-6 ">Sections</div>
                    <div className="tile ">Fav</div>
                </div>
                
            </section>
        )
    }
}