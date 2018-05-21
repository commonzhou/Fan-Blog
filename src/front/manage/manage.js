import React, { Component } from 'react';
import './manage.css'
import Sidebar from '../components/sidebar/sidebar'
import {BrowserRouter,Route,Redirect,Switch} from 'react-router-dom'


class Manage extends React.Component{
  render(){
    return(
      <div>
         <Sidebar></Sidebar>
      </div>
    ) 
  }
}

export default Manage;
