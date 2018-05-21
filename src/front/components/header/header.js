import React,{ Component } from 'react'
import { Link } from 'react-router-dom'
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
                        <li className="navitem"><Link to="/">主页在此</Link></li>
                        <li className="navitem"><Link to="/about">个人信息</Link></li>
                        <li className="navitem"><Link to="/manage">后台管理</Link></li>
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