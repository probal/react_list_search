import React, { Component } from 'react'
import PropTypes from 'prop-types'

import sectionData from './data/sectionData'
import articleData from './data/articleData'
import Article from './Article'
import Section from './Section'

export default class SectionList extends Component {
    
    static propTypes = {
        categoryId: PropTypes.number.isRequired,
        tagId: PropTypes.string,
        onTagSelect: PropTypes.func,
        onSelectFav: PropTypes.func
    };

    constructor(props){
        super(props);
        this.state = {
            sections: [],
            favorites: [],
            categoryId: this.props.categoryId
        };
    }


    componentDidMount = () => {
        this.setState({
            sections: sectionData,
            favorites: []
        })
    };

    handleFavorite = (article, fav) => {
        article.isFav = !article.isFav
        let tempFavs = this.state.favorites
        if (tempFavs.includes(article)) {
            const index = tempFavs.indexOf(article)
            tempFavs.splice(index, 1)
        } else {
            tempFavs.push(article)
        }
        
        this.setState({
            favorites: tempFavs
        })
    }

    render() {

        return (
            <div className="col-9">
                    {this.state.sections.map((section) =>
                        <Section
                            key={section.id}
                            section={section}
                            categoryId={this.props.categoryId}
                            tagId={this.props.tagId}
                            onTagSelect={this.props.onTagSelect}
                            // onFavSelect={this.handleFavorite}
                            onSelectFav = {this.props.onSelectFav}
                        />
                    )}
            </div>
        )
    }
}