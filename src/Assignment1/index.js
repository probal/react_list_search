import React, {Component} from 'react'

import './style.css'
import categoryData from './data/categoryData'
import CategoryFilter from './CategoryFilter'
import SectionList from './SectionList'

export default class Assignment1 extends Component {

    constructor(props) {

        super(props);
        this.state = {
            categories: [],
            filterByCategoryId : -1,
            filterByTag: null
        };

        this.handleCategoryFilter = this.handleCategoryFilter.bind(this);
        this.handleTagFilter = this.handleTagFilter.bind(this);
    }

    componentDidMount = () => {
        this.setState({
            categories: categoryData
        })
    };

    handleCategoryFilter = (value) => {
        this.setState({
            filterByCategoryId: value
        });
    };

    handleTagFilter = (value) => {
        this.setState({
            filterByTag: value
        });
    };

    render() {
        return (
            <div className="container" style={{"padding":"50px"}}>

                <div className="d-flex flex-row">
                    <div className="col">
                        <h1>React List Search Demo</h1>
                    </div>
                </div>

                <CategoryFilter 
                    categories={this.state.categories} 
                    onSelect={this.handleCategoryFilter}
                />

                <SectionList
                    categoryId={this.state.filterByCategoryId}
                    tagId={this.state.filterByTag}
                    onTagSelect={this.handleTagFilter}
                />

            </div>
        )
    }
}