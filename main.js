canvas = document.getElementById("myCanvas");
ctx= canvas.getContext("2d");

/*
    Use a função beginPath() para começar um caminho.
    Então, use strokeStyle para ajustar a cor para "grey".
    Use lineWidth e ajusta a width para 1.
    Use rect() para criar um retângulo em 150 e 143 com 430 width e 200 height.
*/

ctx.beginPath();
ctx.strokeStyle = "grey";
ctx.LineWidth = 1;
ctx.rect()(x, y, width, height);
ctx.stroke();

/*
    Use a função beginPath() para começar um caminho.
    Então, use strokeStyle para ajustar a cor para "blue".
    Use lineWidth e ajuste a width para 5.
    Use arc() para criar um círculo em  x = 150 e y = 143
with 40 como radius, 0 startAngle e 2 * Math.PI endAngle.
*/

ctx.beginPath();
ctx.strockStyle = "blue";
ctx.Linewidth = 5;
ctx.x = _______(x = 150, y = 143 , r = radius, startAngle, endAngle);
ctx.stroke();

// De modo parecido, crie um círculo preto com posição 350 e 210

// De modo parecido, crie um círculo vermelho com posição 210 e 40

// De modo parecido, crie um círculo laranja com posição  300 e 250

// De modo parecido, crie um círculo verde com posição 400 e 250