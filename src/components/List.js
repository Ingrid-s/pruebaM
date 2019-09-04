import React, { Component } from 'react';
import logo from "./images/circulo_credito_logo.jpeg";

class List extends Component  {
    state = { searchInput: '', alphabet: ''};
   
    onAlphabetClick = (e) => {
      this.setState({alphabet: e.target.value})
    }
    prepareAlphabets = () => {
      let result = [];
      for(let i=65; i<91; i++) {
        result.push(
          <button type="button" className="alphabet__button" key={i} onClick={this.onAlphabetClick} value={String.fromCharCode(i)} >{String.fromCharCode(i)}</button>
        )
      }
      return result;
    }
    render(){
  return (
    <div>
      <div className="header__directory">
        <h5 className="header__directory__title">Directorio de Empresas</h5>
        <button type="button" className="btn btn-info btn-sm">
          Agregar empresa
        </button>
      </div>
      <div className="header__directory__filters">
        <div className="header__directory__filters--left-container">
          <h5>Empresas</h5>
          <span className="badge badge-info">500</span>
        </div>
        <div>
          <strong>Ordenar por:</strong>
          <span className="order--By"> Empresa </span>
          <span className="order--By second"> Administrador</span>
        </div>
      </div>
      <nav aria-label="Page navigation example">
        <ul class="pagination justify-content-end">
          <li class="page-item">
            <a class="page-link" href="#">
              1-10 de 230
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              +
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              -
            </a>
          </li>
        </ul>
      </nav>
      <div className="header__directory__filters--alphabet" >
        <i className="fas fa-star"></i>
      
        {this.prepareAlphabets()}
      </div>
      
      <div>
        <div class="row no-gutters">
            <div class="col-md-4">
            
            <img src={logo} class="card-img" alt=""/>
            </div>
            <div class="col-md-8">
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
            </div>
            </div>
            </div>
        </div>
      </div>

  );
    }
}

export default List;
