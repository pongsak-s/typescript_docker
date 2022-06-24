import express, { Request, Response } from "express";

const app = express()

app.get("/", (req: Request, res: Response) => {
	return res.json({
		status: "success!" ,
	});
});

app.listen(4000, () => console.log("listening on port 4000"));

// reference https://www.google.com/search?q=deploy+typescript+on+docker&oq=deploy+typescript+on+docker&aqs=chrome..69i57j69i60l3.6060j1j7&sourceid=chrome&ie=UTF-8#kpvalbx=_XG61Yqf-CLrH3LUPlbWb4Aw20
