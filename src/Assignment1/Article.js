import React, { Component } from 'react'
import PropTypes from 'prop-types'


export default class Article extends Component {

    static propTypes = {
        article: PropTypes.object.isRequired,
        onTagSelect: PropTypes.func
    };

    constructor(props){
        super(props);
        this.searchByTag = this.searchByTag.bind(this);
    }

    searchByTag = (value) => {
        console.log(value);
        this.props.onTagSelect(value);
    };

    render() {

        const {id, title, tag, isFav, price, imageUrl} = this.props.article;
        
        return (
            <div id={'article_' + id} className="card" style={{width:"200px"}}>
                <img className="card-img-top img-thumbnail" src={imageUrl} alt="Placeholder image"/>
                <div className="card-block">
                    <h4 className="card-title">{title}</h4>
                    <span className="badge badge-default" value={tag} onClick={() => this.searchByTag(tag)}>{tag}</span>
                    <p>{isFav}</p>
                    <p>${price} per person</p>
                </div>
            </div>
        )
    }
}