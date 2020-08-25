
const opts = {
    descripcion:{
        demand:true,
        alias:'d'
    },
    completado:{
        alias:'c',
        default:true
    }
};
const descripcion = {
    descripcion:{
        demand:true,
        alias:'d'
    }
};


const argv=require('yargs')
    .command('actualizar', 'Actualiza el estado de una tarea completada',opts)
    .command('crear', 'Crea una nueva tarea',{
            descripcion
        })
    .command('borrar', 'Borra una tarea',{
            descripcion
        })
    .help()
    .argv;

module.exports ={
    argv
}