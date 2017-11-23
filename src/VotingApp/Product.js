import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import StarRatingComponent from 'react-star-rating-component';

export default class Product extends PureComponent{

    static propTypes = {
        onVote: PropTypes.func.isRequired,
        product: PropTypes.object.isRequired
    }

    state = {
        rating: this.props.product.rating
    }

    handleUpVote = () => (
        this.props.onVote(this.props.product.id, 1)
    );

    handleDownVote = () => (
        this.props.onVote(this.props.product.id, -1)
    );

    onStarClick = (nextValue, prevValue, name) => {
        this.setState({rating: nextValue})
        //this.props.product.rating = nextValue
    }


    render(){
        const {id, productImageUrl, votes, url, title, description, submitterAvatarUrl } = this.props.product
        return (
            <div className='item'>
                <div className='image'>
                    <img src={productImageUrl} />
                </div>
                <div className='middle aligned content'>
                    <div className='header'>
                        <a onClick={this.handleUpVote}>
                            <i className='large caret up icon' />
                        </a>                        
                        {votes}
                        <a onClick={this.handleDownVote}>
                            <i className='large caret down icon' />
                        </a>
                    </div>
                    <div className='description'>
                        <a href={url}>
                            {title}
                        </a>
                        <p>
                            {description}
                        </p>
                    </div>
                    <div className='extra'>
                        <span>Submitted by:</span>
                        <img
                            className='ui avatar image'
                            src={submitterAvatarUrl}
                        />
                    </div>
                    <div>
                        <StarRatingComponent 
                            name={'rate_'+id}
                            starCount={10}
                            value={this.state.rating}
                            onStarClick={this.onStarClick.bind(this)}/>
                    </div>
                </div>
            </div>
        )
    }
}