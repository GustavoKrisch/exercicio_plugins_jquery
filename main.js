$(document).ready(function() {
    $('#cpf').mask('000.000.000-00', { reverse: true });
    $('#cep').mask('00000-000');
    $('#telefone').mask('(00) 00000-0000');
    $('#nome').mask('A', {
        translation: {
            'A': { pattern: /[a-zA-Z\s]/, recursive: true }
        },
        placeholder: ' '

        
    });

    $('form').validate({
        rules: {
            nome: {
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
            endereco: {
                required: true
            },
            cep: {
                required: true
            }
        },
        messages: {
            nome: 'Por favor, digite seu nome',
            email: 'Por favor, digite um email válido',
            telefone: 'Por favor, digite seu telefone',
            cpf: 'Por favor, digite um CPF válido',
            endereco: 'Por favor, digite seu endereço',
            cep: 'Por favor, digite um CEP válido'
        }
    });


    $('#cadastro-form').submit(function(e) {
        e.preventDefault();

        $('#cadastro-form')[0].reset();
    });
});