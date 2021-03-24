const express = require('express')
const app = express()
// all of the functions that we get from express are now in app
const cors = require('cors')
const PORT = 8000

app.use(cors())

let planets = {
  'mercury': {
    'distanceFromSun': '57,910,000 km',
    'type': 'terrestial',
    'funFact': 'A year in Mercury is 88 days, yet a Mercury day is 176 Earth days.'
  },
  'venus': {
    'distanceFromSun': '108,200,000 km',
    'type': 'terrestial',
    'funFact': 'Venus is the hottest planet in the solar system with an average surface temperature of 462°C (863°F).'
  },
  'earth': {
    'distanceFromSun': '149,600,000 km',
    'type': 'terrestial',
    'funFact': 'The lowest point on Earth is called Challenger Deep and at 10.9 km below sea level, it is further than the peak of Mount Everest.'
  },
  'mars': {
    'distanceFromSun': '227,940,000 km',
    'type': 'terrestial',
    'funFact': 'Mars has seasons like Earth, but they last twice as long.'
  },
  'jupiter': {
    'distanceFromSun': '778,330,000 km',
    'type': 'gas giant',
    'funFact': 'Jupiter’s Great Red Spot is an enormous storm that has been raging for over 300 years. This storm is so wide that three Earth’s would fit inside of it.'
  },
  'saturn': {
    'distanceFromSun': '1,424,600,000 km',
    'type': 'gas giant',
    'funFact': 'Saturn has 150 moons and smaller moonlets. All of these moons are frozen.'
  },
  'uranus': {
    'distanceFromSun': '2,873,550,000 km',
    'type': 'gas giant',
    'funFact': 'A collision may have caused the unusual tilt of Uranus. The theory is that an Earth-sized planet may have collided with Uranus which forced its axis to drastically shift.'
  },
  'neptune': {
    'distanceFromSun': '4,501,000,000 km',
    'type': 'gas giant',
    'funFact': 'Neptune\'s rings are very faint. They are most likely made up of ice particles and grains of dust with a carbon-based substance coating them.'
  },
  'pluto': {
    'distanceFromSun': '5,900,000,000 kilometers',
    'type': 'dwarf',
    'funFact': 'Pluto is about half the width of the United States.'
  },
  'unknown': {
    'distanceFromSun': 'unknown',
    'type': 'unknown',
    'funFact': 'unknown :('
  }
  // need fallback
}


app.get('/', (request, response) => {
  response.sendFile(__dirname + '/index.html')
})

app.get('/api/planets/:planetName', (request, response) => {
  const planetName = request.params.planetName.toLowerCase()
  console.log(planetName)
  if(planets[planetName]){
    response.json(planets[planetName])
  }else{
    response.json(planets['unknown'])
  }
})

app.listen(process.env.PORT || PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
