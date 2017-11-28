import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './style.css';

export default class FilterRemove extends Component{

    static propTypes = {
        filterByTag: PropTypes.string
    };

    constructor(props){
        super(props);

        this.renderTagFilter = this.renderTagFilter.bind(this);
    }

    renderTagFilter(){
        return(
            <div className="ui image label">
                {this.props.filterByTag}
                <i className="delete icon" onClick={() => this.props.onRemove('tag')}/>
            </div>
        );
    }

    render(){
        if(this.props.filterByTag){
            return(
                <div className="d-flex flex-row" style={styles.containerStyle}>
                    <div className="inline field">
                        <div className="ui right pointing red basic label">
                            Filter:
                        </div>
                        {this.renderTagFilter()}
                    </div>
                </div>
            );
        }else{
            return(<div className="flex-row"/>)
        }

    }
}

const styles = {
  containerStyle: {
      margin: '15px 0'
  }
};