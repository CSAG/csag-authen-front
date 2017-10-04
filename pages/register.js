import React, {Component} from 'react'
import {Main as Template} from '../layouts'

export default class App extends Component {
    render() {
        return (
            <Template title="Register">
                <div className="row">
                    <div className="col-sm-6 col-sm-offset-3">
                        <div className="panel panel-base">
                            <div className="panel-heading">
                                <h4>Register</h4>
                            </div>
                            <div className="panel-body">
                                <fieldset>
                                    <legend>System information:</legend>
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <input id="username" type="text" className="form-control mb-15 col-sm-6"
                                                   placeholder="Username"/>
                                        </div>
                                        <div className="col-sm-6">
                                            <input id="email" type="email" className="form-control mb-15"
                                                   placeholder="Email"/>
                                        </div>
                                        <div className="col-sm-6">
                                            <input id="password" type="password" className="form-control mb-15"
                                                   placeholder="Password"/>
                                        </div>
                                        <div className="col-sm-6">
                                            <input id="password_confirmation" type="password" className="form-control mb-15"
                                                   placeholder="Password Confirmation"/>
                                        </div>
                                    </div>
                                </fieldset>

                                <fieldset>
                                    <legend>Personal information:</legend>
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <input  type="text" className="form-control mb-15 col-sm-6"
                                                   placeholder="Firstname"/>
                                        </div>
                                        <div className="col-sm-6">
                                            <input type="text" className="form-control mb-15"
                                                   placeholder="Lastname"/>
                                        </div>
                                        <div className="col-sm-6">
                                            <select name="gender" className="form-control">
                                                <option value="m">Male</option>
                                                <option value="f">Female</option>
                                            </select>
                                        </div>
                                        <div className="col-sm-6">
                                            <input type="date" className="form-control mb-15"
                                                   placeholder="Birthday"/>
                                        </div>
                                    </div>
                                </fieldset>

                                <input type="button" value="Register" className="btn btn-info mb-15 full-width"/>
                                <div style={{textAlign: "center", fontSize: "0.9em"}}>
                                    <a href="/">Login</a> | <a href="/forgotpass">Forgot Password</a>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </Template>
        )
    }
}