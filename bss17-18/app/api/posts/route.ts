import axios, { AxiosResponse } from "axios"
import fs from 'fs';
import { NextResponse } from "next/server";
import path from "path";


export const GET = async () => {
    const filePath = path.join(process.cwd(), 'database/posts.json')
    const data = fs.readFileSync(filePath, 'utf8');
    const posts = JSON.parse(data);
    return NextResponse.json(posts);
}