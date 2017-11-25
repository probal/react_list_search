import React, { Component } from 'react'
import PropTypes from 'prop-types'


export default class Article extends Component {

    static propTypes = {
        article: PropTypes.object.isRequired
    }

    

    render() {

        const {id, title, sectionId, categoryId, tag, isFav, price, imageUrl} = this.props.article
        
        return (
            <div className="card" style={{width:"200px"}}>
                <img className="card-img-top img-thumbnail" src={imageUrl} alt="Placeholder image"/>
                <div className="card-block">
                    <h4 className="card-title">{title}</h4>
                    <span className="badge badge-default">{tag}</span>
                    <p>{isFav}</p>
                    <p>${price} Per Person</p>
                </div>
            </div>
        )
    }
}