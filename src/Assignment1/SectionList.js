import React, { Component } from 'react'
import PropTypes from 'prop-types'

import sectionData from './data/sectionData'
import Section from './Section'

export default class SectionList extends Component {
    
    static propTypes = {
        categoryId: PropTypes.object.isRequired
    }

    state = {
        sections: [],
        categoryId: this.props.categoryId
    }

    componentDidMount = () => {
        this.setState({
            sections: sectionData
        })
    }

    filterByCategoryId() {

    }

    render() {

        return (
            <div>
                <div className="columns">
                    <div className="column is-9 border-me">
                        {this.state.sections.map((section) =>
                            <div className="tile is-ancestor">
                                <Section
                                    key={section.id}
                                    section={section}
                                    categoryId={this.state.categoryId}
                                 />
                            </div>
                        )}
                    </div>
                    <div className="column is-3 border-me">Fav</div>
                </div>
            </div>
        )
    }
}