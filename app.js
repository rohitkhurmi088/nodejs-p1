const express = require('express');
const PORT = process.env.PORT || 3008;

const path = require('path');
//root directory for path
const rootDir = require('./util/path');

const expressLayouts = require('express-ejs-layouts');
const bodyParser = require('body-parser');



//___________Setting Up Express Server________
const app = express();
require('events').EventEmitter.prototype._maxListeners = 100;


//__________Middleware_________________________
//:::::::: SASS MIDDLEWARE :::::::
//Adding SASS: node-sass-middleware & use it just before server starts
const sassMiddleware = require('node-sass-middleware');
//Precompiling Scss-->Css
app.use(sassMiddleware({
    src:'./assets/scss',         //take file from
    dest:'./assets/css',        //compile to destination
    debug: true,              //information in terminal
    outputStyle: 'extended', //miltiple-lines
    prefix: '/css'          //converted-file prefix:.css
}));

//body parser
app.use(express.json());
app.use(express.urlencoded({ extended:false }));


//------------TEMPELATE ENGINE:: EJS--------------------//
//setting up css files path
app.use(express.static(path.join(__dirname,'assets')));

//for layouts -put before routes
app.use(expressLayouts);
//extract style +script from subpages into layout
//Eg: including home.ejs-css file in layout
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);

//pug template engine + directory path
app.set('view engine', 'ejs');
//app.set('views', path.join(__dirname,'views'));
app.set('views', './views');

//_______________ROUTES_________________________
//const adminData = require('./routes/admin');
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

//app.use('/admin',adminData.routes); //all the routes in admin router will follow '/admin/routeName'
app.use('/admin',adminRoutes);
app.use(shopRoutes);

//for any wrong route : display error page: Use Error Controller
const errorController = require('./controllers/error');
app.use(errorController.get404);


//______________PROT Listening_____________
app.listen(PORT , (err)=>{
    if(err){
        console.log(err);
        return;
    }
    return console.log(`Server running on PORT:${PORT}`);
});