//****Product Model**** using classes for files (not using mongoose)

//Working with files
const fs = require('fs');

//defining file path to store data
const path = require('path');
const rootDir = require('../util/path'); //gives current path(Helper func created)

/************************************************/
/***Storing Data to Files ****/
const p = path.join(rootDir, 'data', 'products.json'); //p='/data/products.json'

//Reading file content
const getProductsFromFile = cb =>{
    //readfile
    fs.readFile(p, (err, fileContent) =>{
        //if error return empty array
        if(err){
            cb([]);
        }else{
            //parsefile content JSON->String
            cb(JSON.parse(fileContent));
        }
    });
};
/************************************************/

//const products =[]

/********MODEL ***********************************/
module.exports = class Product{
    //constructor
    constructor(t){
        this.title = t;
    }

    //Method: store products in array
    save(){
        //push product in array
        //products.push(this);

        /**Saving Data to Files **/
        getProductsFromFile(products=>{
            products.push(this); 
            //convert product array to json + save to file:save back to file 
            fs.writeFile(p, JSON.stringify(products), err => {
                console.log(err);
            }); //String->JSON
        });
    }
        
    //method: retrive all products
    //static method can directly be called on class not object
    static fetchAll(cb){
        //return product details -> gives prods (Details)for Shop.js 
        //return products;

        getProductsFromFile(cb);
    }
}


