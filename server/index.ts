import express from 'express'
import cors from 'cors'
import multer from 'multer'
import fs from 'fs'
import { resolve } from 'path'

const app = express()
const upload = multer({
  dest: resolve(process.cwd(), './tmp')
})

app.use(upload.any())
app.use(cors())

const port = 8000

app.get('/upload', (req, res) => {

  res.send({
    data: 'It\'s OK.'
  })
})

app.post('/upload', (req, res) => {
  let file = req.files?.[0]
  console.log(file)

  fs.renameSync('./tmp/' + file.filename, './tmp/' + file.originalname);//这里修改文件名。
  res.setHeader('Content-Type', 'application/json')
  res.send({
    status: 0,
    data: ''
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})