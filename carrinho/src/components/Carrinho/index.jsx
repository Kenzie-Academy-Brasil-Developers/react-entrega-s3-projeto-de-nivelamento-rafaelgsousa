import "./style.css"

function Carrinho({carrinho}){
    return (
        <div className="displaycarrinho">
            <p className="descri">Total: R$ {carrinho.reduce((a,e)=>a+Number(e.price),0)}</p>
            <p className="descri">Desconto: R$ {carrinho.reduce((a,e)=>a+Number(e.discount),0)}</p>
            <p className="descri">Carrinho:</p>
            <ul className="carrinho">
                {console.log("carrinho: ",carrinho)}
                {carrinho.map((e,i)=> 
                <li key={i} className="itenscarrinho">
                    <p className="codigo">{e.code}</p>
                    <h4>{e.name}</h4>
                    <p className="price">{e.price}</p>
                    <p className="discount">{e.discount}</p>
                </li>)}
            </ul>
        </div>
    )
}

export default Carrinho