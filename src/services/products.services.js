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
