const express = require('express')
const expressGraphQL = require('express-graphql').graphqlHTTP;
const schema = require('./schema/schema')

const app = express();

//Apollo Server/ express graphql backend server

app.use('/graphql', expressGraphQL({
    schema,
    graphiql : true
}))


app.listen(4000, () => {
    console.log('Listening')
})