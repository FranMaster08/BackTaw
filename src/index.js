const app = require('./app')
const port = process.env.PORT || 3000
const {connect} = require('./database/config')
app.listen(port,async()=>{
    console.log(`listening on port ${port}`);
    await connect.connect()
})