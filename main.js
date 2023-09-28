$(document).ready(function() {

    $('#telefone').mask('(00) 00000-0000')

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },            
            mensagem: {
                required: true,
            },

        },
        messages: {
            nome: 'Por favor, insira o seu nome',
            mensagem: 'Por favor, insira a mensagem',
            email: 'Por favor, insira um e-mail válido',

        },
        submitHandler: function(form) {
            console.log(form),
            alert(`Mensagem enviada com sucesso!`),
            form.reset()
        },
    })
})