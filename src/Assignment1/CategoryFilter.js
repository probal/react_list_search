import React, { Component } from 'react';

export default class CategoryFilter extends Component {

    constructor(props){

        super(props);
        this.state = {
            categories: []
        };

        this.renderCategories = this.renderCategories.bind(this);
        this.handleFilter = this.handleFilter.bind(this);
    }

    componentWillReceiveProps = (nextProps) =>{
        this.setState({
            categories: nextProps.categories
        });
    };

    handleFilter = (value) => {
        this.props.onSelect(value);
    };

    renderCategories() {
        let _categories = this.state.categories;
        return _categories.map((category) => {
            return(
                <div className="col" key={category.id}>
                    <a className="col" value={category.id} onClick={() => this.handleFilter(category.id)}>
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
                        <a className="col" onClick={() => this.handleFilter(-1)}>
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