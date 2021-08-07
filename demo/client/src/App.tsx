import React, { useEffect } from 'react'
import './App.css'
import { FileUploaderClient } from '../../../src'
import style from './index.module.scss'

function App() {
  useEffect(() => {
    // new FileUploaderClient().uploadFile()
  }, [])
  return (
    <div className="App">
      <input
        type="file"
        onChange={e => {
          const file1 = e.target.files![0]
          const data = new FormData()
          data.append('file1', file1)
          new FileUploaderClient({
            chunkSize: 5 * 1024 * 1024,
            requestOptions: {
              retryTimes: 2,
              initFilePartUploadFunc: async () => {},
              uploadPartFileFunc: async (chunk: Blob, index: number) => {},
              finishFilePartUploadFunc: async () => {}
            }
          }).uploadFile(file1)
        }}
      />
    </div>
  )
}

export default App
