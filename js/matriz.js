//Matrizes para a Soma e Subtração
var matriz1 = new Array();
var matriz2 = new Array();

//Coloca valores aleatorios nas matrizes 1 e 2
for (var i = 0; i < 3; i++) {
    matriz1.push([]);
    for (var j = 0; j < 3; j++) {
        matriz1[i][j] = (parseInt(Math.random() * 10) + 1);
    }
}

for (var i = 0; i < 3; i++) {
    matriz2.push([]);
    for (var j = 0; j < 3; j++) {
        matriz2[i][j] = (parseInt(Math.random() * 10) + 1);
    }
}

//-----------------------------------COMEÇO DA SOMA DAS MATRIZES  1 e 2----------------------------------------------

//criando a tabela onde aparecerá os valores da matriz1

document.write("<table class='tabelas' border=4>");
document.write("<thead> Matriz 1: </thead>")
for (i = 0; i < 3; i++) {
    var linha = '<tr>';
    for (x = 0; x < 3; x++) {
        linha = linha + "<td>" + matriz1[i][x] + "</td>";
    }
    linha = linha + "</tr>"
    document.write(linha);

}

//criando a tabela onde aparecerá os valores da matriz2
document.write("<table class='tabelas' border=4 >");
document.write("<br>")
document.write("<thead> Matriz 2: </thead>")
document.write; for (i = 0; i < 3; i++) {
    var linha = '<tr>';
    for (x = 0; x < 3; x++) {
        linha = linha + "<td>" + matriz2[i][x] + "</td>";
    }
    linha = linha + "</tr>"
    document.write(linha);
}




//criando a matriz onde irá sair o resultado e zerando seus valores até entrar os valores somados
var SomaMatriz = new Array();

SomaMatriz.push([0, 0, 0]);
SomaMatriz.push([0, 0, 0]);
SomaMatriz.push([0, 0, 0]);

//calculo de soma 
for (var i = 0; i < matriz1.length; i++) {
    for (var j = 0; j < matriz1[i].length; j++) {
        SomaMatriz[i][j] = (matriz1[i][j] + matriz2[i][j]);
    }
}

//criação da tabela da Matriz Resultante usando laço for e colocando os valores somados dentro da tabela 
document.write("<table class='tabelas' border=4 >");
document.write("<br>");
document.write("<thead>Resultado da Soma das matrizes 1 e 2: </thead>");
for (i = 0; i < SomaMatriz.length; i++) {
    var linha = '<tr>';
    for (x = 0; x < SomaMatriz[i].length; x++) {
        linha = linha + "<td>" + SomaMatriz[i][x] + "</td>";
    }
    linha = linha + "</tr>"
    document.write(linha);
}


//------------------------------------FIM DA SOMA DAS MATRIZES 1 e 2------------------------------------------------

//------------------------------------COMEÇO DA SUBTRAÇÃO DAS MATRIZES 1 e 2-------------------------------------------------

//nessa parte continuei com as mesmas matrizes usadas para somar os valores

//criando a matriz onde irá sair o resultado e zerando seus valores até entrar os valores subtraidos
var SubMatriz = new Array();

SubMatriz.push([0, 0, 0]);
SubMatriz.push([0, 0, 0]);
SubMatriz.push([0, 0, 0]);

//calculo de subtração 
for (var i = 0; i < matriz1.length; i++) {
    for (var j = 0; j < matriz1[0].length; j++) {
        SubMatriz[i][j] = matriz1[i][j] - matriz2[i][j];
    }
}

//criação da tabela da Matriz Resultante usando laço for e colocando os valores somados dentro da tabela 
document.write("<table class='tabelas' border=4 >");
document.write("<br>");
document.write("<thead> Resultado da Subtração das matrizes 1 e 2: </thead>");
for (i = 0; i < SubMatriz.length; i++) {
    var linha = '<tr>';
    for (k = 0; k < SubMatriz[i].length; k++) {
        linha = linha + "<td>" + SubMatriz[i][k] + "</td>";
    }
    linha = linha + "</tr>"
    document.write(linha);
}

//------------------------------FIM DA SUBTRAÇÃO DAS MATRIZES 1 e 2------------------------------------------------------------

//-----------------------------COMEÇO DA MULTIPLICAÇÃO ESCALAR DE MATRIZES------------------------------------------------------

var matriz3 = new Array();
var numero;
var resultadoMatriz = new Array();


//criando a matriz 3 e colocando valores aleatorios dentro dela
for (var i = 0; i < 3; i++) {
    matriz3.push([]);
    for (var j = 0; j < 3; j++) {
        matriz3[i][j] = (parseInt(Math.random() * 10) + 1);
    }
}

//criação da tabela onde aparecerá os valores da matriz 3
document.write("<table class='tabelas' border=4 >");
document.write("<br>");
document.write("<thead> Matriz 3: </thead>");
for (i = 0; i < matriz3.length; i++) {
    var linha = '<tr>';
    for (k = 0; k < matriz3[i].length; k++) {
        linha = linha + "<td>" + matriz3[i][k] + "</td>";
    }
    linha = linha + "</tr>"
    document.write(linha);
}

//geração aleatorio do numero que fará a multiplicação
numero = parseInt(Math.random() * 10)

//zerando a matriz para a entrada dos numeros multiplicados
resultadoMatriz.push([0, 0, 0]);
resultadoMatriz.push([0, 0, 0]);
resultadoMatriz.push([0, 0, 0]);


//calculo do numero gerado multiplicando cada elemento da matriz 
for (var i = 0; i < matriz3.length; i++) {
    for (var j = 0; j < matriz3[0].length; j++) {
        resultadoMatriz[i][j] = numero * matriz3[i][j];
    }
}

//criação da tabela com o resultado das multiplicações
document.write("<table class='tabelas' border=4 >");
document.write("<br>");
document.write("<thead> Resultado da multiplicação da Matriz 3 por " +numero+": </thead>");
for (i = 0; i < resultadoMatriz.length; i++) {
    var linha = '<tr>';
    for (k = 0; k < resultadoMatriz[i].length; k++) {
        linha = linha + "<td>" + resultadoMatriz[i][k] + "</td>";
    }
    linha = linha + "</tr>"
    document.write(linha);
}
