import React from 'react';
import './Package.css';
import Footer from "./Footer"; 
import { Component } from 'react';

export class PackageForm extends Component{
    constructor(props) {
        super(props);
  
        this.state = {
            packageId: 'packageId',
			customers:[]
        };

    }

    mySubmitHandler2 = (event2) =>{
        event2.preventDefault();
        window.fetch("http://localhost:9901/binary-bomber-service/customer2?packages="+this.state.packageId, {
            method: "GET",
            headers: {
                'Accept': 'application/json',
            },
        }).then (function (response) {return response.json()})
        .then(function (json) {
            if (json.status === -1) {
                alert(json.message); 

            } else {



                let customer = json.data;
                this.customers=json.data;
                var dataArray2 = customer;
                
                    
                    const objectArray2 = Object.entries(dataArray2);
                    objectArray2.forEach(([key,value])=> {
                        console.log(value);
                        const {data} = this.state;
                        return this.render(data);
                        // CustomerForm.customerId.setState(value);
                    });
                // <Route path="/package">
                //     <Package/>
                // </Route>
                    
                
            }
        })
        .catch(function (error) {/*Handle error*/});
    }
    myChangeHandler2 = (event2) => {
        let nam = event2.target.name;
        let val = event2.target.value;
        this.setState({[nam]: val});
    }

    render(){
        return (
            <div className="package">
                
                <h1 className="package__title">PACKAGE</h1>
                <div className="package__middle">
                <div className="package__presentPackages">
                    
                    <div className="packagesLi">
                    <div className="p1">
                    <h5>Customer ID</h5>
                    <form onSubmit={this.mySubmitHandler2}>
                    <input 
                        type="text" 
                        className="package__packages"
                        placeholder="Enter the package Id"
                        onChange={this.myChangeHandler2}/>
                    </form>
                    
                    </div>
                    <div className="p1">
                    <input type="text" className="package__packages"/>
                    </div>
                    <div className="p1">
                    <input type="text" className="package__packages"/>
                    </div>
                    <div className="p1">
                    <input type="text" className="package__packages"/>
                    </div>
                    <div className="p1">
                    <input type="text" className="package__packages"/>
                    </div>
                    <div className="p1">
                    <input type="text" className="package__packages"/>
                    </div>
                    <div className="p1">
                    <input type="text" className="package__packages"/>
                    </div>
                    <div className="p1">
                    <input type="text" className="package__packages"/>
                    </div>
                    </div>
                </div>
                <div class="package__cusInfo">
                    <h5>Package ID</h5>
                    <input type="text" className="package__customerId" name="custId"/>
                    
                    <h5>Package Name</h5>
                    <input type="text" className="package__customerId" name="custId"/>
    
                </div>
                </div>
                <Footer/>
            </div>
        
        )
    }
    
}


