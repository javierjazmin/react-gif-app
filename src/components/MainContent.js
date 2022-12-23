import React, { Component } from "react";

class MainContent extends Component {
  constructor(props){
    super(props);
    
    this.state = {
        gif: "",
        titulo: ""
        
    }
  }

 apiCall(url, consecuencia){
    
    fetch(url)
    .then( res => res.json())
    .then( data => consecuencia(data))
    .catch( err => console.log(err))
 }

 componentDidMount(){
    this.cargarGifNuevo();
  
    
 }
 cargarGifNuevo(){
  this.apiCall(`https://api.giphy.com/v1/gifs/random?api_key=JgBX53t3XW9H9LDIqaxADCALCpPTNtlo&tag=&rating=g`, this.mostrarGif);
 }

 mostrarGif = (data) => {
  this.setState({
    gif: data.data.images.original.url,
    titulo: data.data.title
  })
    console.log(data);
 }

 

 componentDidUpdate(){
    console.log('Me actualize!');
 }

  

  render() {

    return (

      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container">
          <a className="navbar-brand" href="/">GIPHY APP</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="nav ml-auto">
            <li className="nav-item">
              <button className="btn btn-success" onClick={ () => this.cargarGifNuevo}>Cargar random</button>
            </li>
          </ul>
        </div>
      </nav>
        <div className="row text-center">
          <div className="col-lg-3 col-md-6 mb-4">
            <div className="card h-100">
              <img className="card-img-top" src={this.state.gif} alt="" />
              <div className="card-body">
                <h4 className="card-title">{this.state.titulo}</h4>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 mb-4">
            <div className="card h-100">
              <img src={this.state.gif} alt=""></img>
              <div className="card-body">
                <h4 className="card-title">{this.state.titulo}</h4>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 mb-4">
            <div className="card h-100">
              <img className="card-img-top" src={this.state.gif} alt="" />
              <div className="card-body">
                <h4 className="card-title">{this.state.titulo}</h4>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 mb-4">
            <div className="card h-100">
              <img className="card-img-top" src={this.state.gif} alt="" />
              <div className="card-body">
                <h4 className="card-title">{this.state.titulo}</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default MainContent;
