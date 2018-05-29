import React, { Component } from 'react';
import './newTag.css'
import Sidebar from '../../components/sidebar/sidebar'

class newTag extends React.Component{
  render(){
    return(
      <div>
           <Sidebar></Sidebar>
           <div className="section">
              <div>新建标签</div>
              <input type="text" className="input" />
              <button className="addTag">添加</button>
              <ul className="taglist">
                <li className="tagitem">html</li>
                <li className="tagitem">css</li>
                <li className="tagitem">javascript</li>
              </ul>
           </div>
      </div>
    ) 
  }
}

export default newTag;
