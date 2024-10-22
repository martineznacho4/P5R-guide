const express = require("express");
const months = require("./data");
const cors = require('cors')

const app = express();
app.use(cors())

app.use(express.static('dist'))

app.get("/api/months",(request,response)=>{
    response.send(months.map((month) => (month.month)))
})

app.get("/api/:month", (request, response) => {
	response.send( months.find((month) => month.month === request.params.month))
});

app.get("/api/month/:id", (request, response) => {
	response.send( months.find((month) => month.id.toString() === request.params.id))
});

const PORT = 3001;
app.listen(PORT, () => {
	console.log(`server initialized on port: ${PORT}`);
});
