<?php
include("template_zaglavlje_korisnicko.html");
include("pdo.php");


if(isset($_POST["submit"])){
    $query=$db->prepare("
    SELECT * FROM admin WHERE 
    username = :username
     AND pass = :pass
    "); 
    $podaci = array(
        "username" => $_POST["username"],
        "pass" => $_POST["pass"]
    ); 
    $query -> execute($podaci);
    $rezultati = $query->fetchAll();

    if(count($rezultati) > 0){
        session_start();
        $_SESSION["ulogiran"] = true;
        header("Location:tekstovi.php");
        exit;
    }else{
        echo  "Pogrešni pristupni podaci!";
    }

}

?>




<?php
include("template_podnozje.html");
?>
