const {app, BrowserWindow} = require('electron');

let mainWindow;

const createWindow = () => {
    mainWindow = new BrowserWindow({
        width: 700,
        height: 140,
        useContentSize: true,
        autoHideMenuBar: true,
        resizable: false,
        show: false,
        webPreferences: {
            devTools: false
        }
    });

    mainWindow.loadFile('index.html');

    mainWindow.once('ready-to-show', () => {
        mainWindow.show();
    });

    mainWindow.on('closed', () => {
        mainWindow = null;
    })
};

app.on('ready', createWindow);

app.on('window-all-closed', () => {

    if (process.platform !== 'darwin') {
        app.quit();
    }

});

app.on('activate', () => {

    if (mainWindow === null) {
        createWindow();
    }

});
