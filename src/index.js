const { app, BrowserWindow } = require('electron')

app.whenReady().then(() => {
  const win = new BrowserWindow({
    width: 800,
    height: 600
  })

  win.loadURL('https://cav.receita.fazenda.gov.br/autenticacao/login')
})
