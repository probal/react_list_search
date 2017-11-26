import React, { Component } from 'react'
import PropTypes from 'prop-types'

import articleData from './data/articleData'
import Article from './Article'

export default class Section extends Component {

    static propTypes = {
        section: PropTypes.object.isRequired,
        categoryId: PropTypes.number.isRequired
    }

    state = {
        articles: [],
        categoryId: this.props.categoryId
    }

    componentDidMount = () => {
        this.setState({
            articles: articleData
        })
    }

    render() {

        const {id, name} = this.props.section

        // Step 1 Filtering with sectionId, Required
        let sectionArticles = this.state.articles.filter( function (article) {
            return article.sectionId === id
          });

        // Step 2 filtering with categoryId, Optoinal

        // Step 3 filtering with tag, Optional
        
        return (
            <div className="card mb-5">
                <p className="card-header">{name}</p>
                <div className="d-flex flex-row">
                    {sectionArticles.map((article) =>
                        <Article
                            key={article.id}
                            article={article}
                            />
                     )}
                </div>
            </div>
        )
    }
}