import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './style.css';

export default class FilterRemove extends Component{

    static propTypes = {
        filterByTag: PropTypes.string,
        filterByCategory: PropTypes.number,
        filterByCategoryName: PropTypes.string,
        filterBy: PropTypes.string
    };

    constructor(props){
        super(props);
        this.filterBy = this.props.filterBy;
        this.renderTagFilter = this.renderTagFilter.bind(this);
        this.renderCategoryFilter = this.renderCategoryFilter.bind(this);
    }

    renderTagFilter(){
        return(
            <div className="ui image label">
                {this.props.filterByTag}
                <i className="delete icon" onClick={() => this.props.onRemove('tag')}/>
            </div>
        );
    }

    renderCategoryFilter(){
        return(
            <div className="ui image label">
                {this.props.filterByCategoryName}
                <i className="delete icon" onClick={() => this.props.onRemove('category')}/>
            </div>
        );
    }

    render(){
        if (this.filterBy === 'category'){
            if (this.props.filterByCategory !== -1) {
                return(
                    <div className="d-flex flex-row" style={styles.containerStyle}>
                        <div className="inline field">
                            <div className="ui right pointing red basic label">
                                Filter Category:
                            </div>
                            {this.renderCategoryFilter()}
                        </div>
                    </div>
                );
            }
        }else if (this.filterBy === 'tag'){
            if(this.props.filterByTag){
                return(
                    <div className="d-flex flex-row" style={styles.containerStyle}>
                        <div className="inline field">
                            <div className="ui right pointing red basic label">
                                Filter Tag:
                            </div>
                            {this.renderTagFilter()}
                        </div>
                    </div>
                );
            }
        }
        return(<div className="flex-row"/>)
    }
}

const styles = {
  containerStyle: {
      margin: '15px 0'
  }
};