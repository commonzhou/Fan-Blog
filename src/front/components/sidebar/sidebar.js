import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './sidebar.css'


class Sidebar extends React.Component{
  render(){
    return(
      <div>
 <div className="sidebar">
  
  <div className="h1tag">后台管理系统</div>
  <div className="ultag">
      <div className="litag"><Link to="/manage/articleManage" className="link">文章管理</Link></div>
      <div className="litag"><Link to="/manage/newTag" className="link">新建标签</Link></div>
      <div className="litag"><Link to="/manage/newArticle" className="link">写文章啦</Link></div>
  </div>
  
  
</div>

      </div>
    ) 
  }
}

export default Sidebar;
