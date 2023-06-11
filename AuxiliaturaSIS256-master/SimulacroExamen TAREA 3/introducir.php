<?php
include('parcial.html');
?>
<!DOCTYPE html>
<html>
<head>
    <title>Introducir</title>
    <script src="script.js"></script>

</head>
<body>
    <?php
    
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $n = $_POST["numero_cuadros"];
        echo "Número de cuadros introducidos: " . $n;
    }
    ?>
    <br>
    <form id="form">
        <?php
        for ($i = 0; $i < $n; $i++) {
            echo "<input type='number' name='valor[]'><br>";
        }
        ?>
        <button type="button" onclick="calcular()">Calcular</button>
        <script>
    form=document.getElemenetById("form").value;
    document.getElementById("resultado").innerHTML = form;
</script>
    </form>
    <br>

    <script>
    function calcular() {
        var valores = document.getElementsByName("valor[]");
        var suma = 0;
        for (var i = 0; i < valores.length; i++) {
            suma += parseInt(valores[i].value);
        }
        document.getElementById("resultado").innerHTML = "Resultado: " + suma;
    }
    </script>
</body>
</html>