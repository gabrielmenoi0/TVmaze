<php

$conexao = mysqli_connect("localhost", "root", "etec");
if(!$conexao) {
    die("Erro ao conectar ao banco de dados " .
            mysqli_connect_errno() . "<br>" .  
            mysqli_connect_error());
    }
if(!mysqli_select_db ($conexao, "agenda"))
    {
        die("O bancod e dados nao existe");
    }
echo "Conectado com o bando de dados.  " . mysqli_info($conexao);
mysqli_close($conexao);
?>