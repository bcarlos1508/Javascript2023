let nombre;
let situacion;
let mascota; 

class Perro
{
    constructor(id, nombre, color, tamaño, genero, zona, caracteristica) 
    {
        this.id=id;
        this.nombre=nombre;
        this.color=color;
        this.tamaño=tamaño;
        this.genero=genero;
        this.zona=zona;
        this.caracteristica=caracteristica;
    }
    asignarId(array) 
    {
        this.id=array.length;
    }
}

const perros=[
    new Perro(1, 'Pulga', 'Marron', 'L', 'H', 'Heller', 'Tipo labrador'),
    new Perro(2, 'Benjamin', 'Naranja y negro', 'L', 'M', 'Heller', 'Pelo corto')
]

class Gato
{
    constructor(id, nombre, color, tamaño, genero, zona, caracteristica) 
    {
        this.id=id;
        this.nombre=nombre;
        this.color=color;
        this.tamaño=tamaño;
        this.genero=genero;
        this.zona=zona;
        this.caracteristica=caracteristica;
    }
    asignarId(array) 
    {
        this.id=array.length;
    }
}

const gatos=[
    new Gato(1, 'Lasi', 'Gris', 'L', 'H', 'Heller', 'Mañosa'),
    new Gato(2, 'Limon', 'Naranja y blanco', 'S', 'M', 'Heller', 'Pelo corto'),
    new Gato(3, 'Milan', 'Negro', 'S', 'H', 'Heller', 'Atigrada'),
    new Gato(4, 'Misterio', 'Blanco y negro', 'L', 'H', 'Heller', 'Peluda')
]
                                                                     
nombre=prompt("Ingresa tu nombre");
alert("Bienvenido "+nombre+" a De Nuevo En Casa. Un proyecto que surge para brindar ayuda en el momento más difícil, cuando se pierde uno de nuestros amigos peludos. Gracias por visitarnos");
situacion=prompt("¿Perdiste alguna mascota o encontraste alguna? Ingresá 1 si estás buscando o 2 si encontraste:");
if(situacion==1)
{
    alert("Lamentamos tu situación, esperamos poder ayudarte.");
    mascota=prompt(" ¿Perdiste un gato/a o un perro/a? Ingresá 1 o 2 respectivamente");
    if(mascota==1)
    {
        alert("A continuación te mostramos los gatos y gatas que se han encontrado en Neuquén Capital");
        mostrarMascotas(gatos);
    }
    else
    {
        if(mascota==2)
        {
            alert("A continuación te mostramos los perros y perras que se han encontrado en Neuquén Capital");
            mostrarMascotas(perros);
        }
    }
}
else
{
    if(situacion==2)
    {
        alert("Nos alegramos de que hayas podido rescatar a un peludito, gracias por tomarte el tiempo de pasar por aquí para tratar de encontrar a su familia");
        mascota=prompt("¿Encontraste un gato/a o un perro/a? Ingresá 1 o 2 respectivamente");
        if(mascota==1)
        {
            alert("A continuación te iremos pidiendo información para cargarlo a nuestra base de datos para que otros puedan verlo y tal vez reconocerlo");
            cargaGatos();
            mostrarMascotas(gatos);
            alert("Muchas gracias por tu ayuda, esperamos que pronto puedas contactarte con su dueño");
        }
        else
        {
            if(mascota==2)
            {
                alert("A continuación te iremos pidiendo información para cargarlo a nuestra base de datos para que otros puedan verlo y tal vez reconocerlo");
                cargaPerros();
                mostrarMascotas(perros);
                alert("Muchas gracias por tu ayuda, esperamos que pronto puedas contactarte con su dueño");
            }
        }
    }
}

function cargaGatos()
{
    let continuar=true;
    while(continuar)
    {
        let carga=prompt('Ingresa los datos del gato/a: Nombre, Color, Tamaño (S,M,L), Género (M o H), Zona donde lo encontraste, Caracteristica, separados por una barra diagonal (/). Ingresa X para finalizar');
        if (carga.toUpperCase()=='X') 
        {
            continuar=false;
            break;
        }
        let datos=carga.split('/');
        const gato=new Gato(datos[-1], datos[0], datos[1], datos[2], datos[3], datos[4], datos[5]);
        gatos.push(gato);
        gato.asignarId(gatos);
    }
}

function cargaPerros()
{
    let continuar=true;
    while(continuar)
    {
        let carga=prompt('Ingresa los datos del perro/a: Nombre, Color, Tamaño (S,M,L), Género (M o H), Zona donde lo encontraste, Caracteristica, separados por una barra diagonal (/). Ingresa X para finalizar');
        if (carga.toUpperCase()=='X') 
        {
            continuar=false;
            break;
        }
        let datos=carga.split('/');
        const perro=new Perro(datos[-1], datos[0], datos[1], datos[2], datos[3], datos[4], datos[5]);
        perros.push(perro);
        perro.asignarId(perros);
    }
}


function mostrarMascotas(array)
{
    for (let i=0;i<=array.length;i++)
    {
        console.log(array[i]);
    }
}

alert("Gracias la visita, esperamos haberte sido de utilidad!")
/*window.close()*/  