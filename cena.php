<?php
error_reporting(0);

$time = '00:00:00';

$ranges[0] = strtotime("2015-05-01 $time");
$ranges[1] = strtotime("2015-07-01 $time");
$ranges[2] = strtotime("2015-07-18 $time");
$ranges[3] = strtotime("2015-08-17 $time");
$ranges[4] = strtotime("2015-08-24 $time");

$rate[0] = 160;
$rate[1] = 250;
$rate[2] = 270;
$rate[3] = 250;
$rate[4] = 160;

$perPerson[0]['from'] = strtotime("2015-05-01 $time");
$perPerson[0]['to'] = strtotime("2015-07-01 $time");

$perPerson[1]['from'] = strtotime("2015-07-02 $time");
$perPerson[1]['to'] = strtotime("2015-07-18 $time");

$perPerson[2]['from'] = strtotime("2015-07-19 $time");
$perPerson[2]['to'] = strtotime("2015-08-17 $time");

$perPerson[3]['from'] = strtotime("2015-08-18 $time");
$perPerson[3]['to'] = strtotime("2015-08-24 $time");

$perPerson[4]['from'] = strtotime("2015-08-25 $time");
$perPerson[4]['to'] = strtotime("2015-08-31 $time");

$from = $_GET['od'];
$to = $_GET['do'];


/*
$from = "29.06";
$to = "01.10";
*/
//$fromDate = DateTime::createFromFormat('d.m.Y', $from.'.2011');
$fromDate = new DateTime($from . '.2015');
if (!$fromDate) {
    echo "Błędna data \"od\"";
    die();
}
$fromDate->setTime(0, 0);
$fromDate = strtotime($fromDate->format("Y-m-d H:i:s"));


$toDate = new DateTime($to . '.2015');
if (!$toDate) {
    echo "Błędna data \"do\"";
    die();
}
$toDate->setTime(0, 0);
$toDate = strtotime($toDate->format("Y-m-d H:i:s"));

//check if not too early
if ($fromDate < $ranges[0]) {
    echo "Proszę wybrać późniejszy termin \"od\".";
    die();
}

//check if not too late
if ($toDate > end($ranges)) {
    echo "Proszę wybrać wcześniejszy termin \"do\".";
    die();
}

//check if not too late
if ($toDate < $fromDate) {
    echo "Proszę wybrać termin \"od\" wcześniej niż \"do\".";
    die();
}


$interval = $toDate - $fromDate;

//number of nights in each range
$days = array();
$start = $fromDate;
//var_dump($fromDate); die();
for ($i = 0; $i < count($ranges); $i++) {
    if ($start >= $ranges[$i] && $start < $ranges[$i + 1]) {
        //end is either toDate or end of the curent range - whatever smaller
        $end = $toDate;
        if ($ranges[$i + 1] < $toDate) {
            $end = $ranges[$i + 1];
        }
        $days[$i] = round(($end - $start) / 60 / 60 / 24);
        $start = $ranges[$i + 1];
        if ($start > $toDate) break;
    }
}

$interval = $toDate - $fromDate;

$sum = 0;
$result = "";
$strDays = "(";
$prices = array();
foreach ($days as $k => $day) {
    $strDays .= $rate[$k] * $day . "+";
    $sum += $rate[$k] * $day;
    $prices[$rate[$k]] += $day;
}
$strDays = rtrim($strDays, '+') . ")";
$strPrices = "";
foreach ($prices as $price => $number) {
    if ($number == 1) {
        $strPrice .= "1 nocleg ";
    } elseif ($number > 1 && $number < 5) {
        $strPrice .= "$number noclegi ";
    } else {
        $strPrice .= "$number noclegów ";
    }
    $strPrice .= "w cenie ${price}zł; ";
}

echo "Suma: ${sum}zł ($strPrice)<br/>";
echo "Ilość noclegów: " . round($interval / 60 / 60 / 24) . "<br/>";

//check if dates overlap with any per person time periods
foreach ($perPerson as $person) {
    if (($fromDate > $person['from'] && $fromDate < $person['to']) || ($toDate > $person['from'] && $toDate < $person['to']) || ($fromDate < $person['from'] && $toDate > $person['to'])) {
        echo "Uwaga - w okresie " . date("Y-m-d", $person['from']) . " - " . date("Y-m-d", $person['to']) . " możliwa jest rezerwacja domku od osoby w cenie 35 zł/osobę.<br/>";
    }
}
