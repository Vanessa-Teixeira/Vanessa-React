import ComponentesProdutos from '../../Componentes/Produto/Produtos.jsx'
import {useState,useEffect} from 'react';
import {Container, Row} from 'react-bootstrap';



export default  function Produtos () {


    
const[produtos, setProdutos] = useState([]);

useEffect( async ()=>{
console.log(""); 
const url = "http://localhost/projeto%20react/Model/ProdutoJson.php/";
const resposta = await fetch(url);
setProdutos(await resposta.json());

}, []);
    



return (
    <Container>
        <Row>
        
        {produtos && produtos.map(item =>

        <ComponentesProdutos key={item.idprodutos} categoria ={item.categoria} descriçao = {item.descriçao} preco ={item.preço}
        precofinal ={item.preçofinal} imagem ={item.imagem} data_inclusao = {item.data_inclusao} />
        )}
        </Row>
    </Container>


);

}





