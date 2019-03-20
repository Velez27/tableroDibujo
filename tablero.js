var tablero = document.getElementById("area_de_dibujo");
var lienzo = tablero.getContext("2d");

document.addEventListener("mousedown", presionarMouse);
document.addEventListener("mouseup", soltarMouse);
document.addEventListener("mousemove", moverMouse);

var botonDibujar = document.getElementById("boton_dibujar");
botonDibujar.addEventListener("click", dibujarFiguras);

var botonLimpiar = document.getElementById("boton_limpiar");
botonLimpiar.addEventListener("click", limpiarCanvas);

var botonDeshacer = document.getElementById("boton_deshacer");
botonDeshacer.addEventListener("click", deshacerDibujo);

var botonRehacer = document.getElementById("boton_rehacer");
botonRehacer.addEventListener("click", rehacerDibujo);

var figurasV = document.getElementById("figuras_V");

var radioLibre = document.getElementById("figuraG1");
var radioLineas = document.getElementById("figuraG2");
var radioCuadrado = document.getElementById("figuraG3");

var xMouse;
var yMouse;
var xTouch;
var yTouch;

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujarCuadrado(color, xinicial, yinicial, xfinal, yfinal)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xinicial, yfinal);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

class FigurasGeometricas
{
  constructor(color, xinicial, yinicial, xfinal, yfinal, tipo)
  {
    this.color = color;
    this.xinicial = xinicial;
    this.yinicial = yinicial;
    this.xfinal = xfinal;
    this.yfinal = yfinal;
    this.tipo = tipo;
  }
  dibujar()
  {
    lienzo.beginPath();
    lienzo.strokeStyle = this.color;
    lienzo.moveTo(this.xinicial, this.yinicial);
    lienzo.lineTo(this.xfinal, this.yfinal);
    lienzo.stroke();
    lienzo.closePath();
  }
  cuadrado()
  {
    lienzo.beginPath();
    lienzo.strokeStyle = this.color;
    lienzo.moveTo(this.xinicial, this.yinicial);
    lienzo.lineTo(this.xfinal, this.yinicial);
    lienzo.lineTo(this.xfinal, this.yfinal);
    lienzo.moveTo(this.xinicial, this.yinicial);
    lienzo.lineTo(this.xinicial, this.yfinal);
    lienzo.lineTo(this.xfinal, this.yfinal);
    lienzo.stroke();
    lienzo.closePath();
  }
  figura1(colorcito)
  {
    //var colorcito = "blue";
    var lineas = 1 + (10 * (tablero.height / 100));
    var xi, yi, xf, yf;
    var espacio = 10;
    for(var i = 0; i < lineas; i++)
    {
      yi = espacio * i;
      xf = espacio * (i + 1);
      dibujarLinea(colorcito, 0, yi, xf, tablero.height);
    }
  }
  figura2(colorcito)
  {
    //var colorcito = "blue";
    var lineas = 1 + (5 * (tablero.height / 100));
    var yi;
    var xi = tablero.width / 2;
    var yf = tablero.height / 2;
    var xf = 0;
    var xf2 = 0;
    var yi2 = 0;
    var espacio = 10;
    for(var i = 0; i < lineas; i++)
    {
      yi = espacio * i;
      xf = ((tablero.width / 2) + (espacio * i));
      xf2 = ((tablero.width / 2) - (espacio * i));
      yi2 = ((tablero.height) - (espacio * i));
      dibujarLinea(colorcito, xi, yi, xf, yf);
      dibujarLinea(colorcito, xi, yi, xf2, yf);
      dibujarLinea(colorcito, xi, yi2, xf, yf);
      dibujarLinea(colorcito, xi, yi2, xf2, yf);
    }
  }
  figura3(colorcito)
  {
    //var colorcito = "blue";
    var lineas = 1 + (10 * (tablero.height / 100));
    var xi, yi, xf, yf;
    var espacio = 10;
    for (var i = 0; i < lineas; i++)
    {
      yi = espacio * i;
      xf = espacio * (i + 1);
      xi = espacio * (i + 1);
      yf = espacio * i;
      dibujarLinea(colorcito, 0, yi, xf, tablero.height);
      dibujarLinea(colorcito, 0, tablero.height - yi, xf, 0);
      dibujarLinea(colorcito, tablero.width, yi, tablero.width - xf, tablero.height);
      dibujarLinea(colorcito, tablero.width, tablero.height - yi, tablero.width - xf, 0);
    }
  }
  figura4(colorcito)
  {
    //var colorcito = "blue";
    var lineas = 1 + (10 * (tablero.height / 100));
    var xi, yi, xf, yf;
    var espacio = 5;
    for (var i = 0; i < lineas; i++)
    {
      yi = espacio * i;
      xf = espacio * (i + 1);
      xi = espacio * (i + 1);
      yf = espacio * i;
      dibujarLinea(colorcito, (tablero.width / 2) - xi, yi * 2, xf * 2, tablero.height);
      dibujarLinea(colorcito, (tablero.width / 2) + xi, yi * 2, tablero.width - (xf * 2), tablero.height);
    }
    dibujarLinea(colorcito, 0, 493, 246, 0);
    dibujarLinea(colorcito, 500, 493, 256, 0);
  }
  figura5(colorcito)
  {
    //var colorcito = "blue";
    var xi, yi, xf, yf;
    var lineas = 10;
    var espacio = 20;
    dibujarLinea(colorcito, 0, 250, 500, 250); //linea horizontal
    dibujarLinea(colorcito, 250, 0, 250, 500); //linea vertical
    dibujarLinea(colorcito, 50, 50, 450, 450); //primer diagonal
    dibujarLinea(colorcito, 50, 450, 450, 50); //segunda diagonal
    for(var i = 0; i < lineas; i++)
    {
      xi = espacio * i;
      yi = espacio * i;
      xf = espacio * i;
      yf = espacio * i;
      dibujarLinea(colorcito, 250, 250 - yi, 50 + xf, 50 + yf);
      dibujarLinea(colorcito, 250 - xi, 250 - yi, 50 + xf, 250);
      dibujarLinea(colorcito, 250 - xi, 250, 50 + xf, 450 - yf);
      dibujarLinea(colorcito, 250 - xi, 250 + yi, 250, 450 - yf);
      dibujarLinea(colorcito, 250, 250 + yi, 450 - xf, 450 - yf);
      dibujarLinea(colorcito, 250 + xi, 250 + yi, 450 - xf, 250);
      dibujarLinea(colorcito, 250 + xi, 250, 450 - xf, 50 + yf);
      dibujarLinea(colorcito, 250 + xi, 250 - yi, 250, 50 + yf);
    }
  }
  figura6(colorcito)
  {
    //var colorcito = "blue";
    var xi, yi, xf, yf;
    var lineas = 26;
    var espacio = 10;
    dibujarLinea(colorcito, 0, 250, 500, 250); //linea horizontal
    dibujarLinea(colorcito, 250, 0, 250, 500); //linea vertical
    for(var i = 0; i < lineas; i++)
    {
      xi = espacio * i;
      yi = espacio * i;
      xf = espacio * i;
      yf = espacio * i;
      dibujarLinea(colorcito, 250, 250 - yi, 250 - xf, 0 + yf);
      dibujarLinea(colorcito, 250 - xi, 250, 0 + xf, 250 - yf);
      dibujarLinea(colorcito, 250 - xi, 250, 0 + xf, 250 + yf);
      dibujarLinea(colorcito, 250, 250 + yi, 250 - xf, 500 - yf);
      dibujarLinea(colorcito, 250, 250 + yi, 250 + xf, 500 - yf);
      dibujarLinea(colorcito, 250 + xi, 250, 500 - xf, 250 + yf);
      dibujarLinea(colorcito, 250 + xi, 250, 500 - xf, 250 - yf);
      dibujarLinea(colorcito, 250, 250 - yi, 250 + xf, 0 + yf); 
    }
  }
  figura7(colorcito)
  {
    //var colorcito = "blue";
    var xi, yi, xf, yf;
    var lineas = 9;
    var espacio = 60;
    for(var i = 0; i < lineas; i++)
    {
      yi = espacio * i;
      for(var j = 0; j < lineas; j++)
      {
        yf = espacio * j;
        dibujarLinea(colorcito, 0, yi, 500, 0 + yf);
      }
      yf = 0;
    }
  }
}

