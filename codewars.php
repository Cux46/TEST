<?php
function past($h, $m, $s) {
  if ($h >= 0 && $h <= 23 && $m >= 0 && $m <= 60 && $s >= 0 && $s <= 60) {
    $ms = ($h * 3600000) + ($m * 60000) + ($s * 1000);
  }
  echo $ms;
}

past(0,1,1);