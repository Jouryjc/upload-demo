import express from 'express'
import cors from 'cors'
import multer from 'multer'
import { resolve } from 'path'

const app = express()
const upload = multer({
  dest: resolve(process.cwd(), './tmp')
})

app.use(upload.any())
app.use(cors())

const port = 8000

app.post('/upload', (req, res) => {
  console.log(req.files?.[0])

  res.setHeader('Content-Type', 'application/json')
  res.send({
    status: 0,
    data: ''
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})