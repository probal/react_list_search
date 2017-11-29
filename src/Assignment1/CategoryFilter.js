import React, { Component } from 'react';

export default class CategoryFilter extends Component {

    constructor(props) {

        super(props);
        this.state = {
            categories: []
        };

        this.renderCategories = this.renderCategories.bind(this);
        this.handleCategoryFilter = this.handleCategoryFilter.bind(this);
    }

    componentWillReceiveProps = (nextProps) => {
        this.setState({
            categories: nextProps.categories
        });
    };

    handleCategoryFilter = (value, name) => {
        this.props.onSelect(value, name);
    };

    renderCategories() {
        let _categories = this.state.categories;
        return _categories.map((category) => {
            return(
                <div className="category-item" key={category.id}>
                    <a href="#" className="" value={category.id} onClick={() => this.handleCategoryFilter(category.id, category.name)}>
                        <img className="category-image" src={category.imageUrl} alt={category.name}/>
                        <div>{category.name}</div>
                    </a>
                 </div>
            );
        });
    }

    render() {
        return (
            <div>
                <div className="category-container">
                    {this.renderCategories()}
                </div>
            </div>
        )
    }
}