import React from "react";
import { Component } from "react";
import ContentTable from "../ContentTable/ContentTable";

export default class ButtonSerch extends Component{
    componentDidMount(){
        // const requestOptions = {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: this.props
        // };
        //     fetch('http://localhost:10000/', requestOptions)
        //         .then(response => response.json())
        //         .then(data => this.setState({ postId: data.id }));
        const response =  fetch('http://localhost:10000/',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
            })
        })
        const content = response.json();
        console.log(content)
    }
    render(){
        return(
            <div>
                
            </div>
        )
    }
}