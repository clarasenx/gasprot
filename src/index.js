import { TuyaContext } from "@tuya/tuya-connector-nodejs";
import "dotenv/config";
import express from "express";

const app = express();

const context = new TuyaContext({
  baseUrl: "https://openapi.tuyacn.com",
  accessKey: process.env.ACCESS_KEY,
  secretKey: process.env.SECRET_KEY,
});

const deviceID = process.env.DEVICE_ID;

app.get("", async (req, res) => {
  const devicedetail = await context.device.detail({
    device_id: deviceID,
  });
  console.log(devicedetail);

  res.send(process.env.TEST);
});

app.listen(5000, () => console.log("rodando"));
