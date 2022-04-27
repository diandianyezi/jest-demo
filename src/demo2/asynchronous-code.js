function fetchData(num) {
  return new Promise((resolve, reject) => {
    if(num > 3) {
      resolve('test promise resolve')
    } else {
      reject('test promise reject')
    }
  })
}

function fetchDataError() {
  return new Promise((resolve, reject) => {
    reject('error')
    // throw(new Error('err'))
  })
}

function fetchDataError2() {
    throw new Error('err')
}

module.exports = {
  fetchData,
  fetchDataError,
  fetchDataError2
}