function aleatorio(min, max)
{
  var resultado;
  var color;
  resultado = Math.floor(Math.random() * (max - min + 1)) + min;
  if(resultado == 1)
  {
    color = "blue";
  }else if(resultado == 2)
  {
    color = "red";
  }else if(resultado == 3)
  {
    color = "yellow";
  }else if(resultado == 4)
  {
    color = "pink";
  }else if(resultado == 5)
  {
    color = "purple";
  }else if(resultado == 6)
  {
    color = "brown";
  }
  return color;
}

function dibujarFiguras()
{
  var color = aleatorio(1,6);
  switch (figurasV.length > 1) {
    case figurasV.value == "Figura 1":
    var figurasDefinidas = new FigurasGeometricas(color, 0, 0, 0, 0, 4);
    coleccionTrazos.push(new FigurasGeometricas(color, 0, 0, 0, 0, 4));
    figurasDefinidas.figura1(color);
      break;
    case figurasV.value == "Figura 2":
    var figurasDefinidas = new FigurasGeometricas(color, 0, 0, 0, 0, 5);
    coleccionTrazos.push(new FigurasGeometricas(color, 0, 0, 0, 0, 5));
    figurasDefinidas.figura2(color);
      break;
    case figurasV.value == "Figura 3":
    var figurasDefinidas = new FigurasGeometricas(color, 0, 0, 0, 0, 6);
    coleccionTrazos.push(new FigurasGeometricas(color, 0, 0, 0, 0, 6));
    figurasDefinidas.figura3(color);
      break;
    case figurasV.value == "Figura 4":
    var figurasDefinidas = new FigurasGeometricas(color, 0, 0, 0, 0, 7);
    coleccionTrazos.push(new FigurasGeometricas(color, 0, 0, 0, 0, 7));
    figurasDefinidas.figura4(color);
      break;
    case figurasV.value == "Figura 5":
    var figurasDefinidas = new FigurasGeometricas(color, 0, 0, 0, 0, 8);
    coleccionTrazos.push(new FigurasGeometricas(color, 0, 0, 0, 0, 8));
    figurasDefinidas.figura5(color);
      break;
    case figurasV.value == "Figura 6":
    var figurasDefinidas = new FigurasGeometricas(color, 0, 0, 0, 0, 9);
    coleccionTrazos.push(new FigurasGeometricas(color, 0, 0, 0, 0, 9));
    figurasDefinidas.figura6(color);
      break;
    case figurasV.value == "Figura 7":
    var figurasDefinidas = new FigurasGeometricas(color, 0, 0, 0, 0, 10);
    coleccionTrazos.push(new FigurasGeometricas(color, 0, 0, 0, 0, 10));
    figurasDefinidas.figura7(color);
      break;
    default:
      break;
  }
}

