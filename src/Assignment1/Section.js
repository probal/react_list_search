import React, { Component } from 'react'
import PropTypes from 'prop-types'

import articleData from './data/articleData'
import Article from './Article'

export default class Section extends Component {

    static propTypes = {
        section: PropTypes.object.isRequired,
        category: PropTypes.object.isRequired
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
        let sectionArticles = this.state.articles.filter( function (article) {
            return article.sectionId === id
          });

        if(this.props.category) {
            sectionArticles = sectionArticles.filter(function(article){
                return article.categoryId === this.props.category.id
            });
        }

        return (
            <div className="card">
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