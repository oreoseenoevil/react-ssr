import envLoaded from "./lib/env";

import express from 'express';
import cors from 'cors';
import compression from "compression";
import process from "process";

import path, { dirname } from "path";
import { fileURLToPath } from "url";

if(envLoaded.parsed)
	console.info("[Env] Environment variables loaded");
else
	console.error("[Env] Environment variables failed to load");

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();

// Setup middlewares
app.use(cors());
app.use(compression());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Static
app.use("/", express.static(path.join(__dirname, "..", "dist")));
app.use("/static", express.static(path.join(__dirname, "static")));

app.get('/api/data', (req, res) => {
  res.json({ message: 'Hello from the server!' });
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
	console.log(`[Server] Server started on port: ${port}`);
});

export default app;
