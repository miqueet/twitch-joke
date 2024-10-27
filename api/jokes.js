import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
    const jokesDir = path.join(process.cwd(), 'jokes');
    const jokeFiles = fs.readdirSync(jokesDir);
    const randomFile = jokeFiles[Math.floor(Math.random() * jokeFiles.length)];
    const joke = fs.readFileSync(path.join(jokesDir, randomFile), 'utf8');

    res.setHeader("Content-Type", "text/plain");
    res.status(200).send(joke);
}
