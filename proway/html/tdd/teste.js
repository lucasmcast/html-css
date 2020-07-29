const controler = new CalculatorController();
const soma = controler.soma

function testSoma(){
    let a = Math.floor(Math.random() * 10);
    let b = Math.floor(Math.random() * 10);
    let esperado = a + b;
    let result = soma(a, b);
    if (esperado === result){
        console.log("Passou")
    }else{
        console.log("Não Passou")
    }
    console.log(a + " + "+ b);
    console.log("esperado: " + esperado);
    console.log("result: "+ result);
}

function testDisisao(){

}

function testMultiplicacao(){

}

function testSubtracao() {
    
}

testSoma()