import React, {Component} from 'react'
import {Footer, Header, Navbar} from '../components'

export class Main extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <Header title={this.props.title}/>
                <Navbar/>
                {this.props.children}
                <Footer/>
            </div>
        )
    }
}