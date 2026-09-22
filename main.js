const { app, BrowserWindow, ipcMain } = require("electron");

function createWindow() {
    const win = new BrowserWindow({
        width: 320,
        height: 500,
        minWidth: 320,
        minHeight: 450,
        frame: false,
        resizable: true,
        transparent: true,
        webPreferences: {
            nodeIntegration: false,
            contextIsolation: true,
            preload: __dirname + "/preload.js"
        }
    });

    win.loadFile("index.html");

    ipcMain.on("window-close", () => {
        win.close();
    });

    ipcMain.on("window-minimize", () => {
        win.minimize();
    });

    ipcMain.on("window-maximize", () => {
        if (win.isMaximized()) {
            win.unmaximize();
        } else {
            win.maximize();
        }
    });
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
});