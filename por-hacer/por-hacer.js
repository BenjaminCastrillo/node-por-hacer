
const fs=require('fs');
const colors =require('colors');
const { captureRejectionSymbol } = require('events');


let listadoPorHacer=[];

const guardarDB = ()=> {

    let data = JSON.stringify(listadoPorHacer);
    
    fs.writeFile('./db/data.json', data, (err) => {
        if (err) throw new Error('No se pudo grabar', err);
        else
        console.log('The file has been saved!');
      });
      return
}

const cargarDB=()=>{
    
    try{
        listadoPorHacer=require('../db/data.json');
    }catch{
        listadoPorHacer=[];
    }

}

const crear = (descripcion)=>{

    cargarDB();

    let porHacer ={
        descripcion,
        completado:false
    };
    listadoPorHacer.push(porHacer);
    guardarDB();
    return porHacer;


}

const getListado=()=>{

    cargarDB();
    return listadoPorHacer;
}

const actualizar = (descripcion,completado=true) =>{

    cargarDB();
    let index = listadoPorHacer.findIndex(tarea=>{
        return tarea.descripcion===descripcion

    });

    if (index!=-1){
        listadoPorHacer[index].completado=completado;
        guardarDB();
        return true;

    }else
    {
        return false;

    }
}
const borrar = (descripcion) =>{

    cargarDB();
    let index = listadoPorHacer.findIndex(tarea=>{
        return tarea.descripcion===descripcion

    });

    if (index!=-1){
        listadoPorHacer.splice(index,1);
        guardarDB();
        return true;

    }else
    {
        return false;

    }
}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}