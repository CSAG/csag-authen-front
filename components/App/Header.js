import React, { Component } from 'react'
import Head from 'next/head'
import stylesheet from '../../styles/main.scss'

export class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <header>
                <Head>
                    <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
                    <title>{ this.props.title } - CSAG Authentication</title>
                </Head>
            </header>
        )
    }
}
