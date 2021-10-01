const express = require('express')
const expressGraphQL = require('express-graphql').graphqlHTTP;

const app = express();

//Apollo Server/ express graphql backend server

app.use('/graphql', expressGraphQL({
    graphiql : true
}))


app.listen(4000, () => {
    console.log('Listening')
})