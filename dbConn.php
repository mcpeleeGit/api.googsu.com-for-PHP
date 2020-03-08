
<?php
    try{
        $pdo = new PDO('mysql:host=localhost;dbname=homepage','root','mcse98go');
        echo 'db connection complete';
    }
    catch(PDOExcpetion $e){
        echo 'db connection fail';
    }
    
?>
