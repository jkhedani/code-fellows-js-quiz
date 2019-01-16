// What output should we expect in the console?
function Parse(json) {
  return new Promise((resolve, reject) => {
    try {
      const s = JSON.parse(json)
      resolve(s)
    } catch (e) {
      reject(e)
    }
  })
}

const json = "{ key: 'value' }"
Parse(json)
  .then(res => {
    console.log(res)
  })
  .catch(e => {
    console.error("error")
  })