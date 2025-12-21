import { Worker } from "bullmq";
import Redis from "ioredis";

const redis = new Redis({
  host: process.env.REDIS_HOST || "redis",
  port: Number(process.env.REDIS_PORT) || 6379,
  password: process.env.REDIS_PASSWORD,
});


const worker = new Worker(
  "myQueue",
  async (job) => {
    console.log("📥 Processing job:", job.id, job.name);
    console.log("📦 Job data:", job.data);

    if (job.name === "welcomeMessage") {
      console.log("👋 Sending welcome message...");
    }

    return { success: true };
  },
  { connection: redis }
);

worker.on("completed", (job) => {
  console.log(`✅ Job ${job.id} completed`);
});

worker.on("failed", (job, err) => {
  console.error(`❌ Job ${job?.id} failed`, err);
});