const express = require('express');
const bodyParser = require('body-parser');
const { graphqlHTTP } = require('express-graphql');
const {} = require('graphql');

const app = express()

app.use(bodyParser);

app.use('/graphql', graphqlHTTP({
    schema: null,
    rootValue: {}
}))

app.listen(3000);