import React, { Component } from 'react'
import PropTypes from 'prop-types'


export default class Article extends Component {

    static propTypes = {
        article: PropTypes.object.isRequired,
        onTagSelect: PropTypes.func,
        onSelectFav: PropTypes.func    
    };

    constructor(props){
        super(props);
        this.searchByTag = this.searchByTag.bind(this);
        this.favoriteTapped = this.favoriteTapped.bind(this);
    }

    searchByTag = (value) => {
        this.props.onTagSelect(value);
    };

    favoriteTapped = (value) => {
        this.props.onSelectFav(value);
    };

    render() {

        const {id, title, categoryId, tag, isFav, price, imageUrl} = this.props.article;
        let favIcon = 'images/favorite/un_fav.png'
        if (isFav){
            favIcon = 'images/favorite/fav.png'
        }
        
        return (
            <div id={'article_' + id} className="card card-margin" style={{width:"200px"}}>
                <img className="card-img-top img-thumbnail" src={imageUrl} alt={categoryId}/>
                <img className="fav-img-top" src={favIcon}  alt={categoryId} 
                style={{ position: 'absolute',width: 30, height: 30, top: 10, right: 10 }}
                onClick={() => this.favoriteTapped(this.props.article)}/>
                <div className="card-block">
                    <h4 className="card-title">{title}</h4>
                    <span className="badge badge-default cursor" value={tag} onClick={() => this.searchByTag(tag)}>{tag}</span>
                    <p>${price} per person</p>
                </div>
            </div>
        )
    }
}