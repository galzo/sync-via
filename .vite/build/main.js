"use strict";
var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
const electron = require("electron");
const path = require("path");
const express = require("express");
class Server {
  constructor() {
    __publicField(this, "app");
    this.app = express();
  }
  start() {
    this.app.get("/test", (req, res) => {
      res.send("hello there!");
    });
    this.app.listen(3e3, () => {
      fsdfsdf;
      console.log("server: server running at port 3000");
    });
  }
}
if (require("electron-squirrel-startup")) {
  electron.app.quit();
}
const setupServerAndClient = () => {
  createServer();
  createWindow();
};
const createServer = () => {
  const server = new Server();
  server.start();
};
const createWindow = () => {
  const mainWindow = new electron.BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, "preload.js")
    }
  });
  {
    mainWindow.loadURL("http://localhost:5173");
  }
  mainWindow.webContents.openDevTools();
};
electron.app.on("ready", setupServerAndClient);
electron.app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    electron.app.quit();
  }
});
electron.app.on("activate", () => {
  if (electron.BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
