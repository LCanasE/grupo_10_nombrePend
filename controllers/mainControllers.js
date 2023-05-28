// Controladores páginas principales
const path = require("path");

let eventos = [
    {
        id: 1,
        img: '../img/amelie-lens-farrago-maderoboardwalk-160560-img.jpeg',
        name: 'Amelie Lens',
        date: '1 de junio - 22 horas',
        place: 'Mandarine Park',
        price: 3000,
    },
    {
        id: 2,
        img: '../img/babasonicos-en-lanus-img.jpeg',
        name: 'Babasonicos',
        date: '26 de mayo - 21 horas',
        place: 'Microestadio Lanus',
        price: 3000,
    },
    {
        id: 3,
        img: '../img/peces-raros-2da-funcion-158913-img.jpeg',
        name: 'Peces Raros',
        date: '6 de mayo - 20 horas',
        place: 'Complejo Art Media',
        price: 2000,
    },
    {
        id: 4,
        img: '../img/la-kermesse-en-ballester-img.jpeg',
        name: 'La Kermesse',
        date: '15 de abril - 22 horas',
        place: 'Club Aleman Ballester',
        price: 1500,
    },
    {
        id: 5,
        img: '../img/tan-bionica.jpg',
        name: 'Tan Biónica',
        date: '28 de octubre - 22 horas',
        place: 'Estadio Vélez Sarsfield',
        price: 12000,
    },
    {
        id: 6,
        img: '../img/1915.jpg',
        name: '1915',
        date: '23 de junio - 21 horas',
        place: 'Teatro Vorterix',
        price: 4000,
    },
    {
        id: 7,
        img: '../img/airbag.jpg',
        name: 'Airbag',
        date: '21 de mayo - 20 horas',
        place: 'Movistar Arena',
        price: 4000,
    },
    {
        id: 8,
        img: '../img/catupecu.jpg',
        name: 'Catupecu Machu',
        date: '20 de junio - 20 horas',
        place: 'Movistar Arena',
        price: 3000,
    },
];

const mainControllers = {

    getIndex:(req, res) =>
    //res.sendFile(path.join(__dirname, "../views/home.html"))
    res.render('home', { title: 'Inicio', eventos })
}

module.exports = mainControllers;