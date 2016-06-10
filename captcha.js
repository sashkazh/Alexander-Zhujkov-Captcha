$(function () {
    $(".btnRefresh").click(function () {
        $("#captcha_code").attr('src','captcha_code.php');
    });
    $(".btnAction").click(function () {
        var captcha = $("#captcha").val();
        var valid = true;
        if (!captcha) {
            $("#captcha-info").html("(required)");
            $("#captcha").css('background-color', '#FFFFDF');
            valid = false;
        }
        if (valid) {
            $.ajax({
                url: "captcha.php",
                data: 'captcha='+captcha,
                type: "POST",
                success: function (msg){
                    if(msg == "wrong") {
                        alert("GFU!");

                    } else if(msg == "ok"){
                        alert("NICE!");
                    }
                }
            });
        }
    });
});

