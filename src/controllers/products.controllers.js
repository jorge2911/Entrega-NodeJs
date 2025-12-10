/*import {
    getAllProductsService,
    getProductByIdService
} from "../services/products.services.js"*/
import * as productService from "../services/products.services.js"

//        Crear producto  -------------------------------------
export const addProduct = async (req, res) => {
    try{
        // console.log("paso1")
        const product = req.body;
        const newProduct = await productService.addProductService(product)
        res.status(200).json(newProduct);
    }catch (error){

        console.error("Error en addProduct:", error);
        return res.status(500).json({ error: "Error interno del servidor" });
    }
};

// Eliminar producto --------------------------------
export const deleteProduct = async (req, res) => {
    try{
        const id = req.params.id;
        if(id){
            await productService.deleteProductService(id)
            res.sendStatus(200)            //status(200)//.send()
        }else{
            return res.status(400).json({ error: "ID requerido" });
        }
    }catch(error){
        return res.status(500).json({ error: "Error interno del servidor" });
    }
};

// Editar producto --------------------------------
export const editProduct = async (req, res) => {
    try{
        const id = req.params.id
        const product = req.body
       
        if (id && product){
            const newProduct = await productService.editProductService(id, product)
            res.status(200).json(newProduct);
        }else{
            res.status(400)
        }
    }catch(error){
        res.status(500).send()
    }
}
// TODOS los productps
export const getAllProducts = async (req, res) => {
    try{
        console.log("paso1")
        const products = await productService.getAllProductsService()
        console.log(products)
        res.status(200).json(products);
    }catch(error){
        res.status(500).send()
    }

};
// PRODUCTOS x ID
export const getProductById = async (req, res) => {
    try{
        const id = req.params.id;
        if (id){
            const product = await productService.getProductByIdService(id)
            if (product) {
                res.status(200).json(product);
            } else {
                res.status(404).json({ message: 'Producto no encontrado' });
            }
        }else{
            res.status(400).json(error)
        }
    }catch(error){
        res.status(500).send()
    }

};
