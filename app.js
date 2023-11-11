const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

app.set('views', 'ejs');
app.use(express.static('public')); 

app.get('/', async (req, res) => {
    try {
    
        const response = await axios.get('https://thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail');
        const cocktails = response.data.drinks;

        res.render('index', { cocktails });
    } catch (error) {
        console.error(error);
        res.status(500).send('Error interno del servidor');
    }
});

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
