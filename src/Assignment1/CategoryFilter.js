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

    handleCategoryFilter = (value) => {
        this.props.onSelect(value);
    };

    renderCategories() {
        let _categories = this.state.categories;
        return _categories.map((category) => {
            return(
                <div className="col" key={category.id}>
                    <a className="col" value={category.id} onClick={() => this.handleCategoryFilter(category.id)}>
                        <figure className="image is-128x128 ">
                            <img src={category.imageUrl} alt={category.name}/>
                        </figure>
                        <div>{category.name}</div>
                    </a>
                 </div>
            );
        });
    }

    render() {
        return (
            <div>
                <div className="row">
                    
                    <div className="col">
                        <a className="col" onClick={() => this.handleCategoryFilter(-1)}>
                            <figure className="image is-128x128 "/>
                            <div>All</div>
                        </a>
                    </div>

                    {this.renderCategories()}
                </div>
            </div>
        )
    }
}