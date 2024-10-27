// api/joke.js

import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
    // Path to the jokes folder where each joke is a separate .txt file
    const jokesDir = path.join(process.cwd(), 'jokes');

    // Get a list of all files in the jokes directory
    const jokeFiles = fs.readdirSync(jokesDir);

    // Select a random file from the list
    const randomFile = jokeFiles[Math.floor(Math.random() * jokeFiles.length)];

    // Read the content of the selected joke file
    const joke = fs.readFileSync(path.join(jokesDir, randomFile), 'utf8');

    // Set the response to return plain text
    res.setHeader("Content-Type", "text/plain");
    res.status(200).send(joke);
}
