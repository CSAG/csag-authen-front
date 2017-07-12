import React, {Component} from 'react'
import { Footer, Header } from '../components'

export class Main extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                 <Header title={this.props.title} />
                    {this.props.children}
                 <Footer />
             </div>
        )
    }
}