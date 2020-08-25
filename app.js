
const argv=require('./config/yargs').argv;
const { crear, getListado, actualizar, borrar }=require('./por-hacer/por-hacer');
const colors =require('colors');

let comando = argv._[0];



switch (comando){
    case 'crear':
        let tarea = crear(argv.descripcion);
        break;
    case 'listar':

        let tareas =getListado();

        console.log('=====Tareas por hacer ======'.green)
        tareas.forEach(element => {
            
            console.log(element.descripcion.blue+' Completado: '+element.completado)

        });
        console.log('================================='.green)

        break;
    case 'actualizar':
        if (!actualizar(argv.descripcion,argv.completado)){
            console.log('Tarea no encontrada');
        };
        break;
    case 'borrar':
        let borrado= borrar(argv.descripcion)
        console.log(borrado);
        break;
    default:
        console.log('comando no reconocido');
}