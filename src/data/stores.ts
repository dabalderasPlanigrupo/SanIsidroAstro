export interface Store {
  title: string;
  imagePath: string;
  alt: string;
  horario: string;
  categoria:
    | 'Calzado'
    | 'Comidas'
    | 'Electrónicos y telefonia'
    | 'Entretenimiento'
    | 'Ropa y accesorios'
    | 'Servicios, bancos y cajeros'
    | 'Tiendas departamentales'
    | 'Tiendas especializadas'
    | 'Ópticas, salud y belleza'
    | 'Otros';
}

export const stores: Store[] = [
  {
    title: 'Cinépolis',
    imagePath: 'logo-cinepolis.png',
    alt: 'Logo Conepolis',
    horario: `12:30 PM - 10:30 PM`,
    categoria: 'Entretenimiento',
  },
  {
    title: 'Suburbia',
    imagePath: 'logo-suburbia.png',
    alt: 'Logo Suburbia',
    horario: `9:00 AM - 11:00 PM`,
    categoria: 'Tiendas departamentales',
  },
  {
    title: 'Quarry Jeans & Fashion',
    imagePath: 'logo-quarry.png',
    alt: 'Logo Quarry',
    horario: `10:00 AM - 9:00 PM`,
    categoria: 'Ropa y accesorios',
  },
  {
    title: 'Promoda',
    imagePath: 'logo-promoda.png',
    alt: 'Logo Promoda',
    horario: `9:40 AM - 9:00 PM`,
    categoria: 'Tiendas departamentales',
  },
  {
    title: 'Sanborns',
    imagePath: 'logo-sanborns.png',
    alt: 'Logo Sanborns',
    horario: `8:00 AM - 10:00 PM`,
    categoria: 'Tiendas departamentales',
  },
  {
    title: 'Telcel',
    imagePath: 'logo-telcel.png',
    alt: 'Logo Telcel',
    horario: `11:00 AM - 10:00 PM`,
    categoria: 'Servicios, bancos y cajeros',
  },
  {
    title: 'La Casa de los Abuelos',
    imagePath: 'logo-losAbuelos.jpg',
    alt: 'Logo La Casa de los Abuelos',
    horario: `8:00 AM - 11:00 PM`,
    categoria: 'Comidas',
  },
  {
    title: 'Del Sol',
    imagePath: 'logo-delSol.png',
    alt: 'Logo Del Sol',
    horario: `10:00 AM - 9:30 PM`,
    categoria: 'Tiendas departamentales',
  },
  {
    title: 'Burger King',
    imagePath: 'logo-burgerKing.png',
    alt: 'Logo Burger King',
    horario: `10:00 AM - 10:00 PM`,
    categoria: 'Comidas',
  },
  {
    title: 'KFC',
    imagePath: 'logo-kfc.png',
    alt: 'Logo KFC',
    horario: `10:00 AM - 10:00 PM`,
    categoria: 'Comidas',
  },
  {
    title: 'Muebleria Dico',
    imagePath: 'logo-muebleriaDico.jpeg',
    alt: 'Logo Muebleria Dico',
    horario: `11:00 AM - 9:00 PM`,
    categoria: 'Tiendas especializadas',
  },
  {
    title: 'Fitness 24 Horas',
    imagePath: 'logo-fitness24.png',
    alt: 'Logo Fitness 24 Horas',
    horario: `24 hrs`,
    categoria: 'Ópticas, salud y belleza',
  },
  {
    title: 'Zapateria la Joya',
    imagePath: 'logo-zapateriaJoya.png',
    alt: 'Logo Zapateria la Joya',
    horario: `10:00 AM - 10:00 PM`,
    categoria: 'Ropa y accesorios',
  },
  {
    title: 'Bellísima',
    imagePath: 'logo-bellísima.png',
    alt: 'Logo Bellísima',
    horario: `10:00 AM - 10:00 PM`,
    categoria: 'Ópticas, salud y belleza',
  },
  {
    title: 'Optica Full Vision',
    imagePath: 'logo-opticaFullVision.jpg',
    alt: 'Logo Optica Full Vision',
    horario: `10:00 AM - 10:00 PM`,
    categoria: 'Ópticas, salud y belleza',
  },
  {
    title: 'Mobo',
    imagePath: 'logo-mobo.png',
    alt: 'Logo Mobo',
    horario: `10:00 AM - 10:10 PM`,
    categoria: 'Electrónicos y telefonia',
  },
  {
    title: 'Steren',
    imagePath: 'logo-steren.png',
    alt: 'Logo Steren Shop Electronics Solutions',
    horario: `10:00 AM - 10:00 PM`,
    categoria: 'Electrónicos y telefonia',
  },
  {
    title: 'Movistar',
    imagePath: 'logo-movistar.png',
    alt: 'Logo Movistar',
    horario: `10:00 AM - 8:00 PM`,
    categoria: 'Electrónicos y telefonia',
  },
  {
    title: 'Radio Shack',
    imagePath: 'logo-radio-shack.png',
    alt: 'Logo Radio Shack',
    horario: `10:00 AM - 9:00 PM`,
    categoria: 'Electrónicos y telefonia',
  },
  {
    title: 'Arte joyero',
    imagePath: '',
    alt: 'Logo Arte joyero',
    horario: `11:00 AM - 8:30 PM`,
    categoria: 'Ropa y accesorios',
  },
  {
    title: 'Opticas Devlyn',
    imagePath: 'logo-opticasDevlyn.png',
    alt: 'Logo Opticas Devlyn',
    horario: `10:30 AM - 9:00 PM`,
    categoria: 'Ópticas, salud y belleza',
  },
  {
    title: 'Todo Moda',
    imagePath: 'logo-todoModa.png',
    alt: 'Logo Todo Moda',
    horario: `10:00 AM - 10:00 PM`,
    categoria: 'Ropa y accesorios',
  },
  {
    title: 'Pedimed',
    imagePath: 'logo-pedimed.png',
    alt: 'Logo Pedimed La Casa de tus Pies',
    horario: `10:00 AM - 9:00 PM`,
    categoria: 'Ópticas, salud y belleza',
  },
  {
    title: 'Rockland',
    imagePath: 'logo-rockland.png',
    alt: 'Logo Rockland',
    horario: `10:00 AM - 10:00 PM`,
    categoria: 'Tiendas especializadas',
  },
  {
    title: 'Bissu Boutique',
    imagePath: 'logo-bissu.png',
    alt: 'Logo Bissu Boutique',
    horario: `10:00 AM - 9:00 PM`,
    categoria: 'Ópticas, salud y belleza',
  },
  {
    title: 'Optica Kriztel',
    imagePath: 'logo-opticaKriztel.jpg',
    alt: 'Logo Optica Kriztel',
    horario: `11:00 AM - 8:00 PM`,
    categoria: 'Ópticas, salud y belleza',
  },
  {
    title: 'Salon Express',
    imagePath: 'logo-salonExpress.png',
    alt: 'Logo Salon Express',
    horario: `11:00 AM - 8:00 PM`,
    categoria: 'Ópticas, salud y belleza',
  },
  {
    title: 'Dental Natura',
    imagePath: 'logo-dentalNatura.png',
    alt: 'Logo Dental Natura',
    horario: `10:00 AM - 8:00 PM`,
    categoria: 'Ópticas, salud y belleza',
  },
  {
    title: 'Zama Boutique',
    imagePath: 'logo-zamaBoutique.png',
    alt: 'Logo Zama Boutique',
    horario: `10:00 AM - 8:00 PM`,
    categoria: 'Ropa y accesorios',
  },
  {
    title: 'Fraiche',
    imagePath: 'logo-fraiche.png',
    alt: 'Logo Fraiche',
    horario: `10:00 AM - 8:00 PM`,
    categoria: 'Ropa y accesorios',
  },
  {
    title: 'Nina Ferre',
    imagePath: 'logo-ninaFerre.png',
    alt: 'Logo Nina Ferre',
    horario: `11:00 AM - 8:00 PM`,
    categoria: 'Ropa y accesorios',
  },
  {
    title: 'Macropay',
    imagePath: 'logo-macropay.png',
    alt: 'Logo Macropay',
    horario: `9:00 AM - 10:00 PM`,
    categoria: 'Electrónicos y telefonia',
  },
  {
    title: 'Sally Beauty Supply',
    imagePath: 'logo-sally.png',
    alt: 'Logo Sally Beauty Supply',
    horario: `10:00 AM - 9:00 PM`,
    categoria: 'Ópticas, salud y belleza',
  },
  {
    title: 'GNC',
    imagePath: 'logo-gnc.png',
    alt: 'Logo GNC Vive Mejor',
    horario: `10:00 AM - 10:00 PM`,
    categoria: 'Ópticas, salud y belleza',
  },
  {
    title: 'Glam Beauty Shop',
    imagePath: 'logo-glam.png',
    alt: 'Logo Glam Beauty Shop',
    horario: `10:00 AM - 9:00 PM`,
    categoria: 'Ópticas, salud y belleza',
  },
  {
    title: 'Trender',
    imagePath: 'logo-trender.png',
    alt: 'Logo Trender',
    horario: `11:00 AM - 9:00 PM`,
    categoria: 'Calzado',
  },
  {
    title: 'Miniso',
    imagePath: 'logo-miniso.png',
    alt: 'Logo Miniso',
    horario: `10:00 AM - 9:30 PM`,
    categoria: 'Tiendas especializadas',
  },
  {
    title: 'Shasa',
    imagePath: 'logo-shasa.png',
    alt: 'Logo Shasa',
    horario: `10:00 AM - 10:00 PM`,
    categoria: 'Ropa y accesorios',
  },
  {
    title: 'Zapaterias Destroyer',
    imagePath: 'logo-destroyer.png',
    alt: 'Logo Zapaterias Destroyer',
    horario: `10:00 AM - 9:30 PM`,
    categoria: 'Calzado',
  },
  {
    title: 'Hang Ten',
    imagePath: 'logo-hangTen.png',
    alt: 'Logo Hang Ten',
    horario: `10:00 AM - 9:00 PM`,
    categoria: 'Ropa y accesorios',
  },
  {
    title: 'BBVA',
    imagePath: 'logo-bbva.png',
    alt: 'Logo BBVA mexico',
    horario: `8:30 AM - 5:00 PM`,
    categoria: 'Servicios, bancos y cajeros',
  },
  {
    title: 'Ultrahogar',
    imagePath: 'logo-ultrahogar.png',
    alt: 'Logo Ultrahogar',
    horario: `9:00 AM - 10:00 PM`,
    categoria: 'Tiendas especializadas',
  },
  {
    title: 'Café Riviera',
    imagePath: 'logo-cafeRiviera.png',
    alt: 'Logo Café Riviera',
    horario: `9:00 AM - 10:00 PM`,
    categoria: 'Comidas',
  },
  {
    title: 'IZZI',
    imagePath: 'logo-izzi.png',
    alt: 'Logo IZZI ',
    horario: `11:00 AM - 8:00 PM`,
    categoria: 'Servicios, bancos y cajeros',
  },
  {
    title: 'Swim Store',
    imagePath: 'logo-swim.png',
    alt: 'Logo Swim Store',
    horario: `10:00 AM - 9:00 PM`,
    categoria: 'Ropa y accesorios',
  },
  {
    title: 'Colchones Atlas',
    imagePath: 'logo-colchonesAtlas.png',
    alt: 'Logo Colchones Atlas',
    horario: `11:00 AM - 9:00 PM`,
    categoria: 'Tiendas especializadas',
  },
  {
    title: 'Compurepair',
    imagePath: 'logo-compurepair.png',
    alt: 'Logo Compurepair',
    horario: `11:00 AM - 7:00 PM`,
    categoria: 'Electrónicos y telefonia',
  },
  {
    title: 'Xiny',
    imagePath: 'logo-xiny.png',
    alt: 'Logo Xiny',
    horario: `10:30 AM - 9:30 PM`,
    categoria: 'Tiendas especializadas',
  },
  {
    title: 'GAMERS',
    imagePath: 'logo-gamers.png',
    alt: 'Logo GAMERS',
    horario: ``,
    categoria: 'Tiendas especializadas',
  },
  {
    title: 'Michelle',
    imagePath: 'logo-michelle.png',
    alt: 'Logo Michelle',
    horario: `10:00 AM - 10:00 PM`,
    categoria: 'Ropa y accesorios',
  },
  {
    title: 'Felipe Fernández',
    imagePath: '',
    alt: 'Logo Felipe Fernández',
    horario: `10:00 AM - 9:00 PM`,
    categoria: 'Ropa y accesorios',
  },
  {
    title: 'Secrets Boutique',
    imagePath: 'logo-secretsBoutique.jpeg',
    alt: 'Logo Secrets Boutique',
    horario: `10:00 AM - 9:30 PM`,
    categoria: 'Ropa y accesorios',
  },
  {
    title: 'Optica Espadas',
    imagePath: 'logo-opticaEspadas.png',
    alt: 'Logo Optica Espadas',
    horario: `10:00 AM - 9:00 PM`,
    categoria: 'Ópticas, salud y belleza',
  },
  {
    title: 'Kedaki',
    imagePath: '',
    alt: 'Logo Kedaki',
    horario: `10:00 AM - 9:30 PM`,
    categoria: 'Ropa y accesorios',
  },
  {
    title: 'Zapateria Pequeños',
    imagePath: 'logo-Pequeños.png',
    alt: 'Logo Zapateria Pequeños',
    horario: `10:00 AM - 9:30 PM`,
    categoria: 'Calzado',
  },
  {
    title: 'Nutrisa',
    imagePath: 'logo-nutrisa.png',
    alt: 'Logo Nutrisa',
    horario: `11:00 AM - 9:00 PM`,
    categoria: 'Comidas',
  },
  {
    title: 'Tu Tu Play',
    imagePath: 'logo-tuTuPlay.png',
    alt: 'Logo Tu Tu Play',
    horario: `10:00 AM - 9:00 PM`,
    categoria: 'Entretenimiento',
  },
  {
    title: 'AT&T',
    imagePath: 'logo-at&t.png',
    alt: 'Logo AT&T',
    horario: `10:00 AM - 8:00 PM`,
    categoria: 'Servicios, bancos y cajeros',
  },
  {
    title: 'Aguakan',
    imagePath: 'logo-aguakan.png',
    alt: 'Logo Aguakan',
    horario: `10:00 AM - 8:00 PM`,
    categoria: 'Servicios, bancos y cajeros',
  },
  {
    title: 'Clinica de Ojos',
    imagePath: 'logo-clinicaDeOjos.jpeg',
    alt: 'Logo Clinica de Ojos',
    horario: `10:00 AM - 8:00 PM`,
    categoria: 'Ópticas, salud y belleza',
  },
  {
    title: 'Asadero',
    imagePath: 'logo-asadero.png',
    alt: 'Logo Asadero',
    horario: `10:00 AM - 10:00 PM`,
    categoria: 'Comidas',
  },
  {
    title: 'Carnitas Michoacanas',
    imagePath: 'logo-carnitasMichoacanas.png',
    alt: 'Logo Carnitas Michoacanas',
    horario: `8:30 AM - 8:30 PM`,
    categoria: 'Comidas',
  },
  {
    title: 'Win Fa',
    imagePath: 'logo-winFa.jpeg',
    alt: 'Logo Win Fa',
    horario: `11:00 AM - 9:00 PM`,
    categoria: 'Comidas',
  },
  {
    title: 'Gordibuenas',
    imagePath: 'logo-gordibuenas.png',
    alt: 'Logo Gordibuenas',
    horario: `9:00 AM - 9:00 PM`,
    categoria: 'Comidas',
  },
  {
    title: 'Karukay Sushi Gourmet',
    imagePath: 'logo-karukaySushi.png',
    alt: 'Logo Karukay Sushi Gourmet',
    horario: `11:00 AM - 10:00 PM`,
    categoria: 'Comidas',
  },
  {
    title: 'Le Petit',
    imagePath: 'logo-lePetit.png',
    alt: 'Logo Le Petit',
    horario: `11:00 AM - 9:00 PM`,
    categoria: 'Comidas',
  },
  {
    title: 'Subway',
    imagePath: 'logo-subway.png',
    alt: 'Logo Subway',
    horario: `10:00 AM - 9:00 PM`,
    categoria: 'Comidas',
  },
  {
    title: 'Filati Estambres',
    imagePath: 'logo-filati.png',
    alt: 'Logo Filati Estambres',
    horario: `11:00 AM - 8:00 PM`,
    categoria: 'Tiendas especializadas',
  },
  {
    title: 'Nail Bar Beauty Lounge',
    imagePath: 'logo-nailBarBeauty.png',
    alt: 'Logo Nail Bar Beauty Lounge',
    horario: `9:00 AM - 9:00 PM`,
    categoria: 'Ópticas, salud y belleza',
  },
  {
    title: 'Meles Shoes',
    imagePath: 'logo-melesShoes.jpeg',
    alt: 'Logo Meles Shoes',
    horario: `11:00 AM - 9:00 PM`,
    categoria: 'Calzado',
  },
  {
    title: 'Noble Shrimp Fish',
    imagePath: 'logo-nobleShrimpFish.png',
    alt: 'Logo Noble Shrimp Fish',
    horario: `11:00 AM - 9:00 PM`,
    categoria: 'Comidas',
  },
  {
    title: 'Game Fix',
    imagePath: 'logo-gameFix.png',
    alt: 'Logo Game Fix',
    horario: `11:00 AM - 8:00 PM`,
    categoria: 'Tiendas especializadas',
  },
  {
    title: 'Daylu',
    imagePath: 'logo-daylu.jpeg',
    alt: 'Logo Daylu',
    horario: `10:00 AM - 9:00 PM`,
    categoria: 'Ropa y accesorios',
  },
  {
    title: 'Mazarik',
    imagePath: '',
    alt: 'Logo Mazarik',
    horario: `11:00 AM - 8:00 PM`,
    categoria: 'Ropa y accesorios',
  },
  {
    title: 'Caban Spa',
    imagePath: 'logo-cabanSpa.png',
    alt: 'Logo Caban Spa',
    horario: `11:00 AM - 8:00 PM`,
    categoria: 'Ópticas, salud y belleza',
  },
  {
    title: 'Macro Cell',
    imagePath: '',
    alt: 'Logo Macro Cell',
    horario: `10:00 AM - 9:00 PM`,
    categoria: 'Electrónicos y telefonia',
  },
  {
    title: 'Sporttenis',
    imagePath: 'logo-sporttenis.jpg',
    alt: 'Logo Sporttenis',
    horario: `10:00 AM - 9:00 PM`,
    categoria: 'Calzado',
  },
  {
    title: 'Elite Lockers',
    imagePath: 'logo-eliteLockers.png',
    alt: 'Logo Elite Lockers',
    horario: `9:00 AM - 10:00 PM`,
    categoria: 'Calzado',
  },
  {
    title: 'Dante',
    imagePath: 'logo-dante.jpg',
    alt: 'Logo Dante',
    horario: `9:30 AM - 10:00 PM`,
    categoria: 'Tiendas especializadas',
  },
  {
    title: 'Opps Jeans',
    imagePath: 'logo-oppsJeans.jpeg',
    alt: 'Logo Opps Jeans',
    horario: `10:00 AM - 10:00 PM`,
    categoria: 'Ropa y accesorios',
  },
  {
    title: 'YAO MAY',
    imagePath: '',
    alt: 'Logo YAO MAY',
    horario: `10:00 AM - 10:00 PM`,
    categoria: 'Ropa y accesorios',
  },
  {
    title: 'Chikos Fashion',
    imagePath: 'logo-chikosFashion.jpg',
    alt: 'Logo Chikos Fashion',
    horario: `10:00 AM - 9:30 PM`,
    categoria: 'Ropa y accesorios',
  },
  {
    title: 'Yoko Games',
    imagePath: 'logo-yokoGames.jpg',
    alt: 'Logo Yoko Games',
    horario: `11:00 AM - 9:00 PM`,
    categoria: 'Entretenimiento',
  },
  {
    title: 'Visión Madrid',
    imagePath: 'logo-visiónMadrid.png',
    alt: 'Logo Visión Madrid',
    horario: `11:00 AM - 9:00 PM`,
    categoria: 'Ópticas, salud y belleza',
  },
  {
    title: 'La casa de las carcasas ',
    imagePath: 'logo-lasCarcasas-.png',
    alt: 'Logo La casa de las carcasas ',
    horario: `10:00 AM - 10:00 PM`,
    categoria: 'Electrónicos y telefonia',
  },
  {
    title: 'Body Energy',
    imagePath: 'logo-bodyEnergy.png',
    alt: 'Logo Body Energy',
    horario: `9:00 AM - 10:00 PM`,
    categoria: 'Ópticas, salud y belleza',
  },
  {
    title: 'Metal Mente Joya',
    imagePath: 'logo-metalMenteJoya.png',
    alt: 'Logo Metal Mente Joya',
    horario: `10:00 AM - 9:00 PM`,
    categoria: 'Ropa y accesorios',
  },
  {
    title: 'Funcy',
    imagePath: '',
    alt: 'Logo Funcy',
    horario: `10:00 AM - 9:00 PM`,
    categoria: 'Ópticas, salud y belleza',
  },
  {
    title: 'Spyral',
    imagePath: 'logo-spyral.png',
    alt: 'Logo Spyral',
    horario: `10:00 AM - 9:00 PM`,
    categoria: 'Ropa y accesorios',
  },
  {
    title: 'Solaris',
    imagePath: '',
    alt: 'Logo Solaris The Ultimate Sunglass Selection',
    horario: `10:00 AM - 9:00 PM`,
    categoria: 'Ópticas, salud y belleza',
  },
  {
    title: 'Skins',
    imagePath: '',
    alt: 'Logo Skins',
    horario: `11:00 AM - 10:00 PM`,
    categoria: 'Electrónicos y telefonia',
  },
  {
    title: 'Vanity',
    imagePath: 'logo-vanity.jpg',
    alt: 'Logo Vanity',
    horario: `11:00 AM - 9:00 PM`,
    categoria: 'Ropa y accesorios',
  },
  {
    title: 'Maya Cell',
    imagePath: '',
    alt: 'Logo Maya Cell',
    horario: `11:00 AM - 10:00 PM`,
    categoria: 'Electrónicos y telefonia',
  },
  {
    title: 'Relojeria',
    imagePath: '',
    alt: 'Logo Relojeria',
    horario: `11:00 AM - 9:00 PM`,
    categoria: 'Tiendas especializadas',
  },
  {
    title: 'Frosty Roll',
    imagePath: 'logo-frostyRoll.jpg',
    alt: 'Logo Frosty Roll',
    horario: `10:00 AM - 9:00 PM`,
    categoria: 'Comidas',
  },
  {
    title: 'Joyerati Cancún',
    imagePath: 'logo-joyeratiCancun.png',
    alt: 'Logo Joyerati Cancún',
    horario: `11:00 AM - 9:00 PM`,
    categoria: 'Ropa y accesorios',
  },
  {
    title: 'Fix It',
    imagePath: 'logo-fixIt.png',
    alt: 'Logo Fix It Cancun ',
    horario: `10:00 AM - 10:00 PM`,
    categoria: 'Electrónicos y telefonia',
  },
  {
    title: 'La Creperia',
    imagePath: 'logo-laCreperia.jpg',
    alt: 'Logo La Creperia',
    horario: `10:00 AM - 9:00 PM`,
    categoria: 'Comidas',
  },
  {
    title: 'Case match',
    imagePath: 'logo-caseMatch.jpg',
    alt: 'Logo Case match',
    horario: `11:00 AM - 9:00 PM`,
    categoria: 'Electrónicos y telefonia',
  },
  {
    title: 'Ecopsa Desarrollos',
    imagePath: 'logo-ecopsa.png',
    alt: 'Logo Ecopsa Desarrollos',
    horario: `11:00 AM - 9:00 PM`,
    categoria: 'Tiendas especializadas',
  },
  {
    title: 'Xtreme Pelucheria Gigante',
    imagePath: '',
    alt: 'Logo Xtreme Pelucionera Gigante',
    horario: `11:00 AM - 9:00 PM`,
    categoria: 'Entretenimiento',
  },
];
