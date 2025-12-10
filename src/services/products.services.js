import {
  actualizarProducto,
  agregarProducto,
  eliminarProducto,
  obtenerProducto,
  obtenerProductos
} from "../models/products.models.js";

export const addProductService = async (product) => {
  try {
    const newProduct = await agregarProducto(product);
    return newProduct;
  } catch (error) {
    throw error;
  }
};

export const deleteProductService = async (id) => {
  try {
    await eliminarProducto(id);
    return { message: "Producto eliminado correctamente" };
  } catch (error) {
    throw error;
  }
};

export const editProductService = async (id, product) => {
  try {
    const updatedProduct = await actualizarProducto(id, product);
    return updatedProduct;
  } catch (error) {
    throw error;
  }
};

export const getAllProductsService = async () => {
  try {
    const productos = await obtenerProductos();
    return productos;
  } catch (error) {
    throw error;
  }
};

export const getProductByIdService = async (id) => {
  try {
    const product = await obtenerProducto(id);
    return product;
  } catch (error) {
    throw error;
  }
};


/* import {actualizarProducto, 
  agregarProducto,
   eliminarProducto, 
   obtenerProducto, 
   obtenerProductos
  } from "../models/products.models.js";

export const addProductService = async (product) => {
  return(
    new Promise(async (res, rej) => {
      try{
        const newProduct = await agregarProducto(product)
        res(newProduct)
      }catch(error){
        rej(error)
      }
    })
  )

}

export const deleteProductService = async (id) => {
  console.log(id)
  return(
    new Promise(async (res, rej) => {
      try{
        await eliminarProducto(id)
        console.log("despues de eliminar el producto")
        res()
      }catch(error){
        rej(error)
      }
    })
  )
}

export const editProductService = async (id, product) => {
  return(
    new Promise(async (res, rej) => {
      try{
        const newProduct = await actualizarProducto(id, product)
        res(newProduct)
      }catch(error){
        rej(error)
      }
    })
  )
}

export const getAllProductsService = async () => {
  return(
    new Promise(async (res,rej)=> {
      console.log("test dentro de servicio")
      try{
        const productos = await obtenerProductos()
        res(productos);
      }catch(error){
        rej()
      }
    })
  )
};

export const getProductByIdService = async (id) => {
  return(
    new Promise(async(res, rej) => {
      try{
        const product = await obtenerProducto(id)
        res(product)
      }catch(error){
        rej(error)
      }
    })
  )
};
*/