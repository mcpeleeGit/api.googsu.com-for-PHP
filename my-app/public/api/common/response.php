<?php
class Response {  
    public static function jsonheader(){
        header('Access-Control-Allow-Origin: *, Content-Type: application/json; charset=UTF-8');
    }

    public static function jsonRequestParamError(){
        echo json_encode(array('result_code'=>200, 'result'=>'fail', 'message'=>'no param'));
    }    
}
?>