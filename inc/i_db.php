<?php
// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * //
// Set up dB connection
// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * //

/*
$DB_NAME 		= 'myiosk_db';
$DB_USER 		= 'myiosk_user';
$DB_PASSWORD 	= 'DMwaElNFsbw2Z1sm';
$DB_HOST 		= 'localhost';

$opt = [
    PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    PDO::ATTR_EMULATE_PREPARES   => false,
];

try {
	
    $conn = new PDO("mysql:host=$DB_HOST;dbname=$DB_NAME", $DB_USER, $DB_PASSWORD, $opt);
    
} catch (PDOException $e) {
	
    echo 'ERROR: ' . $e->getMessage() . '<br/>';
    //die();
}
*/

// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * //