import React from "react";
import { Component } from "react";
import { useState } from 'react';
import axios from 'axios';

export default class ContentTable extends Component{
  
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          items: []
        };
      }
      componentDidMount(){
            fetch("http://localhost:10000/")
              .then(res => res.json())
              .then(  
                (result) => {
                  console.log("test")
                  this.setState({
                    isLoaded: true,
                    items: result
                  });
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                  this.setState({
                    isLoaded: true,
                    error
                  });
                }
              )
            }
    
      render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
          return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
          return <div>Loading...</div>;
        } else {
          return (
                  <table>
                    {items.map(item => (
                      <tr key={item.id}>
                        <td>{item.name}</td>
                        <td>{item.id}</td> 
                      </tr>
                    ))}
                  </table>
          );
        }
      }
}