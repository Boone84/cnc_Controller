const { app, BrowserWindow } = require('electron');
const path = require('path');


function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'), // Ensure you have the correct path to your preload script
            contextIsolation: true,
            enableRemoteModule: false, // It's recommended to keep remote module disabled for security reasons
        },
    });

    win.loadFile('index.html'); // Load your HTML file
}

app.whenReady().then(createWindow);
