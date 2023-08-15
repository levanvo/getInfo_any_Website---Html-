import express from "express";
import cors from "cors";
import { ok } from "./handle";


const app=express();
app.use(express.json());
app.use(cors());
app.use(ok)
export const viteNodeApp=app;