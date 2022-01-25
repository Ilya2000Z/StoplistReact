import React, { Component } from "react";

export default class ProductTable extends Component{
    serchName=(e)=>{
        const response = fetch("http://localhost:10000/dish", {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify([`${this.props.items[e.target.id].id}`,this.props.NameCity]),
            })
            .then((response) => {
                return response.json();
              })
            .then((data)=>
              this.props.historyArr.unshift(data),
              setTimeout(()=>{this.props.showHistory()},500),
              this.props.nameId(this.props.items[e.target.id].name)
            )
           
              
        }
    render(){
        if (this.props.error) {
            return <div>Error: {this.props.error.message}</div>;
          } else if (!this.props.isLoaded) {
            return <div>Loading...</div>;
          } else {
            return (
                    <table>
                      {this.props.items.map((item,key) => (
                        <tr key={item.id}>
                          <td onClick={this.serchName} id={key}>{item.name}</td>
                          <td>{item.id}</td> 
                        </tr>
                      ))}
                    </table>
            );
          }
    }
}