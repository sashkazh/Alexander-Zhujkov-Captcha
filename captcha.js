$(function () {
    $(".btnRefresh").click(function () {
        $("#captcha_code").attr('src','captcha_code.php');
    });
    $(".btnAction").click(function () {
        var valid = true;
        if (!$("#captcha").val()) {
            $("#captcha-info").html("(required)");
            $("#captcha").css('background-color', '#FFFFDF');
            valid = false;
        }
        if (valid) {
            $.ajax({
                url: "captcha_code.php",
                data: 'captcha_code=' + $("#captcha").val(),
                type: "POST",
                success: function (data) {
                    alert("OK!")
                },
                error: function () {
                }
            });
        }
    });
});

