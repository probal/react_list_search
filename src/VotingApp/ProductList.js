import React, { Component } from 'react'

import seedProducts from './seed'
import Product from './Product'


export default class ProductList extends Component{
    state = {
        products: [],
        searchItem : '',
        tempProduct : []
    }


    componentDidMount = () => {
        this.setState({
            products: seedProducts,
            tempProduct: seedProducts
        })
    }


    handleProductUpVote = (productId, dir) => {
        const nextProducts = this.state.products.map((product) => {
            if (product.id === productId) {
                return Object.assign({}, product, {
                    votes: product.votes + dir,
                })
            } else {
                return product
            }
        })
        
        const tempProduct = this.state.tempProduct.map((product) => {
            if (product.id === productId) {
                return Object.assign({}, product, {
                    votes: product.votes + dir,
                })
            } else {
                return product
            }
        })
        this.setState({
            products: nextProducts,
            tempProduct: tempProduct
        })

    }

    handleSearch = (e) => {
        const nextProducts = this.state.tempProduct.filter((product) => {
            return product.title.indexOf(e.target.value) > -1
        })
        this.setState({
            products: nextProducts,
            searchItem: e.target.value
        })
    }

    render(){
        const products = this.state.products.sort((a, b) => (
            b.votes - a.votes
        ))

        return (
            <div className='ui unstackable items'>
                <input onChange={this.handleSearch.bind(this)} type="text" value={this.state.searchItem}/>
                {products.map((product) =>
                    <Product
                        key={product.id}
                        product={product}
                        onVote={this.handleProductUpVote}                       
                    />
                )}
            </div>
        )
    }
}