import React from 'react';
import './Package.css';
import Footer from "./Footer"; 
import { Component } from 'react';

export class Package extends Component{
    //creating the props
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            packageId: 'packageId',
			packages: {"data":{"id":"","package":""},"message":"","status":0}
        };

    }

    handleChange(event){
        this.setState({packageId:event.target.value});
    }

    handleSubmit(event){
        fetch("http://localhost:9901/binary-bomber-service/customer2?package="+this.state.packageId).then (res=> res.json()).then(
            result => {
                if (result.status===1){
                    this.setState({packages: result})
                    console.log(this.state)
                }
                else{
                    alert(result.message)
                }
            }
        )
    }

   

    render(){
        return (
            <div className="package">


                <h1 className="package__title">PACKAGE</h1>


                <div className="package__middle">
                    <div className="package__cusInfo">
                        <h5>Package ID</h5>
                        <form onSubmit={this.handleSubmit}>
                            <input 
                                type="text" 
                                className="customer__customerId"
                                name="customerId" 
                                placeholder="Enter the package Id"
                                value={this.state.value} 
                                onChange={this.handleChange} />
                            <button type="button" onClick={this.handleSubmit} className="btn btn-info">Search</button>
                        </form>

                    </div>

                    <div className="customer__presentPackages">



                        <div className="packagesLi">
                            <div className="p1">
                                <h4>Customers who have subscribed : </h4>
                            </div>
                            <div>
                                {this.state.packages.data.id.split(", ").map(function(name){
                                    return (
                                        <div className="table">
                                            {name}
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>

                </div>
                <Footer/>

            </div>
        );
    
    }
}


export default Package;