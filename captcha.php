<?php
session_start();
if ($_POST["captcha"] == $_SESSION["captcha_code"]) {
        echo "ok";
}else{
        echo "wrong";
}
