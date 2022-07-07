<?php 
include("pdo.php");

if(isset($_POST["id"]) && $_POST["id"] == ""){
    $unos = $db->query("
    INSERT INTO eventi
    (naslov, datum)
    VALUES
    ('" . $_POST["naslov"] . "',
    '" . $_POST["datum"] . "')
    ");

    header("Location:event.php");
}

if(isset($_POST["id"]) && $_POST["id"] > 0){
    $upit = $db->query("
    UPDATE eventi SET
    naslov = '" . $_POST["naslov"] . "',
    datum = '" . $_POST["datum"] . "'
    WHERE id = " . $_POST["id"]
    );
    header("Location:eventi.php");
}

if(isset($_GET["brisanje"])){
    $upit = $db->query("DELETE FROM eventi WHERE id = " . $_GET["brisanje"]);
    header("Location:event.php");
}

?>