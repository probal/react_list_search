import React, { Component } from 'react'

import categoryData from './data/categoryData'
import SectionList from './SectionList'

export default class CategoryFilter extends Component {

    state = {
        categories: [],
        filterBycategoryId : -1
    }

    componentDidMount = () => {
        this.setState({
            categories: categoryData
        })
    }

    handleFilter = (event) => {
        console.log(event.target.value)
        this.setState({
            filterBycategoryId: -1
        })
    }

    render() {

        return (
            <div>
                <div className="row">
                    <div className="col">
                        <a>
                            <p>ALL</p>
                        </a>
                    </div>
                    {this.state.categories.map((category) =>
                        <div className="col">
                            <a className="col" href="#" value={category.id} onClick={this.handleFilter.bind(this)}>
                                <figure className="image is-128x128 ">
                                    <img src={category.imageUrl}/>
                                </figure>
                                <div>{category.name}</div>
                            </a>
                        </div>
                    )}
                </div>

                <SectionList
                    categoryId={this.state.filterBycategoryId}
                />

            </div>
        )
    }
}