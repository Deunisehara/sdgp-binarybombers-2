import React from 'react';
import './NBO.css';
import Footer from "./Footer"; 
import { Component } from 'react';

export class NBO extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            packageId: '',
            //array to save the packages
            packages: {"data":{"id":"","package":""},"message":"","status":0}
        };

    }

    handleChange(event) {
        this.setState({ packageId: event.target.value });

    }

    handleSubmit(event) {

        fetch('http://localhost:9903/binary-bomber-service/nbo2?package=' + this.state.packageId).then(res => res.json()).then(
            result => {
                if (result.status===1){
                    this.setState({ packages: result })
                    console.log(result.data.id);
                    console.log(this.state);
               
                
                }
                else{
                    alert(result.message)
                }
            }
        )
    }

    render() {


        return (
            <div className="package">


                <h1 className="package__title">NEXT BEST OFFER - PACKAGE</h1>


                <div className="package__middle">
                    <div className="customer__cusInfo">
                        <h5>Package ID</h5>
                        <form onSubmit={this.handleSubmit}>
                            <input 
                                type="text" 
                                className="customer__customerId"
                                name="packageId" 
                                placeholder="Enter the package Id"
                                value={this.state.value} 
                                onChange={this.handleChange} />
                            <button type="button" onClick={this.handleSubmit} className="btn btn-info">Search</button>
                        </form>


                    </div>

                    <div className="package__presentPackages">



                        <div className="packagesLi">
                            <div className="p1">
                                <h4>Customer ID: </h4>
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
    

export default NBO
