<?php
class LoginDAO {
    protected $pdo;

    public function __construct($pdo)
    {
        $this->pdo = $pdo;
    }

    public function validLogin($loginRequestVO){
        $sql = 'SELECT 
                    (CASE 
                        WHEN count(user_login) = 0 THEN false
                        ELSE true
                     END) AS result
                  FROM wp_users 
                 WHERE user_login= :email 
                   AND user_pass= :password
                ';
        $sth = ($this->pdo)->prepare($sql);
        $sth->bindValue(':email', $loginRequestVO->email, PDO::PARAM_STR);
        $sth->bindValue(':password', $loginRequestVO->password, PDO::PARAM_STR);
        $sth->execute();     
        $row = $sth->fetch();
        return $row['result'];
    }
}   
?>


