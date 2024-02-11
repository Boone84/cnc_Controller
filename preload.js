const { contextBridge, shell } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
    openPath: (path) => shell.openPath(path)
});
