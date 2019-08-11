class Billete
{
    constructor(v, c, i)
    {
        this.valor = v;
        this.cantidad = c;
        this.img = i;
    }
}

function Limpiar ()
{resultado.innerHTML = "";}

function EntregarDinero ()
{
    var t =document.getElementById("dinero");
    dinero = parseInt( t.value);
    Totalcaja= 0;
    Salieron += dinero;

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
            bi.cantidad -= Papeles;

 
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
                    resultado.innerHTML +=  e.cantidad + " Billetes de $" + e.valor + '<img src="'+e.img+'" height="42" width="42" />'+ "<br />" + "Caja Total;"+ Totalcaja ;
                }
        }
            console.log("Salieron", Salieron);
            
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
var BotonExtraer = document.getElementById("extraer");
BotonExtraer.addEventListener("click", EntregarDinero);

var limpiar = document.getElementById("limpiar");
limpiar.addEventListener("click", Limpiar);