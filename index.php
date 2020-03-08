<?php include 'dbConn.php'; ?>
<html>
    <head>
        <title>Welcome</title>
        <meta charset="utf-8"/>
    </head>
    <body>
        welcome
        <?php
            $sql = "SHOW ENGINES";
            $result = $pdo->query($sql);
            while($row = $result->fetch()){
                echo '<br/>'.$row['Comment']; 
            }
        ?>
        <?php
            $sql = "
            insert into `wp_users` (user_login,user_pass,user_nicename,user_email,user_url)
            values('test','test','test','test','test')
            ";
            $result = $pdo->exec($sql);

        ?>
        <?php
            $sql = "select * from wp_users";
            $result = $pdo->query($sql);
            while($row = $result->fetch()){
                echo '<br/>'.$row['user_login']; 
            }
        ?>
        <?php
            $requestParam = $_GET['name'];
            $requestParam2 = $_GET['encode'];
            $intValue = 90;
            $stringValue = "string 사용 시, 원따옴표와 쌍따옴표의 
                            구분을 안두는데 char 자료형은 어떻게 핸들링할까?";
            $arrayValue = [1,'자료형이','없으니', 2, '배열은 HashMap의 느낌', '<br/>'];
            $arrayValue2 = [2=>'배열',4=>'할당',8=>'<br/>'];
            $arrayValue3 = ['test'=>'key로배열','case'=>'할당','value'=>'<br/>'];

            echo rand(1,10);
            echo '<br/><i>string 문자열 출력 
                html 태그를 작성하면 인터프리터 변환된 출력 string을 
                <b>html</b>로 인식하므로 html구문이라 생각하면됨.</i><br/>';
            echo $intValue . '<br/>연결 연사자는 쩜. 이다.' . $stringValue . '<br/>';
            echo $arrayValue[1].$arrayValue[2].$arrayValue[4].$arrayValue[5];
            echo $arrayValue2[2].$arrayValue2[4].$arrayValue2[8];
            echo $arrayValue3['test'].$arrayValue3['case'].$arrayValue3['value'];
            echo $requestParam;
            echo htmlspecialchars($requestParam2, ENT_QUOTES, 'UTF-8');

            if(true){
                echo "if, for, while문의 사용 및 비교 연산자는 
                        여타 언어(java, c, c#, javascript)와 동일<br/>";
                echo "변수 scope도 여타 언어와 동일 <br/>";
            }
            for($i=1; $i<10; $i++){
                echo $i;
            } echo "<br/>";
            $j = 5;
            while($j>0){
                $j--;
                echo $j;
            } echo "<br/>";
            
            $k = 5;
            do{
                $k++;
                echo $k;
            } while($k<10);
            echo "<br/>";

            if(!isset($_POST['encode2'])){
                echo "isset으로 객체가 세팅되었는지 체크한다.";
            }
        ?>


        <?php 
            echo __DIR__."<br/>";
            include 'footer.php';          
            include 'D:\PHP_Project\onlyPHP\footer.php';        
        ?>
    </body>
</html>