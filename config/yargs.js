const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'descripcion de la tarea por hacer'
};

const completado = {
    alias: 'c',
    default: true,
    desc: 'Marca como completada o pendiente la tarea '
};


const argv = require('yargs')
    .command('crear', 'crea una tarea por hacer', { descripcion })
    .command('actualizar', 'actualiza el estado completado de una tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'elimina  una tarea por hacer', { descripcion })
    .help()
    .argv;


module.exports = {
    argv
}