it('two plus two', () => {
  const value = 2 + 2
  expect(value).toBeGreaterThan(3)
  expect(value).toBeGreaterThanOrEqual(3.5)
  expect(value).toBeLessThan(5)
  expect(value).toBeLessThanOrEqual(4.5)

  // toBe and toEqual are equivalent for numbers
  expect(value).toBe(4)
  expect(value).toEqual(4)
})

it('there is no I in team', () => {
  expect('team').not.toMatch(/I/)
})

it('but there is a "stop" in Christoph', () => {
  expect('Christoph').toMatch(/stop/)
})
