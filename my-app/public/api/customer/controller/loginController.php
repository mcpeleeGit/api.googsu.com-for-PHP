<?php
    header('Content-Type: application/json; charset=UTF-8');
?>
<?php
    try{
        $pdo = new PDO('');
    }
    catch(PDOExcpetion $e){
        echo 'db connection fail';
        return;
    }

     $json = file_get_contents('php://input');
     $data = json_decode($json);
     
    if(!isset($data->{'email'}) || !isset($data->{'password'})){
        echo json_encode(array('result_code'=>200, 'result'=>'fail', 'message'=>'no param'));
        return;
    }


    $email = $data->{'email'};
    $password = $data->{'password'};

    $sql = 'SELECT count(user_login) AS cnt FROM wp_users ' ;
    
    $result = $pdo->query($sql);
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
    
?>


