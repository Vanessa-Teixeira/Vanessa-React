import './produtos.css';



export default function ComponenteProdutos(props){

    return(
        
        // <div>Componente produtos</div>
        <div>

    <figure className={props.categoria  }>
    <img src={require(`./imagens/${props.imagem}`).default} alt="Imagem de Produtos" width="150" height="150" aling="center"/> 
    <div>  
        <p className="nome-prod">
            {props.descriçao}
        </p>
        <p className="preco-prod">
            R$ {props.preco}
        </p>
        <p className="precofinal-prod">
            R$ {props.precofinal}
        </p>
    </div>
    </figure>
    </div>

    );
}
