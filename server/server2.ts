import express from 'express'
import http, { request } from 'http'
import fs from 'fs'
import path from 'path'
import FormData from 'form-data'

const app = express()

const port = 7777

app.listen(port, () => {
  const stream = fs.createReadStream(path.resolve(process.cwd(), './tmp/avator.jpeg'), 'utf-8')

  const formData = new FormData()
  formData.append('file', stream)
  
  const req = http.request({
    host: 'localhost',
    port: '8000',
    method: 'POST',
    protocol: 'http:',
    path: '/upload',
    headers: formData.getHeaders()
  }, (res) => {
    console.log(res)
  })

  formData.pipe(req)  
})