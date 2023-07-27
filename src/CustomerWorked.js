import React from 'react'
import Footer from "./Footer"; 
import './Customer.css';


class CustomerWorked extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            customerId: '',
            //array to save the packages
            packages: {"data":{"id":"","package":""},"message":"","status":0}
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


                        <h4><a href="http://localhost:3000/nbocust" target="new"> Next Best Offer </a> </h4>




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

export default CustomerWorked;