require('dotenv').config()
const path = require('path')
const { app, BrowserWindow, ipcMain } = require('electron')

global.app = app
global.BrowserWindow = BrowserWindow
global.ipcMain = ipcMain

const preloadpath = path.join(__dirname, 'preload.js')
console.log(`preloadpath=${preloadpath}`)
const pkcs12Path = process.env.PKCS12_PATH
const pkcs12Pass = process.env.PKCS12_PASS
console.log(`pkcs12Path=${pkcs12Path}`)
console.log(`pkcs12Pass=${pkcs12Pass}`)

// app.importCertificate({
//   certificate: pkcs12Path,
//   password: pkcs12Pass
// }, result => {
//   console.log(`importCertificate result ${result}`)
// })

app.on('select-client-certificate', (event, webContents, url, list, callback) => {
  event.preventDefault()
  console.dir({ list })
  callback(list[0])
})

app.whenReady().then(() => {
  const win = new BrowserWindow({
    width: 400,
    height: 300,
    webPreferences: {
      preload: preloadpath
    }
  })

  // win.loadURL('https://cav.receita.fazenda.gov.br/autenticacao/login')
  win.loadFile(path.join(__dirname, 'index.html'))
})

// ipcMain.on('dark-mode:toggle', () => {
//   // a
// })

// app.on('select-client-certificate', (event, webContents, url, list, callback) => {
//   event.preventDefault()
//   console.dir({ event, webContents, url, list })

//   // escolhe o
//   callback(list[0])
// })

// app.commandLine.appendSwitch('client-certificate', path.join(__dirname, 'cert', 'orgamec.p12'))
