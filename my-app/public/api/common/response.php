<?php
class Response {  
    public static function jsonheader(){
        header('Access-Control-Allow-Origin: *, Content-Type: application/json; charset=UTF-8');
    }
}
?>