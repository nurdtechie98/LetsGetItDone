const router = require('express').Router()
const multer = require('multer')
const upload = multer({ dest: 'uploads/' }) // link relative to root dir
const path = require('path')
const { lineCount, checkAccess, fileLineReader } = require('../utils/files')

router.get('/uploadFile', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/views/fileUpload.html'))
})

router.post('/uploadSingle', upload.single('resume'), async (req, res) => {
  const filepath = path.join(__dirname, '..', req.file.path)
  // check access and existense (in this case obviously you can read/write)
  checkAccess(filepath)
  const lc = await lineCount(filepath)
  fileLineReader(filepath)
  res.status(200).send(`uploaded file has ${lc} number of lines`)
})

router.post('/uploadMultiple', upload.array('uploadedImages',10), (req, res) => {
  const files = req.files;
  console.log(files);
  res.status(200).send("uploaded");
})

module.exports = router
