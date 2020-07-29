class CalculatorModel{
    constructor(){
        this.container = document.getElementById("calculator");
        this.corpo = document.createElement("div");
        this.calc = this.createCalculator();
    }

    calculatorNumbers(){
        let num_array = ["1","2","3","+","4","5","6","-","7","8","9"];
        return num_array;
    }

    createCalculator(){
        let teclas = this.calculatorNumbers();
        for(let i = 0; i < teclas.length; i++){
            let tecla = document.createElement('div');
            tecla.classList.add("tecla");   
            tecla.innerHTML = teclas[i];
            this.corpo.appendChild(tecla);
            
        }
        this.corpo.classList.add("calc")
        console.log(this.corpo)
        this.container.appendChild(this.corpo);
    }
}

new CalculatorModel();