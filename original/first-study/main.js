import { app, BrowserWindow, ipcMain } from 'electron'
import path from 'path';
import { fileURLToPath } from 'url';

// 현재 실행되는 스크립트 파일의 위치 추출.
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })

  win.loadFile('index.html')
}

app.whenReady().then(() => {
  // ipcMain.handle 코드는 HTML 파일 로딩 전에 실행되도록 해야 한다. 
  // 따라서 createWindow() 호출문 전에 작성한다. 
  ipcMain.handle('my-custom-feature', () => '안녕하세요!');
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})

