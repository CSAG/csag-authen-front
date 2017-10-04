import React, {Component} from 'react'
import stylesheet from '../../styles/main.scss'

export class Navbar extends Component {
    render() {
        return (
            <nav className="csag-navbar">
                <div style={{textAlign:"center"}}>
                    <img src="/public/logo-base.png" alt="CSAG Authentication" height="100"/>
                </div>
            </nav>
        )
    }
}
