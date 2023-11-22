import { Tables } from "@/components/project-components/tables";
import medanoWind from "../../public/image/medanoWind.png";
import arenaN from "../../public/image/arenaN.png";
import myCv from "../../public/image/myCv.png";
import myPort from "../../public/image/myPort.png";
import canaryW from "../../public/image/canaryW.png";
import multimedia from "../../public/image/multimedia.png";
import notas from "../../public/image/notas.png";
import nodeCrud from "../../public/image/nodeCrud.png";
export const projectsList=[
    <Tables 
    key={''}
    year={'2022'}
    project={'Multimedia'}
    technologies={'React'}
    image={multimedia}    
    />,
    <Tables 
    key={''}
    year={'2022'}
    project={'Node - Mongo CRUD'}
    technologies={'Express, Mongo'}
    image={nodeCrud}    
    />,
    <Tables 
    key={''}
    year={'2022'}
    project={'Notes App'}
    technologies={'React, Express, Mongo'}
    image={notas}    
    />,
    <Tables 
    key={''}
    year={'2023'}
    project={'Weather App'}
    technologies={'React, FastAPI, Docker'}
    image={medanoWind}    
    />,
    <Tables 
    key={''}
    year={'2023'}
    project={'CV'}
    technologies={'React'}
    image={myCv}    
    />,
    <Tables 
    key={''}
    year={'2023'}
    project={'Arena Negra Restaurante'}
    technologies={'NextJs, Docker'}
    image={arenaN}    
    />,
    <Tables 
    key={''}
    year={'2023'}
    project={'Weather App'}
    technologies={'Dart, Flutter'}
    image={canaryW}    
    />,   
    <Tables 
    key={''}
    year={'2023'}
    project={'MyPortfolio'}
    technologies={'NextJS, Docker'}
    image={myPort}    
    />,      
];