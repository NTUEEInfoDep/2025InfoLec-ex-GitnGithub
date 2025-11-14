import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import router from "./routes/api.js"

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

app.use("/api", router);

app.get("/", (_, res) => {
	return res.send({ message: "This is a sample server." });
});

app.listen(port, () => {
	console.log(`Server listening at http://localhost:${port}`);
});