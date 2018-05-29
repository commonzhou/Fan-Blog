import React, { Component } from 'react';
import './newArticle.css'
import Sidebar from '../../components/sidebar/sidebar'

class newArticle extends React.Component{
  render(){
    return(
      <div>
          <Sidebar></Sidebar>
          new文章
      </div>
    ) 
  }
}

export default newArticle;
