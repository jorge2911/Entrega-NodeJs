import { db } from "../data/data.js";
import {  doc, 
          getDoc, 
          collection, 
          getDocs, 
          setDoc, 
          addDoc, 
          updateDoc, 
          deleteDoc, 
  } from "firebase/firestore";

// =====================================
// Obtener un producto por ID
// =====================================
export function obtenerProducto(id){
  return new Promise(async (res, rej) => {
    try{
      const docRef = doc(db, "products", id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        console.log("Snap data: ", docSnap)
        console.log("Document ID:", docSnap.id);
        console.log("Document data:", docSnap.data());
        res({ id: docSnap.id, ...docSnap.data() }) //devuelve Id + datos
      } else {
        console.log("Documento no encontrado!!!");
        res()
      }
    }catch(error){
      console.log(error)
      rej(error)
    }
  })
}
// =====================================
// Obtener TODOS los productos
// =====================================  
export function obtenerProductos(){
  return(
    new Promise(async (res, rej) => {
      try{
        const querySnapshot = await getDocs(collection(db, "products"));
        console.log("Snap completa: ", querySnapshot)
        const productos = []
        querySnapshot.forEach((doc) => {
         
          console.log(doc.id, " => ", doc.data());
          productos.push({...doc.data(), id: doc.id}) 
        });
        console.log(productos)
        res(productos)
      }catch(error){
        console.log(error)
        rej(error)
      }
    })
  )
}

// =====================================
// Agregar un nuevo producto
// =====================================
export function agregarProducto(producto){
return(
    new Promise(async (res, rej) => {
        try{
          const docRef = await addDoc(collection(db, "products"), producto);
          console.log("Doc ID: ", docRef.id, "Producto: ", docRef)
          res({...producto, id: docRef.id})
        }catch(error){
          console.log(error)
         rej(error)
        }
    })
 )
}

// =====================================
// Actualizar un producto existente
// =====================================
/* export function actualizarProducto(id, producto){
  return(
    new Promise(async (res, rej) => {
      try{
        await updateDoc(doc(db, "products", id), {
          ...producto
        })
        console.log("producto actualizado")
        res({id, ...producto})
      }catch(error){
        console.log(error)
        rej(error)
      }
    })
  )
}
*/
// =====================================
// Actualizar un producto existente
// =====================================
export function actualizarProducto(id, producto) {
  return new Promise(async (res, rej) => {
    try {
      const ref = doc(db, "products", id);
      const snap = await getDoc(ref);

      if (!snap.exists()) {
        return rej(new Error("El producto no existe"));
      }

      await updateDoc(ref, {
        ...producto
      });

      console.log("producto actualizado");

      res({
        id,
        ...snap.data(),
        ...producto
      });

    } catch (error) {
      console.log(error);
      rej(error);
    }
  });
}


// =====================================
// Eliminar un producto
// =====================================
export function eliminarProducto(id){
return(
    new Promise(async (res, rej) => {
      try{
        await deleteDoc(doc(db, "products", id));
        console.log("Producto eliminado")
        res()
      }catch(error){
        console.log(error)
        rej(error)
      }
    })
  )
}
