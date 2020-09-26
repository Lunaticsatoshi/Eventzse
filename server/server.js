const express = require('express');
const bodyParser = require('body-parser');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');

const app = express()

app.use(bodyParser);

app.use('/graphql', graphqlHTTP({
    schema: buildSchema(
        `
        type RootQuery {
            events: [String!]!
        }
        type RootMutations{
            createEvent
        }
        schema{
            query:
            mutation:
        }
        `
    ),
    rootValue: {}
}))

app.listen(3000);