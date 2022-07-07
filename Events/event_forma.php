<?php
include("event.html");
include("pdo.php");



if(isset($_GET["id"]) && $_GET["id"] > 0){
	$upit = $db->query("SELECT * FROM eventi WHERE id =". $_GET["id"]);
	$eventi = $upit->fetchAll();
	$id = $_GET["id"];
	$naslov = $eventi[0]["naslov"];
	$datum = $eventi[0]["datum"];
}else{
	$id = "";
	$naslov = "";
	$datum = "";

}
?>
<br>
<br>
<br>
<h2>Create an Event</h2>
<div class="container-form">
  <div class="row">
    <div class="col">
      
    </div>
    <div class="col-6">
	<form method="post" action="eventi_sql.php">
<input type="hidden" name="id" value="<?php echo $id;?>"> 
Naslov teksta: <input type="text" name="naslov" value="<?php echo $naslov;?>"><br><br>
Godina objave: <input type="date" name="datum" value="<?php echo $datum;?>"><br><br>


<input type="submit" name="submit" value="Objavi" class="btn btn-light">


</form>
    </div>
    <div class="col">
    </div>
  </div>



