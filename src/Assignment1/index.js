import React, {Component} from 'react'

import './style.css'
import FilterRemove from './FilterRemove'
import categoryData from './data/categoryData'
import CategoryFilter from './CategoryFilter'
import SectionList from './SectionList'
import FavouriteList from './FavoriteList'
import articleData from './data/articleData'
import Article from './Article'


export default class Assignment1 extends Component {

    constructor(props) {

        super(props);
        this.state = {
            articles: [],
            categories: [],
            favorites: [],
            filterByCategoryId : -1,
            filterByTag: null
        };

        this.handleCategoryFilter = this.handleCategoryFilter.bind(this);
        this.handleTagFilter = this.handleTagFilter.bind(this);
        this.handleFavouriteAction = this.handleFavouriteAction.bind(this);
        this.removeFilter = this.removeFilter.bind(this);
    }

    componentDidMount = () => {
        this.setState({
            categories: categoryData,
            articles: articleData,
            favorites:[]
        })
    };

    handleCategoryFilter = (value) => {
        this.setState({
            filterByCategoryId: value
        });
    };

    handleTagFilter = (value) => {
        this.setState({
            filterByTag: value
        });
    };

    removeFilter = (filterName) => {
        if(filterName === 'tag'){
            this.setState({
                filterByTag: null
            })
        } else if(filterName === 'category') {
            this.setState({
                filterByCategoryId: -1
            })
        }
    };

    handleFavouriteAction = (article) => {
        article.isFav = !article.isFav
        let tempFavorites = this.state.favorites
        if (tempFavorites.includes(article)) {
            const index = tempFavorites.indexOf(article)
            tempFavorites.splice(index, 1)
        } else {
            tempFavorites.push(article)
        }
        
        this.setState({
            favorites: tempFavorites
        })
    };

    render() {
        return (
            <div className="container" style={{"padding":"0px"}}>

                <div className="d-flex flex-row fixed-top">
                    <div className="centered">
                        <h1>React List Search Demo</h1>
                    </div>
                </div>

                <CategoryFilter 
                    categories={this.state.categories} 
                    onSelect={this.handleCategoryFilter}
                />
                <FilterRemove filterByTag={this.state.filterByTag} onRemove={this.removeFilter}/>
                <div className = "row">

                    <SectionList
                        articles={this.state.articles}
                        categoryId={this.state.filterByCategoryId}
                        tagId={this.state.filterByTag}
                        onTagSelect={this.handleTagFilter}
                        onSelectFav={this.handleFavouriteAction}
                    />
                    <FavouriteList favoriteArticles={this.state.favorites}
                                    onTagSelect={this.handleTagFilter}
                                    onSelectFav={this.handleFavouriteAction}/>
                </div>
            </div>
        )
    }
}