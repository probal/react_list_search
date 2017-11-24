import React, { Component } from 'react'
import PropTypes from 'prop-types'

import articleData from './data/articleData'
import Article from './Article'

export default class Section extends Component {

    static propTypes = {
        section: PropTypes.object.isRequired,
        categoryId: PropTypes.object.isRequired
    }

    state = {
        articles: []
    }

    componentDidMount = () => {
        this.setState({
            articles: articleData
        })
    }

    render() {

        const {id, name} = this.props.section
        
        return (
            <div className="tile is-parent">
                <p>{name}</p>
                <div className="column is-9 border-me">
                    {this.state.articles.map((article) =>
                        <div className="tile is-ancestor">
                            <Article
                                key={article.id}
                                article={article}
                                />
                        </div>
                    )}
                </div>
            </div>
        )
    }
}