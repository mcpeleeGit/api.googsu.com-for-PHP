<?php
class Route {  
    public static function init($reqUri){
        if(Route::isAPI($reqUri)){
            Route::routeApi($reqUri);
        }
        else{
            Route::routeReact($reqUri);
        }
    }

    private static function isAPI($reqUri){
        if(strlen($reqUri)<4) return false;
        return substr($reqUri,0,4) == '/api' ? true : false;
    }        

    private static function routeApi($reqUri){
        
        require('api/common/constant.php');
        require('api/common/service.php');
        require('api/common/response.php');

        $url = preg_split('#/#', $reqUri);
        require($url[1].'/'.$url[2].'/controller/'.$url[3].'Controller.php');       

        Response::jsonheader();

        $ctr_name = $url[3].'Controller';
        $ctr = new $ctr_name();
        if( isset( $url[4] )){           
            $ctr->{$url[4]}();
        }
        else{
            $ctr->defaultMethod();
        }
    }

    private static function routeReact($reqUri){
        require('index.html');
    }    
}
?>