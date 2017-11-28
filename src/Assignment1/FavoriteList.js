import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Article from './Article';

export default class FavouriteList extends Component{
    static propTypes = {
        favoriteArticles: PropTypes.array.isRequired,
        onTagSelect: PropTypes.func,
        onSelectFav: PropTypes.func
    };

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
        let favorites = this.props.favoriteArticles

        if(favorites.length > 0) {
            return(
                <div className="d-flex wrap">
                    <div className="card mb-5">
                        <h3 className="card-header">My Favourites</h3>
                        <div className="flex-row flex-wrap">
                            {this.renderFavArticles(favorites)}
                        </div>
                    </div>
                </div>
            );
        } else {
            return(
                <div className="flex-row"/>                    
            );
        }
        
    }
}