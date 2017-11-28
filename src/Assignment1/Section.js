import React, { Component } from 'react'
import PropTypes from 'prop-types'

import articleData from './data/articleData'
import Article from './Article'

export default class Section extends Component {

    static propTypes = {
        section: PropTypes.object.isRequired,
        categoryId: PropTypes.number.isRequired,
        tagId: PropTypes.string,
        favoriteArticle: PropTypes.array,
        onTagSelect: PropTypes.func,
        onFavSelect: PropTypes.func
    };

    constructor(props){
        super(props);
        this.state = {
            articles: articleData,
            favoriteArticle: this.props.favoriteArticle,
            categoryId: this.props.categoryId,
            tagId: this.props.tagId
        };
    }

    componentWillReceiveProps = (nextProps) => {
        this.setState({
            categoryId: nextProps.categoryId,
            tagId: nextProps.tagId
        });
    };

    render() {

        const {id, name} = this.props.section;
        let _state = this.state;

        let sectionArticles = this.state.articles
            .filter( function (article) {
                return article.sectionId === id
            })
            .filter(function (article) {
                if(_state.categoryId === -1)
                    return article;
                else
                    return article.categoryId === _state.categoryId;
            })
            .filter(function (article) {
                if(!_state.tagId)
                    return article;
                else
                    return article.tag === _state.tagId;
            });
        
        return (
            <div className="card mb-5">
                <p className="card-header">{name}</p>
                <div className="d-flex flex-wrap space-around">
                    {sectionArticles.map((article) =>
                        <Article
                            key={article.id}
                            article={article}
                            onTagSelect={this.props.onTagSelect}
                            onFavSelect = {this.props.onFavSelect}
                        />
                     )}
                </div>
            </div>
        )
    }
}