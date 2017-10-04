import React, {Component} from 'react'
import {Main as Template} from '../layouts'

export default class App extends Component {
    render() {
        return (
            <Template title="Login">
                <div className="row">
                    <div className="col-sm-4 col-sm-offset-4">
                        <div className="panel panel-base">
                            <div className="panel-heading">
                                <h4>Login</h4>
                            </div>
                            <div className="panel-body">
                                <input type="text" className="form-control mb-15" placeholder="Username or Email"/>
                                <input type="password" className="form-control  mb-15" placeholder="Password"/>
                                <input type="button" value="Login" className="btn btn-info mb-15 full-width"/>
                                <div style={{textAlign: "center", fontSize: "0.9em"}}>
                                    <a href="/register">Register</a> | <a href="/forgotpass">Forgot Password</a>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>
            </Template>
        )
    }
}