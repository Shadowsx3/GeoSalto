<?php
$file = 'categorias.txt';
$contents = file_get_contents($file);
$lines = explode("\n", $contents); // this is your array of words

echo json_encode($lines);
