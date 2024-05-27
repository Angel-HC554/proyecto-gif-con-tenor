// Definimos una función asíncrona getGifs que toma una categoría como argumento
export const getGifs = async(category) =>{
    // Construimos la URL para la API de Tenor con la categoría y un límite de 10 imágenes
    const url =
    `https://tenor.googleapis.com/v2/search?q=${category}&key=AIzaSyBQW-yzSAFrfZDuT6HNUJc1ikLuRlfHups&limit=10`;
    //Hacemos una peticion a la API de Tenor
    const resp = await fetch(url);
    //Extraemos los datos de la respuesta en formato JSON
    const {results} = await resp.json();

    //Mapeamos los datos a un nuevo arreglo de objetos con id,titulo y url de cada imagen
    const gifs = results.map( img => ({
        id: img.id,
        title: img.title,
        url: img.media_formats.gif.url
    }));

    //Devolvemos el arreglo de objetos
    return gifs;
}

//Ahora estoy consumiendo la api de Tenor, en lugar de la de giphy