//var é global e local

//const - fixa e de leitura
const nome = "Erica";
console.log(nome);

//let - BLOCO {} e global, local
//a diferença entre elas é o escopo
let n = "Erica";
console.log(n);

function func1(){
    console.log(n)
}

func1();

/*****/
//Param. opc - devem ser os últimos 
/*function soma(a,b=20){ 
    console.log(soma(a+b));
}

console.log(soma(10));
console.log(soma(10,70));

function sub(a,b=20, inverter=false){ 
    if(inverter){

    }else{
        console.log(a-b)
    }
}*/


/***** */
//JSON ENCURTADO
    var idade = 21;
    var pessoa = "Erica";
    var profissao = "Programadora"

    var menina = {
        profissao,
        pessoa,
        idade,
        cor_fav: "Preto",
        time_fut: "Atlético"
    }


    var other = {
        pessoa: "Maria",
        profissao: "Médica",
        idade: 34,
        ...menina//SPREAD
    }

    console.log(menina);
    console.log(other);


/***** */
//DESTRUCTURING
var a = {
    pessoa: "Maria",
    profissao: "Médica",
    idade: 34
}
//transforma pessoa em var
//forma reduzida de var pessoa = a.pessoa
var {pessoa} = a;

console.log(pessoa)


/***** */
//ARROW FUNCTIONS
function adicao(a,b){
    console.log(a,b)
}

var mult = (a,b)=>{
    console.log(a*b)
}

var mult2 = a => console.log(a*1)



/***** */
//filter
//forEach

//find - único registro dentro de array

var maria = {
    nome: "Maria Santos",
    empresa: "FBS"
}

var katia = {
    nome: "Katia Soares",
    empresa: "FBS"
}

var larissa = {
    nome: "Larissa Carvalho",
    empresa: "FBS"
}

var users = [maria, katia, larissa];
var research = users.find(user => user.nome ==="Maria Santos");

console.log(research);


/***** */
//TEMPLATE LITERALS
var person = "Erica Monteiro";
var info = "Programadora"

console.log(`Ela se chama ${person} e ela é ${info}`);

