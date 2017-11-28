import React, {Component} from 'react'

import './style.css'
import FilterRemove from './FilterRemove'
import categoryData from './data/categoryData'
import CategoryFilter from './CategoryFilter'
import SectionList from './SectionList'
import FavouriteList from './FavoriteList'
import articleData from './data/articleData'


export default class Assignment1 extends Component {

    constructor(props) {

        super(props);
        this.state = {
            articles: [],
            categories: [],
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
            articles: articleData
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

    handleFavouriteAction = (articleID) => {
        let newArticles = this.state.articles.map((article) => {
            if(article.id === articleID){
                article.isFav = !article.isFav;
            }

            return article;
        });

        this.setState({
            articles: newArticles
        });
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
                        categoryId={this.state.filterByCategoryId}
                        tagId={this.state.filterByTag}
                        onTagSelect={this.handleTagFilter}
                        onSelectFav={this.handleFavouriteAction}
                    />
                    <FavouriteList articles={this.state.articles}
                                    onTagSelect={this.handleTagFilter}
                                    onSelectFav={this.handleFavouriteAction}/>
                </div>
            </div>
        )
    }
}