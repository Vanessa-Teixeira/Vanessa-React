<?php
 
 include_once("./ClasseConexao.php"); 

class Produto
{
    public $idprodutos;
    public $categoria;
    public $descricao;
    public $preço;
    public $preçofinal;
    public $imagem;
    public $data_inclusao;

    public static function getAll()
    {
        $connection = Connection::conectaDb();

        $stmt = $connection->query("SELECT * FROM produtos"); 
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

}