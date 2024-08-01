const merge = require('merge')
const ts_preset = require('ts-jest/jest-preset')
const dynamodb_preset = require('@shelf/jest-dynamodb/jest-preset')

module.exports = merge.recursive(ts_preset, dynamodb_preset)
