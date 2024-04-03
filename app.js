const express = require('express');
const app = express();
const path = require('path');

// Définir le moteur de vue EJS et le dossier des vues
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware pour les fichiers statiques (CSS, JS, images, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// Middleware pour générer des liens absolus dans les vues
app.use((req, res, next) => {
  res.locals.url = (path) => `${req.protocol}://${req.hostname}${path}`;
  next();
});

// Route pour la page d'accueil
app.get('/', (req, res) => {
  res.render('index', { url: res.locals.url });
});

// Route pour la page de contact
app.get('/contact', (req, res) => {
  res.render('contact', { url: res.locals.url });
});

// Lancer le serveur
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Serveur lancé sur http://localhost:${port}`);
});