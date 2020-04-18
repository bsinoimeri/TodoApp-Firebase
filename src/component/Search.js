import React, { Component } from 'react';
import PropTypes from "prop-types"

export class Search extends Component {
    
  render() { 
    return (
       <div align="right" style={{backgroundColor: "rgb(51, 51, 51)"}}>
         <input 
          type="text" 
          className="input" 
          style={{ flex: '1', padding: '5px', marginBottom:"20px" }}
          placeholder="--- Search Todo ---" 
          onChange={this.props.searchTodo}
        />
    </div>
    )
  }
}

Search.propTypes = {
    searchTodo: PropTypes.func.isRequired
  }
  


export default Search
