import process, { exit } from "process";
import { parseArgs } from "util";
import dotenv from "dotenv";

let mode = "local";
let envLoaded = {};

if(process.env.MODE !== "test") {
	const args = parseArgs({
		options: {
			mode: {
				type: "string",
				default: "local"
			}
		}
	});
	
	mode = args.values.mode || mode;
	const envFile = `.env.${mode}`;

	console.info("[Env] Loading file: ", envFile);

	envLoaded = dotenv.config({
		path: envFile,
	});
	
	if(envLoaded.error) {
		console.error(`[Env] Failed to load ${envFile}`);
		exit(1);
	}
}

export { mode as ENVIRONMENT }
export default envLoaded;