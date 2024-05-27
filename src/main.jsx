// Importamos la biblioteca de React
import React from 'react'
// Importamos la biblioteca ReactDOM, que proporciona métodos específicos del DOM para React
import ReactDOM from 'react-dom/client'
// Importamos un componente llamado ProyectoGif desde otro archivo en el mismo directorio
import { ProyectoGif } from './ProyectoGif'
//Se importan los estilos que se encuentras en src "./ significa "
import './styles.css'

// Creamos un nuevo contenedor de raiz React en el elemento con el id 'root'
// y renderizamos el componente ProyectoGif en el
ReactDOM.createRoot(document.getElementById('root')).render(
  // React.StrictMode es un componente especial de React que comprueba si tu aplicación 
  // tiene problemas potenciales durante el desarrollo
  <React.StrictMode>
    {/*Aqui es donde se renderiza el componente ProyectoGif */}
    <ProyectoGif />
  </React.StrictMode>
)