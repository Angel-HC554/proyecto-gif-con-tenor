import { useState } from "react";
import { AddCategory, GifGrid} from "./components";

export const ProyectoGif = () =>{
//Usando el Hook useState (función que permite agregar estado de React a los componentes funcionales)
//Para evitar el posible error de Javascript por no definir un valor inicial, se le pone un arreglo que tenga 'One Punch' como valor inicial
    const [categories, setCategories] = useState(['Dragon ball gt']);
    // Definimos una función onAddCategory que toma un argumento newCategory
    const onAddCategory = (newCategory) =>{
        // Si newCategory ya está en la lista de categorías, no hacemos nada y salimos de la función
        if (categories.includes(newCategory)) return;
        // Si newCategory no está en la lista de categorías, la agregamos al principio de la lista
        setCategories([newCategory, ...categories]);
    };

    // Devolvemos el JSX que se renderizará
    return(
    <>
        <div className="Header-autor"><h4>Made by Luis Angel Hoil Canche/Using Tenor API</h4></div>
        <h1>ProyectoGif</h1>
        {/* // Renderizamos el componente AddCategory y le pasamos una función que 
        se activará cuando se agregue una nuevacategoría */}
        <AddCategory onNewCategory={(value) => onAddCategory(value)} />
        {/* // Mapeamos las categorías a componentes GifGrid, cada uno con una clave única y una categoría */}
        {categories.map((category) => (
            <GifGrid key={category} category={category}/>
        ))}
    </>
);
};
