import React, { Component } from 'react'
import PropTypes from 'prop-types'

import sectionData from './data/sectionData'
import Section from './Section'

export default class SectionList extends Component {
    
    static propTypes = {
        articles: PropTypes.array.isRequired,
        categoryId: PropTypes.number.isRequired,
        tagId: PropTypes.string,
        onTagSelect: PropTypes.func,
        onSelectFav: PropTypes.func
    };

    constructor(props){
        super(props);
        this.state = {
            articles: [],
            sections: [],
            favorites: [],
            categoryId: this.props.categoryId
        };
    }


    componentDidMount = () => {
        this.setState({
            articles: this.props.articles,
            sections: sectionData,
            favorites: []
        })
    };

    render() {

        return (
            <div className="col-9">
                    {this.state.sections.map((section) =>
                        <Section
                            articles={this.props.articles}
                            key={section.id}
                            section={section}
                            categoryId={this.props.categoryId}
                            tagId={this.props.tagId}
                            onTagSelect={this.props.onTagSelect}
                            onSelectFav = {this.props.onSelectFav}
                        />
                    )}
            </div>
        )
    }
}