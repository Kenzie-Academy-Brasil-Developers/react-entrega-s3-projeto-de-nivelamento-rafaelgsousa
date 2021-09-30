import "./style.css"

function Carrinho({carrinho}){
    return (
        <div className="displaycarrinho">
            <p className="descri">Total: R$ {Math.round(carrinho.reduce((a,e)=>a+Number(e.price),0)*100)/100}</p>
            <p className="descri">Desconto: R$ {Math.round(carrinho.reduce((a,e)=>a+Number(e.discount),0)*100)/100}</p>
            <p className="descri">Carrinho:</p>
            <ul className="carrinho">
                {console.log("carrinho: ",carrinho)}
                {carrinho.map((e,i)=> 
                <li key={i} className="itenscarrinho">
                    <p className="codigo">{e.code}</p>
                    <h4>{e.name}</h4>
                    <p className="price">{Math.round(e.price*100)/100}</p>
                    <p className="discount">{Math.round(e.discount*100)/100}</p>
                </li>)}
            </ul>
        </div>
    )
}

export default Carrinho