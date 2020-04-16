//****Product Model**** using classes for files (not using mongoose)

const products =[]

module.exports = class Product{
    //constructor
    constructor(t){
        this.title = t;
    }

    //Method: store products in array
    save(){
        products.push(this);
    }

    //method: retrive all products
    //static method can directly be called on class not object
    static fetchAll(){
        return product
    }
}


