<?php
class LoginService extends service {  
    public function __construct($isDbCon = 'N')
    {
        parent::__construct($isDbCon);
    }

    public function excuteLogin($LoginRequestDTO){

        $sql = 'SELECT count(user_login) AS cnt FROM wp_users ' ;

        $result = ($this->pdo)->query($sql);
        $cnt = 0;
        while($row = $result->fetch()){
        $cnt = $row['cnt']; 
        }
        if($cnt == 0){
        echo json_encode(array('result_code'=>200, 'result'=>'fail', 'message'=>'no account'));
        }
        else{
        echo json_encode(array('result_code'=>200, 'result'=>'success'));
        }     
    }
}
?>