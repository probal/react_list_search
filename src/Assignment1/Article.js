import React, { Component } from 'react'
import PropTypes from 'prop-types'


export default class Article extends Component {

    static propTypes = {
        article: PropTypes.object.isRequired
    }

    

    render() {

        const {id, title} = this.props.article
        
        return (
            <div className="tile">
                <p>{id}---{title}</p>
            </div>
        )
    }
}