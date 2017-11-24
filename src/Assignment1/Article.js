import React, { Component } from 'react'
import PropTypes from 'prop-types'


export default class Article extends Component {

    static propTypes = {
        article: PropTypes.object.isRequired
    }

    

    render() {

        const {id, title, sectionId, categoryId, tag, isFav, price, imageUrl} = this.props.article
        
        return (
            <div>
                <div className="card">
                    <div className="card-image">
                        <figure className="image is-128x128">
                            <img src={imageUrl} alt="Placeholder image"/>
                        </figure>
                    </div>
                    <div className="card-content">
                        <div className="content">
                            <a>{tag}</a>
                            <p>{title}</p>
                            <p>{isFav}</p>
                            <p>${price} Per Person</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}