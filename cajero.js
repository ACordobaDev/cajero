class Billete
{
    constructor(v, c, i)
    {
        this.valor = v;
        this.cantidad = c;
        this.img = i;
    }
}

var caja = []; // Billetes que tiene el cajero array Class Billete
var entregado = []; // Billetes que entrego al cliente
var Salieron = 0; // cuanto dinero he sacado en cada retiro
var Totalcaja = 0; // cuanto dinero tengo en total en caja
var dinero = 0; //dinero es la cantidad de dinero que quiere retirar el cliente
var Papeles = 0; // cantidad de billetes a entregar
var resultado = document.getElementById("resultado"); // llamar el div con class resultado del HTML
var RBillete = document.getElementById("R-billete"); // llamar el div con ID R-billete del HTML
var BotonExtraer = document.getElementById("extraer"); // llamar el boton con ID extraer del HTML
BotonExtraer.addEventListener("click", EntregarDinero); // Al presionar el boton de ID extraer del HTML
var sale = document.getElementById("sale"); // llamar el h5 con ID sale del HTML
var encaja = document.getElementById("encaja"); // llamar el h5 con ID encaja del HTML

//Vamos a contar cuanto dinero tenemos disponible en caja al cargar la pagina
$( document ).ready(function() 
{ totalencaja(); 
    console.log("Buscame en Github ACordobaDev")
});

// Empujar nuevos billetes a la class Billete  de la linea 1
caja.push( new Billete (50, 15, "img/50.png" ) ); // 50 = valor, 3 = Cantidad , imagen
caja.push( new Billete (20, 9, "img/20.png" ) ); // 20 = valor, 2 = Cantidad , imagen
caja.push( new Billete (10, 20, "img/10.png" ) ); // 10 = valor, 2 = Cantidad , imagen

// Algoritmo para sacar el dinero
function EntregarDinero ()
{   
    entregado.length = 0 ; // limpiar el array de billetes a entregar
    var t =document.getElementById("dinero"); // llamar el input con ID dinero  
    dinero = parseInt( t.value); // dinero es igual al valor entero del input con ID dinero

    resultado.innerHTML = "";
    RBillete.innerHTML = "";

    if (Totalcaja >= dinero)
    {
        Salieron += dinero ;
        for ( var bi of caja)
        {
            Division = Math.floor(dinero / bi.valor);
            if (Division > bi.cantidad)
            {
                Papeles = bi.cantidad;
            }
            else
            {
                Papeles = Division;
            }
            dinero = dinero - (bi.valor * Papeles);
            bi.cantidad -= Papeles;
            entregado.push( new Billete(bi.valor, Papeles, bi.img));

        }
         for( var e of entregado)
         {
            if (e.cantidad > 0)  // si la cantidad de billetes a entregar es mayor de 0
            {
                resultado.innerHTML += '<p>' + e.cantidad + " Billetes de $" + e.valor +"  <p/>" ; // imprimo la cantidad y el valor del billete
                RBillete.innerHTML +=  '<img src="'+e.img+'" width="100" class="img-fluid" />' ; // imprimo la imagen del billete
            }
         }

         sale.innerHTML = "Haz Sacado : " + Salieron;
         encaja.innerHTML = "Diponible : " + Totalcaja;
         totalencaja(); 

    }

    else
    {
        resultado.innerHTML = "<p> Lo siento no tengo esa cantidad </p>"; // mostraer en HTML 
     }

}

// Funcion para calcular el valor total del dinero en el cajero
function totalencaja ()
{
    Totalcaja =0;
     for ( var conteo of caja)
    {
        Totalcaja += (conteo.valor * conteo.cantidad);
        document.getElementById(conteo.valor).innerHTML = conteo.cantidad;
        
    }
 
    encaja.innerHTML = "Diponible : " + Totalcaja;
    
}

