$(document).ready(function () {

    $('#welcomeBtn').click(function () {

        var message = "Welcome"
        var cssProperties = {
            fontSize: "50px",
            color: 'red',
            fontWeight: "900",
            marginTop: '50px',
            // marginLeft: '500px'
        }

        // $(document).css('background', 'red')
        $('#welcomeMsg').text(message)
        $('#welcomeMsg').css(cssProperties)

    })

    // ----------------

    $('.color-change-input').click(function () {
        $(this).addClass('yellow-bg');
    });

    // ----------------

    $('#displayButton').click(function () {
        var newText = $("#textBox").val();
        $(this).text(newText);
    });

    // ----------------

    $('#toggleBtn').click(function () {
        $('#toggle').toggle()
    })


})