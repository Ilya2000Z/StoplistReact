import './App.css';
import { Component } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import ContentTable from './ContentTable/ContentTable';
import ButtonSerch from './buttonSerch/buttonSerch';
import { render } from '@testing-library/react';
import ProductTable from './ProductTable/ProductTable';
import History_table from './history_table/history_table';



export default class App extends Component{
  
  constructor(props){
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      todo: false,
      name: null,
      citylist:['Симферополь','Севастополь','Ялта','Феодосия','Керч','Евпатория'],
      available:['Доступен','Недоступен'],
      cityNmae: 'Город',
      idCity: null,
      idAvailable: null,
      listName: null,
      dataArr: [],
      visibleComponent: false,
      ProductTable: null,
      historyArr: [],
      showHistory: false,
      nameId: null
    }
  }
  // state = {
   
  // }
  testcity=()=>{
   
    this.setState({showHistory:this.state.showHistory=true})
    console.log("test_1")
  }
  changeName=(a)=>{
    this.setState({nameId:this.state.nameId=a})
  }
    ButtonSerch=(TableName)=>{
      if(typeof(TableName)!='object')
        {
          this.setState({listName:this.state.listName=TableName})
        }
      const response = fetch("http://localhost:10000/test", {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify([this.state.name,this.state.citylist[this.state.idCity],this.state.available[this.state.idAvailable],this.state.listName]),
              
        })
        .then((response) => {
          return response.json();
        })
        .then(
          (data) => {
            this.setState({
              isLoaded: true,
              items: data
            });
          this.setState({visibleComponent:this.state.visibleComponent=true})
        }
      );    
    }
  
  render(){
    var City = this.state.citylist.map((item,key)=> <li class="dropdown-item" id={key} href="#"onClick={e=>this.setState({idCity:this.state.idCity=e.target.id})}>{item}</li>)
    var Available = this.state.available.map((item,key)=> <li class="dropdown-item" id={key} href="#"onClick={e=>this.setState({idAvailable:this.state.idAvailable=e.target.id})}>{item}</li>)
    const { error, isLoaded, items } = this.state;
    return(<div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Fidele</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            {this.state.citylist[this.state.idCity]!=null?this.state.citylist[this.state.idCity]:this.state.cityNmae}
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              {City}
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            {this.state.available[this.state.idAvailable]!=null?this.state.available[this.state.idAvailable]:"Доступность"}
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              {Available}
          </ul>
        </li>
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"
          onChange={e => this.setState({name:this.state.name=e.target.value})}
        ></input>
       </form>
      <button onClick={this.ButtonSerch} class="btn btn-outline-success" type="submit">Search</button> 
    </div>
  </div>
</nav>
  <Row style={{"--bs-gutter-x":"0rem"}}>
    <div className='col-lg-5'>
      {this.state.visibleComponent?<ProductTable nameId={this.changeName} showHistory={this.testcity} historyArr={this.state.historyArr} NameCity={this.state.citylist[this.state.idCity]} error={this.state.error} isLoaded={this.state.isLoaded} items={this.state.items}></ProductTable>:null}
      </div>
      <div className='col-lg-7'>
      {this.state.showHistory?<History_table nameId={this.state.nameId} historyArr={this.state.historyArr}></History_table>:null}
      </div>
  </Row>
</div>
    )
    
  }
}

// export default App;
