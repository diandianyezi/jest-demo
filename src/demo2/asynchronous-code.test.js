const { fetchData, fetchDataError, fetchDataError2 } = require('./asynchronous-code')

test('test promise resolve', () => {
  return fetchData(4).then(res => {
    expect(res).toBe('test promise resolve')
  })
})

test('test promise reject', async () => {
  // expect.assertions(1)
  try {
    await fetchData(2)
  } catch(e) {
    expect(e).toMatch('reject')
  }
})

test('test promise error', () => {
  return fetchDataError().then(res=> {}, err => {
    expect(err).toMatch('error')
  })

})

test('test promise catch', async () => {
  try {
    await fetchDataError()
  } catch(e) {
    console.info('catch')
    expect(e).toMatch('error')
  }
})
test('test promise catch throw error', async () => {
    expect(() => fetchDataError2()).toThrow()
})