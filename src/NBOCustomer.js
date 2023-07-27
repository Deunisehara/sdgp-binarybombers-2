// import React from 'react'

// class NBOCustomer extends React.Component{
//     constructor(props){
//         super(props);
//         this.state={
//             package:''
//         }   
//     }

//     mySubmitHandler2 = (event2) =>{
//         event2.preventDefault();
//         window.fetch("    http://localhost:9902/binary-bomber-service/nbo1="+this.state.custID, {
//             method: "GET",
//             headers: {
//                 'Accept': 'application/json',
//             },
//         }).then (function (response) {return response.json()})
//         .then(function (json) {
//             //checking the status of the response
//             if (json.status === -1) {
//                 alert(json.message); 
//                 console.log(json.status);
//             } else {
//                 //if status is 1 which means the customer is available, data will be printed to the console
//                 let customer = json.data;
//                 var dataArray2 = customer;
//                 console.log(customer);
                
                    
//                     const objectArray2 = Object.entries(dataArray2);
//                     objectArray2.forEach(([key,value])=> {
//                         console.log(value);
//                     });
 
//             }
//         })
//         .catch(function (error) {/*Handle error*/});
//     }

//     myChangeHandler=(event)=>{
//         this.setState({package:event.target.value});
//     }

//     render(){
//         return (
//             <div>
//                 <form>
//                 <input
//                 type = 'text'
//                 name='custID'
//                 onChange={this.myChangeHandler}
//                 />
                
//                 </form>
                
                
                
//             </div>
//         )
//     }
    
// }

// export default NBOCustomer
