import React, { Component } from 'react'
import {FaAlignRight} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import logo from '../images/logo.svg'
export default class Navbar extends Component {
    state = {
        navExpanded: false
    }

     handleToggle = () => {
        this.setState({navExpanded: !this.state.navExpanded})
    }
    render() {
        return (
            <nav className="navbar" >
              <div className="nav-center">
                <div className="nav-header">
                    <Link to ='/'>
                        <img src={logo}/>
                    </Link>
                    <button className="nav-btn" type="button" onClick={this.handleToggle}>
                        <FaAlignRight className="nav-icon"/>
                    </button>
                </div>
                <ul className={this.state.navExpanded ? "nav-links show-nav": "nav-links"}>
                    <li>
                        <Link to = '/'>Home</Link>
                    </li>
                    <li>
                        <Link to = '/rooms'>Rooms</Link>
                    </li>
                </ul>
              </div> 
            </nav>
        )
    }
}
