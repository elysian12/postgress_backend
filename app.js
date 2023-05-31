const express = require('express');
require('dotenv').config()


require('./util/db')
const userRoute = require('./routes/user')
const sequelize = require('./util/db');


const app = express();


const PORT = process.env.PORT || 3002;


app.use('/api/v1/users', userRoute);



sequelize.sync({ force: false }).then(result => {
    console.log(`Connected to DB 💿`);
    app.listen(PORT, () => {
        console.log(`🚀Server listening on ${PORT}`);
    })
}).catch(err => {
    console.log(err.message);
});





