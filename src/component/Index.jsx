import React, { Component } from 'react'

class Index extends Component {
    clickHandler = (event) => {
      console.log('Click oldu');
    };
   
    render() {
      return (
        <button type="button" onClick={this.clickHandler}>
           Subscribe
        </button>
      );
    }
   }
   export default Index