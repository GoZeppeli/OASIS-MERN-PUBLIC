const express = require('express');
const cors = require('cors');
const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');
const app = express();
const cookieParser = require('cookie-parser');

app.use(cors({credentials:true,origin:'http://localhost:3000'}));
app.use(express.json());
app.use(cookieParser());
app.use('/uploads', express.static(__dirname + '/uploads'));

mongoose.connect('mongodb+srv://celian_ch:mdp2010cc@cluster0.k0vmv.mongodb.net/diewelt?retryWrites=true&w=majority');
require("/routes/routes")(app);

app.listen(4000)
