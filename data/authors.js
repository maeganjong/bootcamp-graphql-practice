const casual = require('casual')
const { hashPassword } = require('../src/lib/auth')
const addressesData = require('./addresses')

const hash = '$2a$10$ACb1lJ75TI0gmpYEtKiQOuHTl8DuqhFZLcFS3dhoQZfzUxMghRoAK'

casual.define('author', addressId => ({
  id: casual.uuid,
  email: casual.email,
  firstName: casual.first_name,
  lastName: casual.last_name,
  age: casual.integer(20, 100),
  numBooksPublished: casual.integer(1, 4),
  password: hash,
  addressId,
}))


const authorsData = []

for (let i = 0; i < 10; ++i) {
  const addressId = casual.random_element(addressesData).id
  authorsData.push(casual.author(addressId))
}

module.exports = authorsData
