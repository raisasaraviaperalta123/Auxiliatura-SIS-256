<?php

$n=$_POST['n'];

$suma=0;
foreach($_POST['valor'] as $valor)
{
    $suma+=$valor;
}
echo $suma;

