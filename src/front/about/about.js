import React, { Component } from 'react';
import './about.css'
import Header from '../components/header/header'
import Article from '../components/article/article'

class About extends React.Component{
  render(){
    return(
      <div>
         <Header></Header>
<div className="gradient">

<section>
  <h2>个人传记</h2>
    <p>
        周凡是一个莫名其妙来做前端的人，真尼玛掉坑里了
    </p>
    <p className="space-maker">没人要，求带啊</p>
</section>

<section>
  <h2>技术栈</h2>
    <p className="space-maker">啥都会，前能倒腾框架写页面，后能手撕接口建服务，曾有一天学会红黑树</p>
</section>

<section>
  <h2>其他信息</h2>
  <p className="space-maker">搭车发一个相亲帖子，征婚相亲交友了解一下</p>
</section>
</div>

<footer className="content-footer">
  <p>想要我的公司和小姐姐，可以点击下一行来找到我</p>
  <ul className="social"> 
    <li><a href="https://github.com/commonzhou">某程序猿交友网站</a></li>
  </ul>
</footer>
 </div>
    ) 
  }
}

export default About;
