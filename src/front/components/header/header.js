import React,{ Component } from 'react'
import './header.css'
class Header extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <header>
		            <h1 className='logo'>饭勺文集</h1>
            	</header>
                <nav>
                    <ul>
                        <li className="navitem"><a href="#" >主页</a></li>
                        <li className="navitem"><a href="#" >文章</a></li>
                        <li className="navitem"><a href="#">关于</a></li>
                        <li className="navitem"><a href="#" >管理</a></li>
                    </ul>
                    <div className="menubar">Menu
					    <span className="hamburgericon"><i className="fa fa-bars"></i></span>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Header