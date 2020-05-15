const { app, BrowserWindow } = require('electron');

app.on('ready', () => {
  require('devtron').install();
  let mainWindow = new BrowserWindow({
    width: 1600,
    height: 1200,
    webPreferences: {
      nodeIntegration: true
    }
  });
  mainWindow.loadFile('index.html');
  mainWindow.webContents.openDevTools();  //打开开发者工具
  // let secondWindow = new BrowserWindow({
  //   width: 400,
  //   height: 300,
  //   webPreferences: {
  //     nodeIntegration: true
  //   },
  //   parent: mainWindow,
  // });
  // secondWindow.loadFile('second.html')
});
