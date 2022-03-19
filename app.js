const express = require("express")
const path = require("path");

const app = express()
const port = 80

let USERS = []

app.use(express.static(path.join(__dirname, 'public')));

app.get("/", (req, res) => {
  res.send("Hola mundo")
})

app.get("/auth/register/:nombre/:correo/:apellido/:contrasenna", (req, res) => {

  let success = true

  for (let i=0; i<USERS.length; i++) {
    if (req.params.correo === USERS[i].correo) {
      res
.send("Registro fallido")
        .status(400)

      success = false
      return
    }
  }

  if (success) {
    USERS.push({
      nombre: req.params.nombre,
      correo: req.params.correo,
      apellido: req.params.apellido,
      contrasenna: req.params.contrasenna
    })



    res
      .send("Registro exitoso")
      .status(200)
  }

  console.log(USERS)
})

app.listen(port, () => {
  console.log("Escuchando en ", port)
})
