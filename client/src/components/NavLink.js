import React, { Component} from 'react'
import { Link } from 'react-router-dom'

class NavLink extends Component {
    constructor(){
        super()
        this.state = {
            extendedMenuToggle: false
        }
    }

    toggleMenu = e => {
        e.preventDefault();
        this.setState(prevState => ({ extendedMenuToggle: !prevState.extendedMenuToggle }))
        console.log(this.state.extendedMenuToggle)
        
    }

    render(){
        return (
            <div className="nested-nav-item">
                <Link to="/" onClick={this.toggleMenu}>{this.props.title}</Link>
                {this.state.extendedMenuToggle &&  this.props.items.map(item => {
                    return ( <Link className="type" to="type">- {item.title}</Link>)
                })}
            </div>
        )
    }
}

export default NavLink