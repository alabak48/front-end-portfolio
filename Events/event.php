
<?php
include("event.html");
include("pdo.php");

$queryText = $db->query("SELECT * FROM eventi ORDER BY datum asc");
$arrayText = $queryText->fetchAll();
?>
<br>
<p>The Events<p>
<a class="btn btn-light" type="button" href="event_forma.php">New Event</a></button>

<?php
foreach ($arrayText as $keyText) {
?>
 <br>
<br>
<div class="row">
    
  <div class="col-sm-8">
  <div class="alert alert-dark" role="alert">
  <h3><?php echo $keyText["naslov"];?></h3>
    <h4><?php echo $keyText["datum"];?></h4>
</div>  
  
  
                
</div>
  <div class="col-sm-4">
  
  <a href="event_forma.php?id=<?php echo $keyText["id"];?>" type="button" class="btn btn-primary">Event Update</a>
  <br>
  <br>
    <a href="eventi_sql.php?brisanje=<?php echo $keyText["id"];?>" type="button" class="btn btn-danger">Delete event</a>
    <br>
    
  </div>
  
</div>







<?php
}
?>
<br>
<br>
<div class="row">
  <div class="col-12 col-md-8">
  <a href="eventi.php" type="button" class="btn btn-light">Back</a>
  </div>

</div>

