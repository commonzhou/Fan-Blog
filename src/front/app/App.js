import React, { Component } from 'react';

import Header from '../components/header/header'
import Article from '../components/article/article'
import Content from '../components/content/content'
class App extends React.Component{
  render(){
    let job="术士";
    return(
      <div>
         <Header></Header>
         <Content></Content>
         {/* <h2>我的职业是{job}</h2>
         <Devil name="大哥"></Devil>     
         <Weapon weapon="恶魔之霜"></Weapon> 
         */}
      </div>
    ) 
  }
}


class Devil extends React.Component{
  constructor(props){
    super(props);
    this.state={
      cards:['亵渎','地狱火','二王']
    }
  }
  addNewCards(){
    this.setState({
      cards:[...this.state.cards,"新卡"+Math.random()]
     }
    )
  }
  render(){
    let devil="加拉克苏斯";
    return(
      <div>
        <h3>术士旗下的恶魔有{this.props.name}</h3>
        <h3>术士麾下的卡牌有</h3>
        <button onClick={()=>{this.addNewCards()}}>加入新卡</button>
        <ul>
          {this.state.cards.map(v=>{
            return <li key={v}>{v}</li>
          })}
        </ul>
      </div>
    )
  }
}

function Weapon(props){        // 无状态组件
  return(
    <h3>术士的武器是{props.weapon}</h3>
  )
}

export default App;
