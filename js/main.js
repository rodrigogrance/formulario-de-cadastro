$(document).ready(function(){

    $('#telefone').mask('(00) 00000-0000')
    $('#cpf').mask('000.000.000-00')
    $('#cep').mask('00000-000')

    $('form').validate({
        rules: {
            nomeCompleto: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            cpf: {
                required: true
            },
            enderecoCompleto: {
                required:true
            },
            cep: {
                required: true
            }
        },
        messages: {
            nomeCompleto: 'Por favor, insira seu nome completo',
            email:'Por favor, insira seu e-mail',
            telefone: 'Por favor, insira seu telefone',
            cpf: 'Por favor, insira seu CPF',
            enderecoCompleto: 'Por favor, insira seu endereço de residência',
            cep: 'Por favor, insira seu CEP'
        }
    })
})