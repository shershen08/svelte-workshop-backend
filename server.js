const express = require('express')
const app = express()
const port = 3000

const questions = require('./mocks/questions.js')



// endpoint POST api/questions

// endpoint POST api/questions/<ID>/comment

// endpoint GET api/tags

// endpoint POST api/tags

// endpoint GET api/users


// endpoint POST api/login


app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/questions', (req, res) => {
    res.send(questions)
})

app.listen(port, () => console.log(`Server listening on port ${port}!`))