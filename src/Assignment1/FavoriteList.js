import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Article from './Article';

export default class FavouriteList extends Component{
    static propTypes = {
        articles: PropTypes.array.isRequired,
        onTagSelect: PropTypes.func,
        onSelectFav: PropTypes.func
    };

    constructor(props) {
        super(props);
    }

    renderFavArticles(articles) {
        if(articles.length > 0) {
            return articles.map((article) => {
                return(
                    <Article
                        key={article.id}
                        article={article}
                        onTagSelect={this.props.onTagSelect}
                        onSelectFav={this.props.onSelectFav}
                    />
                );
            })
        }
    }

    render() {

        // Step 1 Filtering with Favourite Articles, Required
        let favArticles = this.props.articles
            .filter( function (article) {
                return article.isFav;
            });

        if(favArticles.length > 0) {
            return(
                <div className="col-3">
                    <div className="card">
                        <h3 className="card-header">My Fav Section</h3>
                        <div className="card-block">
                            {this.renderFavArticles(favArticles)}
                        </div>
                    </div>
                </div>
            );
        } else {
            return(
                <div className="col-3">
                    <div className="card">
                        <h3 className="card-header">My Fav Section</h3>
                        <p className="card-block">No fav yet</p>
                    </div>
                </div>
            );
        }
        
    }
}