'use strict'
let parmas=process.argv[2]
let baseUrl=''
switch(parmas){
  case 'test':
    baseUrl = '"http://a.com"'
    break
  case 'prod':
    baseUrl = '"http://b.com"'
    break
  default:
    baseUrl = '"http://c.com"'
}
module.exports = {
  NODE_ENV: '"production"',
  baseUrl: baseUrl
}
