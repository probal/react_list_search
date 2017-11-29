import React, {Component} from 'react'
import { withRouter } from 'react-router-dom';

import './style.css'

import FilterRemove from './FilterRemove'
import CategoryFilter from './CategoryFilter'
import SectionList from './SectionList'
import FavouriteList from './FavoriteList'

import categoryData from './data/categoryData'
import articleData from './data/articleData'

class Assignment1 extends Component {

    constructor(props) {

        super(props);
        this.state = {
            articles: [],
            categories: [],
            favorites: [],
            filterByCategoryId : -1,
            filterByCategoryName : null,
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

    handleCategoryFilter = (id, name) => {
        this.setState({
            filterByCategoryId: id,
            filterByCategoryName: name
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
                filterByCategoryId: -1,
                filterByCategoryName: null
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
            <div className="container1" style={{"padding":"20px"}}>
                <FilterRemove 
                    filterByLabel={this.state.filterByCategoryName}
                    filterType='category'
                    onRemove={this.removeFilter}/>
                <CategoryFilter 
                    categories={this.state.categories} 
                    onSelect={this.handleCategoryFilter}
                />
                

                <FavouriteList favoriteArticles={this.state.favorites}
                    onTagSelect={this.handleTagFilter}
                    onSelectFav={this.handleFavouriteAction}/>
                

                <FilterRemove 
                    filterByLabel={this.state.filterByTag} 
                    filterType='tag'
                    onRemove={this.removeFilter}/>
                <SectionList
                    articles={this.state.articles}
                    categoryId={this.state.filterByCategoryId}
                    tagId={this.state.filterByTag}
                    onTagSelect={this.handleTagFilter}
                    onSelectFav={this.handleFavouriteAction}
                />
               

            </div>
        )
    }
}

export default withRouter(Assignment1);