var xInicio, yInicio;
var xFinal, yFinal;
var bandera = 0;
var banderaCE = 0;

var coleccionTrazos = [];
var coleccionEliminar = [];
var coleccionRestaurar = [];
var coleccionRestaurarN = [];

function presionarMouse(evento)
{
  if(evento.srcElement.id == "area_de_dibujo" && radioLineas.checked == true)
  {
    if(evento.buttons == 1)
    {
      xInicio = evento.layerX;
      yInicio = evento.layerY;
    }
  }else if(evento.srcElement.id == "area_de_dibujo" && radioCuadrado.checked == true)
  {
    if(evento.buttons == 1)
    {
      xInicio = evento.layerX;
      yInicio = evento.layerY;
    }
  }
}

function soltarMouse(evento)
{
  var colorcito = "blue";
  if(evento.srcElement.id == "area_de_dibujo" && radioLineas.checked == true)
  {
    if(evento.buttons == 0)
    {
      xFinal = evento.layerX;
      yFinal = evento.layerY;
      var lineaRecta = new FigurasGeometricas(colorcito, xInicio, yInicio, xFinal, yFinal, 2);
      coleccionTrazos.push(new FigurasGeometricas(colorcito, xInicio, yInicio, xFinal, yFinal, 2));
      lineaRecta.dibujar();
    }
  }else if(evento.srcElement.id == "area_de_dibujo" && radioLibre.checked == true)
  {
    if(evento.buttons == 0)
    {
    banderaCE = bandera;
    coleccionEliminar.push(banderaCE);
    bandera = 0;
    }
  }else if(evento.srcElement.id == "area_de_dibujo" && radioCuadrado.checked == true)
  {
    if(evento.buttons == 0)
    {
    xFinal = evento.layerX;
    yFinal = evento.layerY;
    var cuadradoDibujo = new FigurasGeometricas(colorcito, xInicio, yInicio, xFinal, yFinal, 3);
    coleccionTrazos.push(new FigurasGeometricas(colorcito, xInicio, yInicio, xFinal, yFinal, 3));
    cuadradoDibujo.cuadrado();
    }
  }
}

