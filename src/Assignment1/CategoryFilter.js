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
                <div className="category-item flex-row grow-equally align-center" key={category.id} value={category.id} onClick={() => this.handleCategoryFilter(category.id, category.name)}>
                    <div>
                        <img className="category-image" src={category.imageUrl} alt={category.name}/>
                    </div>
                    <div className="align-center">{category.name}</div>
                </div>
            );
        });
    }

    render() {
        return (
            <div>
<<<<<<< HEAD
                <div className="category-container">
=======
                <div className="category-container flex-row grow-equally">
>>>>>>> master
                    {this.renderCategories()}
                </div>
            </div>
        )
    }
}