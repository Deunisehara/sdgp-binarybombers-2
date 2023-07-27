import React from 'react';
import { Component } from 'react';
import './Customer.css';
import Footer from "./Footer"; 



class Customer extends Component{
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSubmitNBO = this.handleSubmitNBO.bind(this);
        this.state = {
            //string variable to save the customerId 
            customerId: '',
            //array to save the packages
            packages: {"data":{"id":"","package":""},"message":"","status":0},
            //array to save the nbo taken in the same page
            nbo: {"data":{"id":"","package":""},"message":"","status":0}
        };

    }

    handleChange(event) {
        this.setState({ customerId: event.target.value });
    }

    handleSubmit(event) {
        fetch('http://localhost:9900/binary-bomber-service/customer?customerId=' + this.state.customerId).then(res => res.json()).then(
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

    handleSubmitNBO(event) {
        fetch('http://localhost:9902/binary-bomber-service/nbo1?customerId=' + this.state.customerId).then(res => res.json()).then(
            result => {
                if (result.status===1){
                    this.setState({ nbo: result })
                    console.log(result.data.package);
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
            <div className="customer">


                <h1 className="customer__title">CUSTOMER</h1>


                <div className="customer__middle">
                    <div className="customer__cusInfo">
                        <h5>Customer ID</h5>
                        <form onSubmit={this.handleSubmit}>
                            <input type="text" className="customer__customerId"
                                name="customerId" placeholder="Enter the customer Id"
                                value={this.state.value} onChange={this.handleChange} />
                            <button type="button" onClick={this.handleSubmit} className="btn btn-info">Search</button>
                        </form>


                        <br/><br/><br/>
                        <button type="button" onClick={this.handleSubmitNBO} className="generateNBO">Generate the Next Best Offer</button>
                        <div>
                        <h4> Next Best Offer:</h4>
                        {this.state.nbo.data.package.split(", ")}
                        </div>



                    </div>

                    <div className="customer__presentPackages">



                        <div className="packagesLi">
                            <div className="p1">
                                <h4>Present Packages</h4>
                            </div>
                            <div>
                                {this.state.packages.data.package.split(", ")}
                            </div>
                        </div>
                    </div>


                    <img
                        className="customer__image"
                        src="23.gif"
                        alt=""
                    />

                </div>
            <Footer/>
            </div>
        );
    }
}

export default Customer;