function moverMouse(evento)
{
  var colorcito = "blue";
  if(evento.srcElement.id == "area_de_dibujo" && radioLibre.checked == true)
  {
    if(evento.buttons == 1)
    {
      var lineaLibre = new FigurasGeometricas(colorcito, xMouse, yMouse, evento.layerX, evento.layerY, 1);
      coleccionTrazos.push(new FigurasGeometricas(colorcito, xMouse, yMouse, evento.layerX, evento.layerY, 1));
      lineaLibre.dibujar();
      bandera++;
    }
    xMouse = evento.layerX;
    yMouse = evento.layerY;
  }
}

function rehacerDibujo()
{
  if(coleccionRestaurar.length >= 1)
  {
    var ultimo = coleccionRestaurar.length - 1;
    if(coleccionRestaurar[ultimo].tipo == 1)
    {
      var ultimoRestaurar = coleccionRestaurarN.length - 1;
      var valorRestaurar = coleccionRestaurarN[ultimoRestaurar];
      coleccionEliminar.push(valorRestaurar);
      for(var i = 0; i < valorRestaurar; i++)
      {
        coleccionTrazos.push(coleccionRestaurar[ultimo]);
        ultimo = ultimo - 1;
        coleccionRestaurar.pop();
      }
      coleccionRestaurarN.pop();
    }else if(coleccionRestaurar[ultimo].tipo == 2)
    {
      coleccionTrazos.push(coleccionRestaurar[ultimo]);
      coleccionRestaurar.pop();
      coleccionRestaurarN.pop();
    }else if(coleccionRestaurar[ultimo].tipo == 3)
    {
      coleccionTrazos.push(coleccionRestaurar[ultimo]);
      coleccionRestaurar.pop();
      coleccionRestaurarN.pop();
    }else if(coleccionRestaurar[ultimo].tipo == 4)
    {
      coleccionTrazos.push(coleccionRestaurar[ultimo]);
      coleccionRestaurar.pop();
      coleccionRestaurarN.pop();
    }else if(coleccionRestaurar[ultimo].tipo == 5)
    {
      coleccionTrazos.push(coleccionRestaurar[ultimo]);
      coleccionRestaurar.pop();
      coleccionRestaurarN.pop();
    }else if(coleccionRestaurar[ultimo].tipo == 6)
    {
      coleccionTrazos.push(coleccionRestaurar[ultimo]);
      coleccionRestaurar.pop();
      coleccionRestaurarN.pop();
    }else if(coleccionRestaurar[ultimo].tipo == 7)
    {
      coleccionTrazos.push(coleccionRestaurar[ultimo]);
      coleccionRestaurar.pop();
      coleccionRestaurarN.pop();
    }else if(coleccionRestaurar[ultimo].tipo == 8)
    {
      coleccionTrazos.push(coleccionRestaurar[ultimo]);
      coleccionRestaurar.pop();
      coleccionRestaurarN.pop();
    }else if(coleccionRestaurar[ultimo].tipo == 9)
    {
      coleccionTrazos.push(coleccionRestaurar[ultimo]);
      coleccionRestaurar.pop();
      coleccionRestaurarN.pop();
    }else if(coleccionRestaurar[ultimo].tipo == 10)
    {
      coleccionTrazos.push(coleccionRestaurar[ultimo]);
      coleccionRestaurar.pop();
      coleccionRestaurarN.pop();
    }
    lienzo.clearRect(0, 0, tablero.width, tablero.height);
    for(var i = 0; i < coleccionTrazos.length; i++)
    {
      if(coleccionTrazos[i].tipo == 3)
      {
        dibujarCuadrado(coleccionTrazos[i].color, coleccionTrazos[i].xinicial, coleccionTrazos[i].yinicial, coleccionTrazos[i].xfinal, coleccionTrazos[i].yfinal);
      }
      if(coleccionTrazos[i].tipo == 2 || coleccionTrazos[i].tipo == 1) 
      {
        dibujarLinea(coleccionTrazos[i].color, coleccionTrazos[i].xinicial, coleccionTrazos[i].yinicial, coleccionTrazos[i].xfinal, coleccionTrazos[i].yfinal);
      }
      if(coleccionTrazos[i].tipo == 4)
      {
        dibujarFigura1(coleccionTrazos[i].color, coleccionTrazos[i].xinicial, coleccionTrazos[i].yinicial, coleccionTrazos[i].xfinal, coleccionTrazos[i].yfinal);
      }
      if(coleccionTrazos[i].tipo == 5)
      {
        dibujarFigura2(coleccionTrazos[i].color, coleccionTrazos[i].xinicial, coleccionTrazos[i].yinicial, coleccionTrazos[i].xfinal, coleccionTrazos[i].yfinal);
      }
      if(coleccionTrazos[i].tipo == 6)
      {
        dibujarFigura3(coleccionTrazos[i].color, coleccionTrazos[i].xinicial, coleccionTrazos[i].yinicial, coleccionTrazos[i].xfinal, coleccionTrazos[i].yfinal);
      }
      if(coleccionTrazos[i].tipo == 7)
      {
        dibujarFigura4(coleccionTrazos[i].color, coleccionTrazos[i].xinicial, coleccionTrazos[i].yinicial, coleccionTrazos[i].xfinal, coleccionTrazos[i].yfinal);
      }
      if(coleccionTrazos[i].tipo == 8)
      {
        dibujarFigura5(coleccionTrazos[i].color, coleccionTrazos[i].xinicial, coleccionTrazos[i].yinicial, coleccionTrazos[i].xfinal, coleccionTrazos[i].yfinal);
      }
      if(coleccionTrazos[i].tipo == 9)
      {
        dibujarFigura6(coleccionTrazos[i].color, coleccionTrazos[i].xinicial, coleccionTrazos[i].yinicial, coleccionTrazos[i].xfinal, coleccionTrazos[i].yfinal);
      }
      if(coleccionTrazos[i].tipo == 10)
      {
        dibujarFigura7(coleccionTrazos[i].color, coleccionTrazos[i].xinicial, coleccionTrazos[i].yinicial, coleccionTrazos[i].xfinal, coleccionTrazos[i].yfinal);
      }
    }
  }
}

