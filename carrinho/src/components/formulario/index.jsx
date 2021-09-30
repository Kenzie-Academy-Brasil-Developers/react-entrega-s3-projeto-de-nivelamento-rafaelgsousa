import {useState} from "react"
import "./style.css"

function Formulario({setListaProdutos,listaProdutos}){

    const [codigo,setCodigo]=useState("")
    const [name,setName]=useState("")
    const [description,setDescription]=useState("")
    const [price,setPrice]=useState(0)
    const [discount,setDiscount]=useState(0)

    

    function addProduct(codigo,name,description,price,discount) {
        setListaProdutos([{code:codigo,name:name,description:description,price:price,discount:discount},...listaProdutos])
        setCodigo("")
        setName("")
        setDescription("")
        setPrice("")
        setDiscount("")
    }

    return (
        <div className="Formulario">
            <input type="text" placeholder="codigo" value={codigo} onChange={(e)=>setCodigo(e.target.value)}/>
            <input type="text" placeholder="name" value={name} onChange={(e)=>setName(e.target.value)}/>
            <input type="text" placeholder="description" value={description} onChange={(e)=>setDescription(e.target.value)}/>
            <input type="number" placeholder="price" value={price} onChange={(e)=>setPrice(e.target.value)}/>
            <input type="number" placeholder="discount" value={discount} onChange={(e)=>setDiscount(e.target.value)}/>
            <button onClick={()=>addProduct(codigo,name,description,price,discount)}>Cadastrar</button>
        </div>

    )
}

export default Formulario