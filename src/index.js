import { TuyaContext } from "@tuya/tuya-connector-nodejs";
import "dotenv/config";
import express from "express";

const app = express();

const context = new TuyaContext({
  baseUrl: "https://openapi.tuyaus.com",
  accessKey: process.env.ACCESS_KEY,
  secretKey: process.env.SECRET_KEY,
});

const deviceID = process.env.DEVICE_ID;

app.get("", async (req, res) => {
  try {
    const response = await context.request({
      method: "POST",
      path: `/v1.0/devices/${deviceID}/commands`,
      body: {
        commands: [
          {
            code: "switch",
            value: false,
          },
        ],
      },
    });
    console.log(response);
  } catch (err) {
    console.log(err);
  }

  res.send(process.env.TEST);
});

app.listen(5000, () => console.log("rodando"));
