const { app, BrowserWindow, Menu } = require('electron')
const path = require('path')

// Required for microphone / MediaRecorder to work in Electron
app.commandLine.appendSwitch('enable-features', 'MediaStream')
app.commandLine.appendSwitch('use-fake-ui-for-media-stream') // skips OS permission dialog in dev

let mainWindow

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 480,
    height: 820,
    minWidth: 320,
    minHeight: 500,
    titleBarStyle: 'hiddenInset',
    vibrancy: 'under-window',
    trafficLightPosition: { x: 16, y: 16 },
    backgroundColor: '#0e0e0e',
    resizable: true,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  })

  mainWindow.loadFile(path.join(__dirname, 'index.html'))

  // Fix issue 3 — red X (close button) fully quits the app on Mac
  mainWindow.on('close', () => {
    app.quit()
  })

  mainWindow.on('closed', () => {
    mainWindow = null
  })

  const menu = Menu.buildFromTemplate([
    {
      label: 'BrainDump',
      submenu: [
        { label: 'About BrainDump', role: 'about' },
        { type: 'separator' },
        { label: 'Quit', accelerator: 'Cmd+Q', click: () => app.quit() },
      ],
    },
    {
      label: 'Edit',
      submenu: [
        { role: 'undo' }, { role: 'redo' }, { type: 'separator' },
        { role: 'cut' }, { role: 'copy' }, { role: 'paste' }, { role: 'selectAll' },
      ],
    },
    {
      label: 'View',
      submenu: [
        { role: 'reload' },
        { role: 'toggleDevTools' },
      ],
    },
  ])
  Menu.setApplicationMenu(menu)
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  app.quit()
})

app.on('activate', () => {
  if (mainWindow === null) createWindow()
})