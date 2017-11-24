import React, { Component } from 'react'

import categoryData from './data/categoryData'


export default class CategoryFilter extends Component {
    state = {
        categories: [],
        filterByCategoryId : -1,
    }


    componentDidMount = () => {
        this.setState({
            categories: categoryData
        })
    }

    handleCategoryChange() {

    }

    render() {
        const {id, name, imageUrl} = this.state.categories

        return (
            <nav className="panel ">
                <p class="panel-tabs">
                    <a href="#">None</a>
                    {this.state.categories.map((category) =>
                        <a className="button is-large">
                            <figure class="image is-128x128 ">
                                <img src={category.imageUrl}/>
                            </figure>
                            <div>{category.name}</div>
                        </a>
                    )}
                </p>
            </nav>
        )
    }
}