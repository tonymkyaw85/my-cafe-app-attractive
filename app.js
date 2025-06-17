const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
    const specials = ['Cappuccino', 'Latte', 'Espresso', 'Cheesecake'];
    res.render('index', { title: 'Welcome to My Café', specials });
});

app.get('/about', (req, res) => {
    const owner = {
        name: 'Tony Brewster',
        bio: 'Tony loves brewing perfect coffee and pastries. This café is his warm corner for all coffee lovers.'
    };
    res.render('about', { title: 'About Us', owner });
});

app.get('/contact', (req, res) => {
    const contactInfo = {
        address: '123 Coffee Street, Brewtown',
        phone: '+1 234 567 890',
        email: 'contact@mycafe.com'
    };
    res.render('contact', { title: 'Contact Us', contactInfo });
});

app.get('/menu', (req, res) => {
    const menuItems = [
        { name: 'Americano', price: '$3' },
        { name: 'Cappuccino', price: '$4' },
        { name: 'Cheesecake', price: '$5' },
        { name: 'Croissant', price: '$2.5' }
    ];
    res.render('menu', { title: 'Our Menu', menuItems });
});

app.listen(port, () => {
    console.log(`My Café app is live at http://localhost:${port}`);
});