function deshacerDibujo()
{
  if(coleccionTrazos.length >= 1)
  {
    var ultimo = coleccionTrazos.length - 1;
    if(coleccionTrazos[ultimo].tipo == 1)
    {
      var ultimoEliminar = coleccionEliminar.length - 1;
      var valorEliminar = coleccionEliminar[ultimoEliminar];
      coleccionRestaurarN.push(valorEliminar);
      for(var i = 0; i < valorEliminar; i++)
      {
        coleccionRestaurar.push(coleccionTrazos[ultimo]);
        ultimo = ultimo - 1;
        coleccionTrazos.pop();
      }
      coleccionEliminar.pop();
    }else if(coleccionTrazos[ultimo].tipo == 2)
    {
      coleccionRestaurarN.push(1);
      coleccionRestaurar.push(coleccionTrazos[ultimo]);
      coleccionTrazos.pop();
    }else if(coleccionTrazos[ultimo].tipo == 3)
    {
      coleccionRestaurarN.push(1);
      coleccionRestaurar.push(coleccionTrazos[ultimo]);
      coleccionTrazos.pop();
    }else if(coleccionTrazos[ultimo].tipo == 4)
    {
      coleccionRestaurarN.push(1);
      coleccionRestaurar.push(coleccionTrazos[ultimo]);
      coleccionTrazos.pop();
    }else if(coleccionTrazos[ultimo].tipo == 5)
    {
      coleccionRestaurarN.push(1);
      coleccionRestaurar.push(coleccionTrazos[ultimo]);
      coleccionTrazos.pop();
    }else if(coleccionTrazos[ultimo].tipo == 6)
    {
      coleccionRestaurarN.push(1);
      coleccionRestaurar.push(coleccionTrazos[ultimo]);
      coleccionTrazos.pop();
    }else if(coleccionTrazos[ultimo].tipo == 7)
    {
      coleccionRestaurarN.push(1);
      coleccionRestaurar.push(coleccionTrazos[ultimo]);
      coleccionTrazos.pop();
    }else if(coleccionTrazos[ultimo].tipo == 8)
    {
      coleccionRestaurarN.push(1);
      coleccionRestaurar.push(coleccionTrazos[ultimo]);
      coleccionTrazos.pop();
    }else if(coleccionTrazos[ultimo].tipo == 9)
    {
      coleccionRestaurarN.push(1);
      coleccionRestaurar.push(coleccionTrazos[ultimo]);
      coleccionTrazos.pop();
    }else if(coleccionTrazos[ultimo].tipo == 10)
    {
      coleccionRestaurarN.push(1);
      coleccionRestaurar.push(coleccionTrazos[ultimo]);
      coleccionTrazos.pop();
    }
    lienzo.clearRect(0, 0, tablero.width, tablero.height);
    for(var i = 0; i < coleccionTrazos.length; i++)
    {
      if(coleccionTrazos[i].tipo == 3)
      {
        dibujarCuadrado(coleccionTrazos[i].color, coleccionTrazos[i].xinicial, coleccionTrazos[i].yinicial, coleccionTrazos[i].xfinal, coleccionTrazos[i].yfinal);
      }
      if(coleccionTrazos[i].tipo == 2 || coleccionTrazos[i].tipo == 1) 
      {
        dibujarLinea(coleccionTrazos[i].color, coleccionTrazos[i].xinicial, coleccionTrazos[i].yinicial, coleccionTrazos[i].xfinal, coleccionTrazos[i].yfinal);
      }
      if(coleccionTrazos[i].tipo == 4)
      {
        dibujarFigura1(coleccionTrazos[i].color, coleccionTrazos[i].xinicial, coleccionTrazos[i].yinicial, coleccionTrazos[i].xfinal, coleccionTrazos[i].yfinal);
      }
      if(coleccionTrazos[i].tipo == 5)
      {
        dibujarFigura2(coleccionTrazos[i].color, coleccionTrazos[i].xinicial, coleccionTrazos[i].yinicial, coleccionTrazos[i].xfinal, coleccionTrazos[i].yfinal);
      }
      if(coleccionTrazos[i].tipo == 6)
      {
        dibujarFigura3(coleccionTrazos[i].color, coleccionTrazos[i].xinicial, coleccionTrazos[i].yinicial, coleccionTrazos[i].xfinal, coleccionTrazos[i].yfinal);
      }
      if(coleccionTrazos[i].tipo == 7)
      {
        dibujarFigura4(coleccionTrazos[i].color, coleccionTrazos[i].xinicial, coleccionTrazos[i].yinicial, coleccionTrazos[i].xfinal, coleccionTrazos[i].yfinal);
      }
      if(coleccionTrazos[i].tipo == 8)
      {
        dibujarFigura5(coleccionTrazos[i].color, coleccionTrazos[i].xinicial, coleccionTrazos[i].yinicial, coleccionTrazos[i].xfinal, coleccionTrazos[i].yfinal);
      }
      if(coleccionTrazos[i].tipo == 9)
      {
        dibujarFigura6(coleccionTrazos[i].color, coleccionTrazos[i].xinicial, coleccionTrazos[i].yinicial, coleccionTrazos[i].xfinal, coleccionTrazos[i].yfinal);
      }
      if(coleccionTrazos[i].tipo == 10)
      {
        dibujarFigura7(coleccionTrazos[i].color, coleccionTrazos[i].xinicial, coleccionTrazos[i].yinicial, coleccionTrazos[i].xfinal, coleccionTrazos[i].yfinal);
      }
    }
  }
}

