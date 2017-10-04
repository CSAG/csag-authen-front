import React, {Component} from 'react'
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
                    <link rel='stylesheet prefetch' href='https://fonts.googleapis.com/css?family=Open+Sans:600'/>
                    <link rel="stylesheet"
                          href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css"/>
                    <link rel="stylesheet"
                          href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap-theme.min.css"/>
                    <title>{this.props.title} - CSAG Authentication</title>
                    <link href="public/favicon.png" rel="icon" type="image/png"/>
                    <style dangerouslySetInnerHTML={{__html: stylesheet}}/>

                </Head>
            </header>
        )
    }
}
