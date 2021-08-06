const path = require('path')
const { app, BrowserWindow, ipcMain, contextBridge } = require('electron')

const text = "text"
const printText = () => console.log(`out ${text}`)
contextBridge.exposeInMainWorld('myAPI', {
  doAThing: () => {
    console.log(`inner ${text}`)
    printText()
  }
})

ipcMain.handle('hello', () => "world")

ipcMain.handle('dark-mode:system', () => {
  nativeTheme.themeSource = 'system'
})
}

app.whenReady().then(() => {
  const win = new BrowserWindow({
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    },
    width: 800,
    height: 600
  })

  win.loadURL('https://cav.receita.fazenda.gov.br/autenticacao/login')
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})