function dibujarFigura1(colorcito)
{
  //var colorcito = "blue";
  var lineas = 1 + (10 * (tablero.height / 100));
  var xi, yi, xf, yf;
  var espacio = 10;
  for(var i = 0; i < lineas; i++)
  {
    yi = espacio * i;
    xf = espacio * (i + 1);
    dibujarLinea(colorcito, 0, yi, xf, tablero.height);
  }
}

function dibujarFigura2(colorcito)
  {
    //var colorcito = "blue";
    var lineas = 1 + (5 * (tablero.height / 100));
    var yi;
    var xi = tablero.width / 2;
    var yf = tablero.height / 2;
    var xf = 0;
    var xf2 = 0;
    var yi2 = 0;
    var espacio = 10;
    for(var i = 0; i < lineas; i++)
    {
      yi = espacio * i;
      xf = ((tablero.width / 2) + (espacio * i));
      xf2 = ((tablero.width / 2) - (espacio * i));
      yi2 = ((tablero.height) - (espacio * i));
      dibujarLinea(colorcito, xi, yi, xf, yf);
      dibujarLinea(colorcito, xi, yi, xf2, yf);
      dibujarLinea(colorcito, xi, yi2, xf, yf);
      dibujarLinea(colorcito, xi, yi2, xf2, yf);
    }
  }

  function dibujarFigura3(colorcito)
  {
    //var colorcito = "blue";
    var lineas = 1 + (10 * (tablero.height / 100));
    var xi, yi, xf, yf;
    var espacio = 10;
    for (var i = 0; i < lineas; i++)
    {
      yi = espacio * i;
      xf = espacio * (i + 1);
      xi = espacio * (i + 1);
      yf = espacio * i;
      dibujarLinea(colorcito, 0, yi, xf, tablero.height);
      dibujarLinea(colorcito, 0, tablero.height - yi, xf, 0);
      dibujarLinea(colorcito, tablero.width, yi, tablero.width - xf, tablero.height);
      dibujarLinea(colorcito, tablero.width, tablero.height - yi, tablero.width - xf, 0);
    }
  }

  function dibujarFigura4(colorcito)
  {
    //var colorcito = "blue";
    var lineas = 1 + (10 * (tablero.height / 100));
    var xi, yi, xf, yf;
    var espacio = 5;
    for (var i = 0; i < lineas; i++)
    {
      yi = espacio * i;
      xf = espacio * (i + 1);
      xi = espacio * (i + 1);
      yf = espacio * i;
      dibujarLinea(colorcito, (tablero.width / 2) - xi, yi * 2, xf * 2, tablero.height);
      dibujarLinea(colorcito, (tablero.width / 2) + xi, yi * 2, tablero.width - (xf * 2), tablero.height);
    }
    dibujarLinea(colorcito, 0, 493, 246, 0);
    dibujarLinea(colorcito, 500, 493, 256, 0);
  }
  
  function dibujarFigura5(colorcito)
  {
    //var colorcito = "blue";
    var xi, yi, xf, yf;
    var lineas = 10;
    var espacio = 20;
    dibujarLinea(colorcito, 0, 250, 500, 250); //linea horizontal
    dibujarLinea(colorcito, 250, 0, 250, 500); //linea vertical
    dibujarLinea(colorcito, 50, 50, 450, 450); //primer diagonal
    dibujarLinea(colorcito, 50, 450, 450, 50); //segunda diagonal
    for(var i = 0; i < lineas; i++)
    {
      xi = espacio * i;
      yi = espacio * i;
      xf = espacio * i;
      yf = espacio * i;
      dibujarLinea(colorcito, 250, 250 - yi, 50 + xf, 50 + yf);
      dibujarLinea(colorcito, 250 - xi, 250 - yi, 50 + xf, 250);
      dibujarLinea(colorcito, 250 - xi, 250, 50 + xf, 450 - yf);
      dibujarLinea(colorcito, 250 - xi, 250 + yi, 250, 450 - yf);
      dibujarLinea(colorcito, 250, 250 + yi, 450 - xf, 450 - yf);
      dibujarLinea(colorcito, 250 + xi, 250 + yi, 450 - xf, 250);
      dibujarLinea(colorcito, 250 + xi, 250, 450 - xf, 50 + yf);
      dibujarLinea(colorcito, 250 + xi, 250 - yi, 250, 50 + yf);
    }
  }

  function dibujarFigura6(colorcito)
  {
    //var colorcito = "blue";
    var xi, yi, xf, yf;
    var lineas = 26;
    var espacio = 10;
    dibujarLinea(colorcito, 0, 250, 500, 250); //linea horizontal
    dibujarLinea(colorcito, 250, 0, 250, 500); //linea vertical
    for(var i = 0; i < lineas; i++)
    {
      xi = espacio * i;
      yi = espacio * i;
      xf = espacio * i;
      yf = espacio * i;
      dibujarLinea(colorcito, 250, 250 - yi, 250 - xf, 0 + yf);
      dibujarLinea(colorcito, 250 - xi, 250, 0 + xf, 250 - yf);
      dibujarLinea(colorcito, 250 - xi, 250, 0 + xf, 250 + yf);
      dibujarLinea(colorcito, 250, 250 + yi, 250 - xf, 500 - yf);
      dibujarLinea(colorcito, 250, 250 + yi, 250 + xf, 500 - yf);
      dibujarLinea(colorcito, 250 + xi, 250, 500 - xf, 250 + yf);
      dibujarLinea(colorcito, 250 + xi, 250, 500 - xf, 250 - yf);
      dibujarLinea(colorcito, 250, 250 - yi, 250 + xf, 0 + yf); 
    }
  }

  function dibujarFigura7(colorcito)
  {
    //var colorcito = "blue";
    var xi, yi, xf, yf;
    var lineas = 9;
    var espacio = 60;
    for(var i = 0; i < lineas; i++)
    {
      yi = espacio * i;
      for(var j = 0; j < lineas; j++)
      {
        yf = espacio * j;
        dibujarLinea(colorcito, 0, yi, 500, 0 + yf);
      }
      yf = 0;
    }
  }

function limpiarCanvas()
{
  coleccionTrazos = [];
  coleccionEliminar = [];
  coleccionRestaurar = [];
  coleccionRestaurarN = [];
  lienzo.clearRect(0, 0, tablero.width, tablero.height);
}
