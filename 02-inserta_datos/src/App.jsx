const persona = {
  nombre : 'Julio Aguilar Carmona',
  edad : 44,
  fecha_nacimiento: '11/03/79',
  lugar_nacimiento: 'Tuxtepec, Oaxaca',
  signo: 'Piscis',
  profesion: 'Docente',
  pasatiempos: [
    'Programar',
    'Leer',
    'Videojuegos',
    'Tocar Guitarra',
    'Cocinar',
    'Reprobar alumnos',
  ],
}
function App() {
  return (
    <div>
      <h1>Información Personal</h1>
      <hr />
      <ul>
        <li>Nombre: {persona.nombre}</li>
        <li>Edad: {persona.edad}</li>
        <li>Fecha de Nacimiento: {persona.fecha_nacimiento}</li>
        <li>Lugar de Nacimiento: {persona.lugar_nacimiento}</li>
        <li>Signo: {persona.signo}</li>
        <li>Profesión: {persona.profesion}</li>
        <li>Pasatiempos:
          <ul>
            {
              persona.pasatiempos.map((pasatiempo) => {
                return <li key={pasatiempo}>
                        {pasatiempo}
                      </li>
              })
            }
            {/* <li>{persona.pasatiempos[0]}</li>
            <li>{persona.pasatiempos[1]}</li>
            <li>{persona.pasatiempos[2]}</li>
            <li>{persona.pasatiempos[3]}</li>
            <li>{persona.pasatiempos[4]}</li> */}
          </ul>
        </li>
      </ul>
    </div>
  )
}

export default App
