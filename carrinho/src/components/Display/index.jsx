import "./style.css"

function Display({listaProdutos,callback}){
    return (
        <ul className="estoque">
            {listaProdutos.map((e,i)=>
            <li key={i} className="itensestoque">
                <p className="codigo">{e.code}</p>
                <h4>{e.name}</h4>
                <p className="price">{e.price}</p>
                <p className="discount">{e.discount}</p>
                <button onClick={()=>callback(e)}>Adicionar</button>
            </li>)}
        </ul>
    )
}

export default Display