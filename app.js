const express = require('express')
const app = express()

const path = require('path')

app.use(express.static(path.join(__dirname, 'public')))  //se puede prescidir de este termino __dirname,

app.listen(3030, ()  => {

    console.log('Servidor 3030 corriendo')

})

app.get('/', (req,res) => { //

    res.sendFile(path.join(__dirname,'./views/home.html'))  // mostrara por browser el archivo index.html en alojado en carpeta 'views'.
})
                                    // __dirname,'./views/index.html'  -> ruta ABSOLUTA.