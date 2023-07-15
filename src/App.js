import { Component } from 'react';
import api from './api';
import './App.css';

class App extends Component {

  state = {
    produtos: [],
  }

  async componentDidMount() {
    const response = await api.get('');
    this.setState({
      produtos: response.data
    });

  }

  render() {

    const { produtos } = this.state;
    return (

      <div className='produtos'>
        <h1>Produtos da Loja</h1>
        {console.log(produtos)}
        {produtos.map(produtos => (

   
            <li className='bloco'>
              <strong>Categoria: </strong>
              {produtos.category}
              <br/>
              <strong>Produto: </strong>
              {produtos.title}
              <br />
              <strong>Descrição: </strong>
              {produtos.description}
              <br />
              <strong> Valor: R$</strong>
              {produtos.price}
              <br />
              <img src={produtos.image} width="200" height="200"></img>
              <br />
            </li>
         
        ))}
      </div>
    );
  };
};

export default App;
