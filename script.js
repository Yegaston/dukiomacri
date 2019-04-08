let trainedNet;

function encode(arg){
    return arg.split("").map(
        x => (x.charCodeAt(0)/255)
    )
}

function processTrainingData(data){
    return data.map(
        d => {
            return {
                input: encode(d.input),
                output: d.output
            }
        }
    )
}

function train(data){
    let net = new brain.NeuralNetwork();
    
    net.train(processTrainingData(data));
    trainedNet = net.toFunction();
    console.log("Finish Training");

}

function execute(input){
    let results = trainedNet(encode(input));
    let output;
    results.macri > results.duki ? output = "macri" : output = "duki";
    return output;
}

function process(e){
    

}   
train(trainingData);
document.getElementById('procesar').addEventListener('click', (e) => {
    e.preventDefault();
    const frase = document.getElementById('frase').value
    console.log("frase")
    document.getElementById('resultados').innerHTML = `La frase la dijo ${execute(frase)} ??`
});

console.log(execute(""));