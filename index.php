<html>
    <head>
        <title>Kek</title>
        <link href="css/bootstrap.min.css" rel="stylesheet">
        <script src="js/jquery.min.js"></script>
        <script src="captcha.js"></script>
    </head>

    <body>

    <div class="container">
        <div>
            <label>Captcha</label>
            <span id="captcha-info" class="info"></span><br/>
            <input type="text" name="captcha" id="captcha"><br>
        </div>
        <div>
            <img id="captcha_code" src="captcha_code.php" />
            <button name="submit" class="btnRefresh">Refresh Captcha</button>
        </div>
        <div>
            <button name="submit" class="btnAction">Check</button>
        </div>
    </div>

    </body>
</html>