import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Article from './Article'
import Section from './Section';

export default class FavoriteSection extends Section {
    
    static propTypes = {
        onFavSelect: PropTypes.func,
        favoriteArticles: PropTypes.array
    };
    
        constructor(props){
            super(props);
            this.state = {
                favArticles: this.props.favoriteArticles
            };
        }
    
        componentWillReceiveProps = (nextProps) => {
            this.setState({
                favArticles: nextProps.favoriteArticles
            });
        };
    
        render() {
    
            let _state = this.state;
    
            let sectionArticles = this.state.favArticles
                .filter( function (article) {
                    return article.isFav === true;
                });
            
            return (
                <div className="card mb-5">
                    <p className="card-header">{name}</p>
                    <div className="d-flex flex-row">
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