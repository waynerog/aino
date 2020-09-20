import React, {Component} from 'react';
import {Link} from 'react-router-dom';
 
class Login  extends Component {

    constructor(props){
        super(props);
        this.state ={
            email:'',
            password:''
        }
        this.login = this.login.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    login(){
        console.log("Fungsi Login");
    }

    onChange(e){
        this.setState({email: e.target.value});
    }
    
    render() { 
        return (
            <div className="container" style={{paddingTop: '10rem'}} >
                <div className="row justify-content-center">
                        <div className="col-md-6">
                        <h2>Silahkan Login Akun</h2>
                            <form method="POST" action="https://private-anon-0086ac0187-retailmockapp.apiary-mock.com/auth/login">
                                <div className="form-group">
                                    <label for="exampleInputEmail1">Username </label>
                                     <input name="email" type="email" className="form-control" placeholder="Masukan username anda"  required/>
                                </div>
                                <div className="form-group">
                                    <label for="exampleInputPassword1">Password</label>
                                    <input name="password" type="password" className="form-control" placeholder="Password" />
                                </div>
                                <div class="form-check">
                                    </div>
                                    <button type="submit" class="btn btn-primary btn-lg btn-block"><Link to={`/products/`}>Submit</Link></button>
                                      
                            </form>
                        </div>
                </div>
            </div> 
         );
    }
}
 
export default Login ;