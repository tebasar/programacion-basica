var imagenes = [];
    imagenes ["Cauchin"] = "vaca.png";
    imagenes ["Pokacho"] = "pollo.png";
    imagenes ["Cacamoto"] = "cacamoto.jpeg";
 
class Pakiman
{
    constructor(n, v, a)
    {
        this.imagen = new Image();
        this.nombre = n;
        this.vida = v;
        this.ataque = a;

        this.imagen.src = imagenes[this.nombre]
    }
    mostrar()    
    {
        document.body.appendChild(this.imagen);
        document.write("<br/>" + this.nombre + "<br/>");  
        document.write(this.vida + "<br/>");
        document.write(this.ataque + "<hr/>");
        }
}
var coleccion = [];

coleccion.push(new Pakiman("Cauchin", 100, 30));
coleccion.push(new Pakiman("Pokacho", 80, 50));
coleccion.push(new Pakiman("Tocinauro", 120, 40));
coleccion.push(new Pakiman("Cacamoto", 120, 40));



for(var freddito of coleccion)
{
    freddito.mostrar();
}