import React from 'react';
import {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class Card extends Component {
  render(){
  return (
    <div className='col'>
      <div className="card" style={{width: '18rem', textAlign: 'center'}}>
      <button 
            className="btn btn-primary" 
            onClick={() => this.props.onIncrement(this.props.card)}
            >Aggiungi
            <span className='badge badge-light'>{this.props.card.quantità}</span>
            </button>
        <img className="card-img-top" src={this.props.immagine} alt="Card image cap" />
        <div className="card-body">
            <h5 className="card-title">{this.props.nome} Roll</h5>
            <p className="card-text">${this.props.prezzo}</p>
            <button 
            className="btn btn-outline-danger" 
            onClick={() => this.props.onDelete(this.props.card.id)}
            >Elimina</button>
        </div>
      </div>
    </div>
  )
  }
}

export default Card