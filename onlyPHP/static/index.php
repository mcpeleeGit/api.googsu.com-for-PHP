<?php
$request = $_SERVER['REQUEST_URI'];
switch ($request) {
    case '/' :
        require __DIR__ . '/index.html';
        break;
    case '/api/weatherforecast' :
        require __DIR__ . '/api/weatherforecast.php';
        break;        
    case '/api/customer/login' :
        require __DIR__ . '/api/customer/login.php';
        break;           
    default:
        require __DIR__ . '/index.html';
        break;
}
?>