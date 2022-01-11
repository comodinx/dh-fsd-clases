const fs = require('fs');
const path = require('path');
const minimatch = require('minimatch');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const shuffle = array => {
  	let m = array.length, t, i;

  	// While there remain elements to shuffle…
  	while (m) {
    	// Pick a remaining element…
    	i = Math.floor(Math.random() * m--);

    	// And swap it with the current element.
    	t = array[m];
    	array[m] = array[i];
    	array[i] = t;
  	}

  	return array;
};

const searcheableProperties = [
	'name',
	'price',
	'discount',
	'category',
	'description'
];

const controller = {
	index: (req, res) => {
		res.render('index', {
			seen: products.slice(0, 4),
			offers: shuffle(products).filter(product => product.discount).slice(0, 4)
		});
	},
	search: (req, res) => {
		let keywords = req.query.keywords;

		if (!keywords) {
			return res.render('products', { products });
		}

		// Add wildcards to keywords for optimize search
		const term = `*${keywords}*`;

		return res.render('results', {
			// Search matches in all available properties
			products: products.filter(product => searcheableProperties.some(property => minimatch(String(product[property] || ''), term))),
			keywords
		});
	},
};

module.exports = controller;
