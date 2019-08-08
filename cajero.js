class Billete
{
    constructor(v, c, i)
    {
        this.valor = v;
        this.cantidad = c;
        this.img = i;
    }
}
function EntregarDinero ()
{

     var t =document.getElementById("dinero");
    dinero = parseInt( t.value);
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
       }
    }
    if(dinero > 0)
    {
       resultado.innerHTML = " No dinero";
    }
    else 
    {
        for (var e of entregado)
        { if (e.cantidad > 0)
            {
                resultado.innerHTML +=  e.cantidad + " Billetes de $" + e.valor + '<img src="'+e.img+'" height="42" width="42" />'+ "<br />" ;
                
            }

        }
    }

}



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