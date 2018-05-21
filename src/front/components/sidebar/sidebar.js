import React, { Component } from 'react';
import './sidebar.css'


class Sidebar extends React.Component{
  render(){
    return(
      <div>
 <div className="sidebar">
  
  <div className="h1tag">后台管理系统</div>
  <div className="ultag">
      <div className="litag">文章管理</div>
      <div className="litag">新建标签</div>
      <div className="litag">写文章啦</div>
  </div>
  
  
</div>

      </div>
    ) 
  }
}

export default Sidebar;
