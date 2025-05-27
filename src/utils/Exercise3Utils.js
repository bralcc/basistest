const categories = [
    { id: 1, name: 'Werktuig', words: ['Hamer', 'Boor', 'Zaag', 'Tang', 'Meetlint', 'Nijptang', 'Vijl'] },
    { id: 2, name: 'Vis', words: ['Snoek', 'Baars', 'Forel', 'Kabeljauw', 'Haring', 'Zalm', 'Makreel', 'Tonijn', 'Paling'] },
    { id: 3, name: 'Boom', words: ['Eik', 'Beuk', 'Es', 'Berk', 'Wilg', 'Kastanje', 'Linde', 'Ceder', 'Spar'] },
    { id: 4, name: 'Vloeistof', words: ['Water', 'Olie', 'Melk', 'Benzine', 'Azijn', 'Siroop', 'Sap', 'Bloed', 'Alcohol'] },
    { id: 5, name: 'Land', words: ['Boerderij', 'Stad', 'Bos', 'Weide', 'Heide', 'Duin', 'Dorp', 'Park', 'Tuin'] },
    { id: 6, name: 'Kleren', words: ['Jas', 'Broek', 'Schoenen', 'Trui', 'Hemd', 'Rok', 'Sjaal', 'Hoed'] },
    { id: 7, name: 'Insect', words: ['Bij', 'Vlinder', 'Mug', 'Mier', 'Wesp', 'Kever'] },
    { id: 8, name: 'Transport', words: ['Auto', 'Fiets', 'Trein', 'Bus', 'Vliegtuig', 'Boot', 'Tram', 'Scooter', 'Metro'] },
    { id: 9, name: 'Metaal', words: ['Ijzer', 'Koper', 'Aluminium', 'Zink', 'Lood', 'Tin', 'Goud', 'Zilver', 'Brons'] },
];

function pickRandomCategories(categories, maxTimes) {
    const pickedCategories = [];

    for (let i = 0; i < maxTimes; i++) {
        const randomIndex = Math.floor(Math.random() * categories.length);
        pickedCategories.push(categories[randomIndex]);
    }
}

console.log(pickRandomCategories);
