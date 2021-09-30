import './App.css';
import Formulario from './components/formulario';
import Display from './components/Display';
import {useState} from "react"
import Carrinho from './components/Carrinho';

function App() {

  const [listaProdutos, setListaProdutos] = useState([
    {
      code: 10,
      name: "Smart TV Led 50 Semp",
      description:
        "SK8300 4K HDR Android Wi-Fi 3 HDMI 2 USB Controle Remoto com atalhos Chromecast Integrado",
      price: 2299.99,
      discount: 190.99,
    },
    {
      code: 11,
      name: "Smartphone Samsung Galaxy A72 128GB",
      description:
        "4G Wi-Fi Tela 6.7 Dual Chip 6GB RAM Câmera Quádrupla + Selfie 32MP - Preto",
      price: 1988.4,
      discount: 87.89,
    },
    {
      code: 12,
      name: "Smartwatch Samsung Galaxy Watch Active",
      description:
        "4O Galaxy Watch Active é o smartwatch ideal para quem tem um estilo de vida ativo e saudável. Ele é leve, confortável e monitora diariamente suas atividades físicas, e os comportamentos de nível de stress e sono",
      price: 678.6,
      discount: 110.19,
    },
  ])

  const [carrinho,setCarrinho]=useState([])

  function addCart(e) {
    setCarrinho([e,...carrinho])
  }


  return (
    <div className="App">
      <header className="App-header">
        <Carrinho carrinho={carrinho}/>
        <Formulario setListaProdutos={setListaProdutos} listaProdutos={listaProdutos}/>
        <Display listaProdutos={listaProdutos} callback={addCart}/>
      </header>
    </div>
  );
}

export default App;
