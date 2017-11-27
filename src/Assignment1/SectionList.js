import React, { Component } from 'react'
import PropTypes from 'prop-types'

import sectionData from './data/sectionData'
import Section from './Section'

export default class SectionList extends Component {
    
    static propTypes = {
        categoryId: PropTypes.number.isRequired,
        tagId: PropTypes.string,
        onTagSelect: PropTypes.func
    };

    constructor(props){
        super(props);
        this.state = {
            sections: [],
            categoryId: this.props.categoryId
        };
    }


    componentDidMount = () => {
        this.setState({
            sections: sectionData
        })
    };

    render() {

        return (
            <div className="row">
                
                <div className="col-9">
                    <div className="row">
                        {this.state.sections.map((section) =>
                            <Section
                                key={section.id}
                                section={section}
                                categoryId={this.props.categoryId}
                                tagId={this.props.tagId}
                                onTagSelect={this.props.onTagSelect}
                            />
                        )}
                    </div>
                </div>

                <div className="card">
                    <h3 className="card-header">My Fav Section</h3>
                    <div className="card-block">
                    </div>
                </div>
                    
            </div>
        )
    }
}