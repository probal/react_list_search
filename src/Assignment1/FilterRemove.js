import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './style.css';

export default class FilterRemove extends Component{

    static propTypes = {
        filterType: PropTypes.string,
        filterByLabel: PropTypes.string
    };

    constructor(props){
        super(props);
        this.filterType = this.props.filterType;
        this.filterByLabel = this.props.filterByLabel
        this.renderFilter = this.renderFilter.bind(this);
    }

    renderFilter(){
        return(
            <div className="ui image label">
                {this.props.filterByLabel}
                <i className="delete icon" onClick={() => this.props.onRemove(this.props.filterType)}/>
            </div>
        );
    }

    render() {

        if (this.filterType){
            if(this.props.filterByLabel){
                return(
                    <div className="d-flex flex-row" style={styles.containerStyle}>
                        <div className="inline field">
                            <div className="ui right pointing red basic label">
                                Filter :
                            </div>
                            {this.renderFilter()}
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
      margin: '15px 25px'
  }
};