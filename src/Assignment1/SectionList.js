import React, { Component } from 'react'
import PropTypes from 'prop-types'

import sectionData from './data/sectionData'
import Section from './Section'

export default class SectionList extends Component {
    
    static propTypes = {
        categoryId: PropTypes.number.isRequired
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
            <div className="row">
                <div className="col-9">
                    <div className="row">
                        {this.state.sections.map((section) =>
                            <Section
                                key={section.id}
                                section={section}
                                categoryId={this.state.categoryId}
                                />
                        )}
                    </div>
                </div>
                <div className="card">
                    <h3 className="card-header">My Fav Section</h3>
                    <div class="card-block">
                    </div>
                </div>
                    
            </div>
        )
    }
}