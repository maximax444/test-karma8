
$('#fos form').validate({
    rules: {
        email: {
            required: true,
            email: true
        },
        name: {
            required: true,
            minlength: 5
        },
        text: {
            required: true,
            minlength: 25
        }
    },
    messages: {
        email: {
            required: "Поле email обязательно для заполнения",
        },
        name: {
            required: "Поле имя обязательно для заполнения",
            minlength: jQuery.validator.format("Длина имени должна быть больше 5-ти символов")
        },
        text: {
            required: "Поле имя обязательно для заполнения",
            minlength: jQuery.validator.format("Длина текста должна быть больше 25-ти символов")
        }
    },
    submitHandler: function () {
        $("#fos form").trigger("reset");
        $('.alert').show();
    }
});
