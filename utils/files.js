const fs = require('fs')
const lineReader = require('readline')

const checkAccess = filepath => {
  fs.access(filepath, fs.constants.F_OK | fs.constants.W_OK, (err) => {
    if (err) {
      console.error(`${filepath} ${err.code === 'ENOENT' ? 'does not exist' : 'is read-only'}`)
    } else {
      console.log(`${filepath} exists, and it is writable`)
    }
  })
}

const lineCount = async (filepath) => {
  const data = await fs.readFileSync(filepath)
  const res = data.toString().split('\n').length
  return res - 1
}

const fileLineReader = (filepath) => {
  const rl = lineReader.createInterface({
    input: fs.createReadStream(filepath),
    crlfDelay: Infinity
  })
  rl.on('line', (line) => {
    console.log(`Line from file: ${line}`)
  })
}

module.exports = { lineCount, checkAccess, fileLineReader }
