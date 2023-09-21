var estado;
var op1;
var op2;
var resultado;
var operacao;

let calculadora = {
    numeroArray: new Array(),
    inicializacao: function () {
        estado = 'inicializacao';
        this.display();
    },
    adicao: function () {
        operacao = 'adicao';
        estado = 'operando2';
        this.numeroArray = [];
    },
    subtracao: function () {
        operacao = 'subtracao';
        estado = 'operando2';
        this.numeroArray = [];
    },
    divisao: function () {
        operacao = 'divisao';
        estado = 'operando2';
        this.numeroArray = [];
    },
    multiplicacao: function () {
        operacao = 'multiplicacao';
        estado = 'operando2';
        this.numeroArray = [];
    },
    ac: function () {
        this.inicializacao();
        this.numeroArray = [];
        op1 = [];
        op2 = [];
        console.log('apaguei'); 
        document.getElementById("op").innerText = "";
    },
    igual: function () {
        switch (operacao) {
            case 'adicao':
                resultado = op1 + op2;
                estado = 'resultado';
                this.display();
                break;
            case 'subtracao':
                resultado = op1 - op2;
                estado = 'resultado';
                this.display();
                break;
            case 'divisao':
                resultado = op1 / op2;
                estado = 'resultado';
                this.display();
                break;
            case 'multiplicacao':
                resultado = op1 * op2;
                estado = 'resultado';
                this.display();
                break;
        }
    },

    del: function () {
        this.numeroArray.pop();
        if (estado === 'operando1') {
            op1 = parseFloat(this.numeroArray.join(''));
        } else if (estado === 'operando2') {
            op2 = parseFloat(this.numeroArray.join(''));
        }
        this.display();
    },

    display: function () {
        switch (estado) {
            case 'inicializacao':
                document.getElementById("op").innerText = '';
                document.getElementById("resultado").innerText = '0';
                estado = 'operando1';
                if (this.numeroArray.length == 0) {
                    document.getElementById("resultado").innerText = '';
                    document.getElementById("op").innerText = '';
                }
                break;

            case 'operando1':
                document.getElementById("op").innerText = op1;
                if (this.numeroArray.length == 0) {
                    document.getElementById("resultado").innerText = '';
                    document.getElementById("op").innerText = '';
                }
                break;

            case 'operando2':
                document.getElementById("op").innerText = op1 + this.getOperacaoSimbolo() + op2;
                if (this.numeroArray.length == 0) {
                    document.getElementById("resultado").innerText = '';
                    document.getElementById("op").innerText = '';
                }

                break;

            case 'resultado':
                document.getElementById("resultado").innerText = op1 + this.getOperacaoSimbolo() + op2;
                document.getElementById("op").innerText = resultado;
                op1 = resultado;
                estado = 'operando1';
                console.log(op1);
                break;
        }

    },
    proximoNumero: function (digito) {
        if (this.numeroArray.length < 9) { // Verificar se o array tem menos de 6 dígitos (um milhão)
            switch (estado) {
                case 'operando1':
                    this.numeroArray.push(digito);
                    op1 = parseFloat(this.numeroArray.join(''));
                    this.display();
                    break;
                case 'operando2':
                    this.numeroArray.push(digito);
                    op2 = parseFloat(this.numeroArray.join(''));
                    this.display();
                    break;
            }
        }
    },
    getOperacaoSimbolo: function () {
        switch (operacao) {
            case 'adicao':
                return '+';
            case 'subtracao':
                return '-';
            case 'divisao':
                return '÷';
            case 'multiplicacao':
                return 'x';
            default:
                return '';
        }
    },
};

