<?php
include("event.html");
include("pdo.php");

$queryText = $db->query("SELECT * FROM eventi ORDER BY datum asc");
$arrayText = $queryText->fetchAll();
?>
<br>
<p>The Events<p>
<a class="btn btn-light" type="button" href="event.php">Update</a></button>
<?php
foreach ($arrayText as $keyText) {
?>
 <br>

<div class="row">
  <div class="col-6 col-md-4"></div>
  <div class="col-6 col-md-4"><div class="alert alert-dark" role="alert">
  <h3><?php echo $keyText["naslov"];?></h3>
    <h4>Datum događaja: <?php echo $keyText["datum_dogadjaja"];?></h4>
    <h6>Datum objave: <?php echo $keyText["datum"];?></h6>
</div>  </div>
  <div class="col-6 col-md-4"></div>
</div>



<?php
}
?>
<br>
<br>

