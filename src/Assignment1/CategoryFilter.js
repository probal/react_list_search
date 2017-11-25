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

    handleFilter = (e, category) => {
        e.preventDefault();
        console.log(category.id)
        this.setState({
            filterBycategoryId: e.target.value
        })
        console.log(e.target.value)
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
                                <a className="col" value={category.id} onClick={this.handleFilter.bind(this, category)}>
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