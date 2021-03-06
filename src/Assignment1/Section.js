import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Article from './Article'

export default class Section extends Component {

    static propTypes = {
        articles: PropTypes.array.isRequired,
        section: PropTypes.object.isRequired,
        categoryId: PropTypes.number.isRequired,
        tagId: PropTypes.string,
        onTagSelect: PropTypes.func,
        onSelectFav: PropTypes.func
    };

    constructor(props){
        super(props);
        this.state = {
            articles: this.props.articles,
            categoryId: this.props.categoryId,
            tagId: this.props.tagId
        };
    }

    componentWillReceiveProps = (nextProps) => {
        this.setState({
            articles: nextProps.articles,
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
            <div className="card-margin">
            <div className="card mb-5">
                <h3 className="card-header">{name}</h3>
                <div className="d-flex flex-wrap">
                    {sectionArticles.map((article) =>
                        <Article
                            key={article.id}
                            article={article}
                            onTagSelect={this.props.onTagSelect}
                            onSelectFav = {this.props.onSelectFav}
                        />
                     )}
                </div>
            </div>
            </div>
        )
    }
}