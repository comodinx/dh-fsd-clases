const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
	// Root - Show all products
	index: (req, res) => {
		res.render('products', { products });
	},

	// Detail - Detail from one product
	detail: (req, res) => {
		const product = products.find(product => product.id === Number(req.params.id));

		if (!product) {
			// Strategy used for response with 404
			return next();
		}
		return res.render('detail', { product });
	},

	// Create - Form to create
	create: (req, res) => {
		res.render('product-create-form');
	},
	
	// Create -  Method to store
	store: (req, res) => {
		// Generate next product ID
		const nextId = (Math.max.apply(Math, products.map(product => product.id)) || 0) + 1;
		// Destructuring of the request body, to avoid junk properties
		const { name, price, discount, category, description } = req.body;
		// Create new product
		const product = {
			id: nextId,
			price: Number(price),
			discount: Number(discount),
			image: 'default-image.png',
			name,
			category,
			description
		};

		// Save product on products array
		products.push(product);

		// Save products on file
		fs.writeFileSync(productsFilePath, JSON.stringify(products, null, 1), 'utf-8');

		// Redirect to home
		res.redirect('/');
	},

	// Update - Form to edit
	edit: (req, res) => {
		const product = products.find(product => product.id === Number(req.params.id));

		if (!product) {
			// Strategy used for response with 404
			return next();
		}

		res.render('product-edit-form', { product });
	},
	// Update - Method to update
	update: (req, res) => {
		const id = Number(req.params.id);
		const product = products.find(product => product.id === id);

		if (!product) {
			// Strategy used for response with 404
			return next();
		}

		// Destructuring of the request body, to avoid junk properties
		const { name, price, discount, category, description } = req.body;
		// Update current product
		product.name = req.body.name;
		product.price = Number(req.body.price);
		product.discount = Number(req.body.discount);
		product.category = req.body.category;
		product.description = req.body.description;

		// Save products on file
		fs.writeFileSync(productsFilePath, JSON.stringify(products, null, 1), 'utf-8');

		// Redirect to home
		res.redirect(`/products/${id}`);
	},

	// Delete - Delete one product from DB
	destroy : (req, res) => {
		const productIndex = products.findIndex(product => product.id === Number(req.params.id));

		if (productIndex < 0) {
			// Strategy used for response with 404
			return next();
		}

		// Remove current product
		products.splice(productIndex, 1);

		// Save products on file
		fs.writeFileSync(productsFilePath, JSON.stringify(products, null, 1), 'utf-8');

		// Redirect to home
		res.redirect('/');
	}
};

module.exports = controller;