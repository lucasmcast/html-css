class CalculatorController{

    constructor(){
        this.createEventListenerTeclas()
        this.memory = "";
    }

    soma(numbers){
        let display = document.getElementById("display");
        let result = parseInt(numbers[0]) + parseInt(numbers[1]);
        display.value = ""
        display.value = result
    }

    divisao(){

    }

    multiplicacao(){

    }

    subtracao(numbers){
        let display = document.getElementById("display");
        let result = parseInt(numbers[0]) - parseInt(numbers[1]);
        display.value = ""
        display.value = result
    }
    

    validaOperacao(stringOperacao) {
        let indexOperator = stringOperacao.indexOf("+");
        
        if (indexOperator > -1){
            let numbers = stringOperacao.split("+");
            this.soma(numbers);
            return;
        }

        indexOperator = stringOperacao.indexOf("-");

        if (indexOperator > -1){
            let numbers = stringOperacao.split("-");
            this.subtracao(numbers);
            return;
        }
    }

    clickBotao(e){
        let display = document.getElementById("display");
        let tecla = e.target.innerHTML;
        display.value = display.value + tecla;

        if (tecla === "="){
            let contentDisplay = display.value;
            this.validaOperacao(contentDisplay);   
            console.log(resultado)
            display.value = ""
        }
    }
    createEventListenerTeclas(){
        let teclas = document.getElementsByClassName("tecla");
        for(let i = 0; i < teclas.length; i++ ){
            teclas[i].addEventListener('click', this.clickBotao);
        }
    }
}

new CalculatorController()  