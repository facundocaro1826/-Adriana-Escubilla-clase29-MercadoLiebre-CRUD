const { loadData, saveData } = require('../../data')  

module.exports = (req, res)=>{
    const {name, price, discount, description, category} = req.body;
    
   
    const image = req.file;   // espera la imagen
    
    const products = loadData();
    
    const newId = products[products.length - 1].id + 1;

    const newProduct = {
        id: newId,
        name: name.trim(), 
        price: +price,  
        discount: +discount,
        description: description.trim(),
        category: category?.trim(),
        image: image ? image.filename : "default-image.png"
    };
    products.push(newProduct);
    saveData(products);
    
    res.redirect(`/productos/detalle/${newId}`)
}