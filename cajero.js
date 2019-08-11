class Billete
{
    constructor(v, c, i)
    {
        this.valor = v;
        this.cantidad = c;
        this.img = i;
    }
}

$( document ).ready(function() {

    totalencaja(caja.valor, caja.cantidad);
    console.log( Totalcaja );
});
function EntregarDinero ()
{
    var t =document.getElementById("dinero");
    dinero = parseInt( t.value);
    Totalcaja= 0;
    Salieron += dinero;
    resultado.innerHTML = ""

    for(var bi of caja)
    {
       if (dinero > 0 )
       { 

            Division = Math.floor(dinero / bi.valor);

                if(Division > bi.cantidad)
                {
                    Papeles = bi.cantidad;
                }

                else
                {
                    Papeles = Division;
                }
            entregado.push( new Billete(bi.valor, Papeles, bi.img) );
            dinero = dinero - (bi.valor * Papeles);
            if ( Papeles <= bi.cantidad ){
            bi.cantidad -= Papeles;
        }
               

 
         }
         totalencaja(bi.valor, bi.cantidad);
    }

    if(dinero > 0)
        {
        resultado.innerHTML = " No dinero";
        }
    
    else 
    {
 
        for (var e of entregado)
        { 


            if (e.cantidad > 0)
                {
                    resultado.innerHTML += '<p>' + e.cantidad + " Billetes de $" + e.valor +"  <p/>" ;
                    RBillete.innerHTML +=  '<img src="'+e.img+'" width="100" class="img-fluid" />' ;


                }
        }
            console.log("Salieron", Salieron);
            sale.innerHTML = "Haz Sacado : " + Salieron;
            encaja.innerHTML = "Diponible : " + Totalcaja;
            
            console.log( caja);
            console.log("Dinero en caja", Totalcaja);
    }

}

function totalencaja (ValorBillete, cantidadBillete)
{
Totalcaja += (ValorBillete * cantidadBillete );


}

var Salieron = 0;
var Totalcaja =0;
var caja = [];
var entregado = [];
caja.push( new Billete (50, 3, "img/50.png" ) );
caja.push( new Billete (20, 2, "img/20.png" ) );
caja.push( new Billete (10, 2, "img/10.png" ) );

var dinero = 0;
var Division = 0;
var Papeles = 0;

var resultado = document.getElementById("resultado");
var RBillete = document.getElementById("R-billete");
var BotonExtraer = document.getElementById("extraer");
BotonExtraer.addEventListener("click", EntregarDinero);
var sale = document.getElementById("sale");
var encaja = document.getElementById("encaja");


