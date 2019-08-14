class Billete
{
    constructor(v, c, i)
    {
        this.valor = v;
        this.cantidad = c;
        this.img = i;
    }
}

var Salieron = 0; // cuanto dinero he sacado en cada retiro
var Totalcaja = 0; // cuanto dinero tengo en total en caja
var caja = []; // Billetes que tiene el cajero array Class Billete
var entregado = []; // Billetes que entrego al cliente

// Empujar nuevos billetes a la class Billete  de la linea 1
caja.push( new Billete (50, 3, "img/50.png" ) ); // 50 = valor, 3 = Cantidad , imagen
caja.push( new Billete (20, 2, "img/20.png" ) ); // 20 = valor, 2 = Cantidad , imagen
caja.push( new Billete (10, 2, "img/10.png" ) ); // 10 = valor, 2 = Cantidad , imagen

var dinero = 0; //dinero es la cantidad de dinero que quiere retirar el cliente
var Division = 0; // cociente de dinero % valor del billete
var Papeles = 0; // Cantidad de billetes a entregar

var resultado = document.getElementById("resultado"); // llamar el div con class resultado del HTML
var RBillete = document.getElementById("R-billete"); // llamar el div con ID R-billete del HTML
var BotonExtraer = document.getElementById("extraer"); // llamar el boton con ID extraer del HTML
BotonExtraer.addEventListener("click", EntregarDinero); // Al presionar el boton de ID extraer del HTML
var sale = document.getElementById("sale"); // llamar el h5 con ID sale del HTML
var encaja = document.getElementById("encaja"); // llamar el h5 con ID encaja del HTML


// Algoritmo para sacar el dinero
function EntregarDinero ()
{

    var t =document.getElementById("dinero"); // llamar el input con ID dinero  
    dinero = parseInt( t.value); // dinero es igual al valor entero del input con ID dinero
    Totalcaja= 0; // cuanto dinero tengo en total del cajero
    Salieron += dinero; // cuanto dinero he sacado en cada retiro
 

    for(var bi of caja)
    {
       if (dinero > 0 ) // Si el valor introducido en el input ID dinero es mayor a 0
       { 

            Division = Math.floor(dinero / bi.valor); // Dinero dividido el valor del billete, Division es igual cociente de la division

                if(Division > bi.cantidad) // Si Division es mayor a la cantidad de billetes disponibles en el cajero
                {
                    Papeles = bi.cantidad; // Papeles es igual a la cantidad de billetes disponible en el cajero
                }

                else
                {
                    Papeles = Division; // papeles es igual a division ( cociente de la division linea 48)
                }
            entregado.push( new Billete(bi.valor, Papeles, bi.img) ); // billetes que entrego al cliente, Valor Billete , Cantidad a entregar , imagen a imprimir 
            dinero = dinero - (bi.valor * Papeles); //dinero es igual a dinero menos (valor del billete por cantidad de billetes a entregar )


 
         }
         totalencaja(bi.valor, bi.cantidad); // Contar cuanto dinero tengo en el cajero disponible, ver funcion linea 103
    }

    if(dinero > 0) // si dinero es mayor a 0 , el valor de dinero en la linea 60
        {
        resultado.innerHTML = " No dinero"; // mostraer en HTML 
        console.log( caja);
        console.log("Dinero en caja", Totalcaja);
        }
    
    else 
    {

        for (var e of entregado) // e es igual a billetes a entregar
        { 
             if (e.cantidad > 0)  // si la cantidad de billetes a entregar es mayor de 0
                {
                           
                    resultado.innerHTML += '<p>' + e.cantidad + " Billetes de $" + e.valor +"  <p/>" ; // imprimo la cantidad y el valor del billete
                    RBillete.innerHTML +=  '<img src="'+e.img+'" width="100" class="img-fluid" />' ; // imprimo la imagen del billete
                    
                    bi.cantidad -= e.cantidad;   // restar la cantidad de billetes entregados de la caja ( los billetes que tengo menos los billetes que estoy sacando) 

                }

                   
        }


            console.log("Salieron", Salieron);
            sale.innerHTML = "Haz Sacado : " + Salieron;
            encaja.innerHTML = "Diponible : " + Totalcaja;
            
            console.log( caja);
            console.log("Dinero en caja", Totalcaja);
    }

}

// Funcion para calcular el valor total del dinero en el cajero
function totalencaja (ValorBillete, cantidadBillete)
{
Totalcaja += (ValorBillete * cantidadBillete );
}