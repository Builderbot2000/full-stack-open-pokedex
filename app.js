const express = require('express')
const app = express()

const LOCAL_PORT = 3001

// Heroku dynamically sets a port
const PORT = process.env.PORT || LOCAL_PORT

app.use(express.static('dist'))

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`server started on port ${LOCAL_PORT}`)
})
