
import "./Proyectos.css";
import PCard from "../PCards/PCard";


export function Proyectos() {
  
  return (
    <>
    <div class="container container-fluid">
      

          <PCard  link="https://github.com/Josue-AMG/Web_Calculator" imagen='/calculator.png' titulo="🧮 Calculator Web" descripcion="Este proyecto  se basa en una calculadora web con JavaScript, el cual solo consta de las funcionalidades basicas de una calculadora, como  Suma, Resta, Multiplicacion y Divicion. Lo que utilice en este proyecto fue (React+Vite y JavaScrip)."></PCard>

          <PCard  imagen="/Cedulancia.png" link="https://github.com/Josue-AMG/Ask_YourDate" descripcion={"Este Proyecto integra una API con informaciones recolectadas de la JCE de la cual se extraen los datos mediante un Buscador que tiene la App Web, que cuando se pone la Cedula valida trae los datos al modelo de cedula virtual, Utilice React+Vite y TypeScript."} titulo={"🔍Ask YourDate🪪"}></PCard>

          <PCard  imagen="/Rick and Morthy .png" link="https://github.com/Josue-AMG/Rick_Morty_Page.git" titulo="👽 Rick Morty Page" descripcion="Este proyecto es una pagina enfocada en la serie 
          de TV (Rick and Morty), esta contiene tarjetas como esta, donde se muestran datos como, Imagen de el personaje, Nombre y un poco de informacion adicional sobre el personaje de la serie.  Este proyecto lo cree con Vite, utilice React y JavaScript Con sus Respectivos Styles de CSS, Tambien integra una API."></PCard>
 
          <PCard  imagen="/Portfolio.png" link="https://github.com/Josue-AMG/Rick_Morty_Page.git" titulo="🗃️My Portfolio🖇️" descripcion="Este Proyecto es totalmente de mi imaginacion, y todo esta creado con codigo puro, tanto los styles, como lo demas, no contiene bootstap ni nada que ayude con el tema de el orden, como pueden ver es un Portfolio que me surgio de la idea de ampliar mis gamas de proyectos, y lo hice porque vi que se recomendaba que un desarrollador tuviera una plataforma donde colgar sus proyectos, y que tambien se puede poner en el CV.
          Aqui utilizo React+Vite - CSS - JAVASCRIPT."></PCard>

    
    </div>
<center>👇</center> 
    </>
  );
}