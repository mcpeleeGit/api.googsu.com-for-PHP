<?php
class dbconn extends PDO
{
    public function __construct()
    {
        parent::__construct('');
        $this->setAttribute( PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    }
}
?>