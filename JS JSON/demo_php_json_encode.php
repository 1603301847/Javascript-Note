<?php
$myObj->name = "Bill Gates";
$myObj->age = 62;
$myObj->city = "Seattle";

$myJSON = json_encode($myObj);

echo $myJSON;
?>