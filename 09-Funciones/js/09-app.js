const reproductor = {
    reproducir: function(id) {
        console.log(`Reproduciendo cancion con el id ${id}...`);
    },
    pausar: function(){
        console.log('Pausando...')
    },
    borrar: function(id){
        console.log(`Borrando cancion... ${id}`)
    },
    crearPlaylist: function(nombre){
        console.log(`Creando la Playlist de ${nombre}`);
    },
    reproducirPlaylist: function(nombre){
        console.log(`reproduciendo Playlist de ${nombre}`);
    }
}

reproductor.reproducir(30);
reproductor.reproducir(20);
reproductor.pausar();
reproductor.borrar(30);
reproductor.crearPlaylist('Hetor Lavoe');
reproductor.crearPlaylist('Luis Silva');
reproductor.reproducirPlaylist('Luis Silva');