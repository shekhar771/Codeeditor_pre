import express from 'express'
const router = express.Router()

import Redis from "ioredis";

const redis = new Redis({
  host: process.env.REDIS_HOST || "redis",
  port: Number(process.env.REDIS_PORT) || 6379,
  password: process.env.REDIS_PASSWORD,

});


import { Queue } from "bullmq";


const myQueue = new Queue("myQueue", { connection: redis });

async function addJob(job: { name: any; }) {
//   const options = { repeat: { every: 5000 } };
  await myQueue.add(job.name, job);
  welcomeMessage();
}

export const welcomeMessage = () => {
  console.log("Sending a welcome message every few seconds");
};


//  send request to redis
router.get(
  '/',
  async (req, res, next) => {
    await addJob({ name: 'print("o")' });

    res.send('Job added to the queue');
    next()
  }
)

export default router
