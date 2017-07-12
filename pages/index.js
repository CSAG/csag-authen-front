import React, { Component } from 'react'
import { Main as Template } from '../layouts'

class App extends Component {
    render () {
        return (
            <Template title="Welcome">
                <p>my page with global styles!55</p>
                <img src='/assets/images/bg/001.jpg' />
            </Template>
        )
    }
}

export default App