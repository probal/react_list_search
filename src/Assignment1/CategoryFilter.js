import React, { Component } from 'react'

import categoryData from './data/categoryData'
import SectionList from './SectionList'

export default class CategoryFilter extends Component {

    state = {
        categories: [],
        categoryId : -1
    }

    componentDidMount = () => {
        this.setState({
            categories: categoryData
        })
    }

    filterByCategoryId() {

    }

    render() {

        return (
            <div>
                <div className="columns">
                    <a>
                        <p>ALL</p>
                    </a>
                    {this.state.categories.map((category) =>
                        <a href="#" className="column border-me">
                            <figure class="image is-128x128 ">
                                <img src={category.imageUrl}/>
                            </figure>
                            <div>{category.name}</div>
                        </a>
                    )}
                </div>
                <SectionList
                    categoryId={this.state.categoryId}
                />
            </div>
        )
    }
}