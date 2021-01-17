<?php
error_reporting(E_ALL);
ini_set('display_errors','On'); 
// Request selected language
$hl = (isset($_POST["hl"])) ? $_POST["hl"] : false;
if(!defined("L_LANG") || L_LANG == "L_LANG")
{
	if($hl) define("L_LANG", $hl);
	else define("L_LANG", "pl_PL");
}
$mydate = isset($_POST["date1"]) ? $_POST["date1"] : "";

$title = "Wakacje w Międzywodziu";
$script = '<script type="text/javascript" src="calendar/calendar.js">';
//$con = mysql_connect("localhost","promykowa","Tm6dKrNxGY83CpGc");
$keywords = 'międzywodzie morze wypoczynek wczasy oferta cena';
require("header.php");

?>




<head>
<link href="calendar/calendar.css" rel="stylesheet" type="text/css" />
<script language="javascript" src="calendar/calendar.js"></script>
</head>

<div id="centrecontainer">

<div id="outercontainer">
	
<?php require("menu.php"); ?>	

<div id="container">
<div id="containerleft">
	<h2>promyk.miedzywodzie.biz</h2>
</div>

<div id="containerright">

<h2>Oferta</h2>
<h3>Podane ceny są kwotami za osobę, za dobę:</h3>
<ul>
<li> 60zł za pokój 2-osobowy z łazienką, za osobę</li>
<li> 45zł za pokój 3,4-osobowy z łazienką, za osobę</li>
</ul>
<h3>Ceny poza sezonem za osobę, za dobę:</h3>
<ul>
<li>35zł za osobę, za dowolny pokój</li>
</ul>

<h4>Pobyt dla dzieci do 2 roku życia bezpłatny.</h4>
<h4>Wyższe stawki obowiązują w terminach <b>1 lipca - 20 sierpnia</b>.</h4>


 
 
<div id="callContainer"></div> 

<h4><p>Prosimy zapoznać się z <a href="images/regulamin.pdf">regulaminem Pensjonatu</a></p></h4>
<h4>Serdecznie zapraszamy!</h4>
		</div>
	</div>
<?php require('footer.php');?>
