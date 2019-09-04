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
        <ul className="pagination justify-content-end">
          <li className="page-item">
            <a className="page-link" href="#">
              1-10 de 230
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              +
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
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
      <div className="row no-gutters">
            <div className="col-md-2 sm1 offset-md-2 offset-ms-1">
              <img src={logo} className="card-img" alt=""/>
            </div>
            <div className="col-md-6">
              <div className="card-body">
                <div className="card-body__contact">
                  <h5 className="card-title">Círculo de crédito S.A. de C.V.</h5>
                  <p className="card-text">Alejandra de los Santos Belanga.</p>
                </div>
                <div>
                  <p>Fecha de Registro</p>
                  <strong>24 Ene</strong>
                </div>
                <div>
                  <p><strong>150</strong></p>
                  <span>usuarios</span>
                </div>
                <div>
                  <p><strong>200</strong></p>
                  <span>publicaciones</span>
                </div>
                <div>
                  <p><strong>Ilimitado</strong></p>
                  <span>créditos</span>
                </div>
                  
              </div>
            </div>
          </div>
          <div className="row no-gutters">
            <div className="col-md-2 sm1 offset-md-2 offset-ms-1">
              <img src={logo} className="card-img" alt=""/>
            </div>
            <div className="col-md-6">
              <div className="card-body">
                <div className="card-body__contact">
                  <h5 className="card-title">Círculo de crédito S.A. de C.V.</h5>
                  <p className="card-text">Alejandra de los Santos Belanga.</p>
                </div>
                <div>
                  <p>Fecha de Registro</p>
                  <strong>24 Ene</strong>
                </div>
                <div>
                  <p><strong>150</strong></p>
                  <span>usuarios</span>
                </div>
                <div>
                  <p><strong>200</strong></p>
                  <span>publicaciones</span>
                </div>
                <div>
                  <p><strong>Ilimitado</strong></p>
                  <span>créditos</span>
                </div>
                  
              </div>
            </div>
          </div>
          <div className="row no-gutters">
            <div className="col-md-2 sm1 offset-md-2 offset-ms-1">
              <img src={logo} className="card-img" alt=""/>
            </div>
            <div className="col-md-6">
              <div className="card-body">
                <div className="card-body__contact">
                  <h5 className="card-title">Círculo de crédito S.A. de C.V.</h5>
                  <p className="card-text">Alejandra de los Santos Belanga.</p>
                </div>
                <div>
                  <p>Fecha de Registro</p>
                  <strong>24 Ene</strong>
                </div>
                <div>
                  <p><strong>150</strong></p>
                  <span>usuarios</span>
                </div>
                <div>
                  <p><strong>200</strong></p>
                  <span>publicaciones</span>
                </div>
                <div>
                  <p><strong>Ilimitado</strong></p>
                  <span>créditos</span>
                </div>
                  
              </div>
            </div>
          </div>
        </div>
      </div>

  );
    }
}

export default List;
