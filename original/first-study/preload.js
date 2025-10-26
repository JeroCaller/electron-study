const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('versions', {
  node: () => process.versions.node,
  chromium: () => process.versions.chrome,
  electron: () => process.versions.electron,
  myCustomFeature: () => ipcRenderer.invoke('my-custom-feature')
  // 함수 뿐만 아니라 변수도 정의 및 노출 가능.
})