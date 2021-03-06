const debug = require('debug')
const path = require('path')
const definitions = require('./definitions')
const { packherdRequire } = require('../../../')
const entryFile = require.resolve('./lib/entry')

const logDebug = debug('packherd:debug')

function getModuleKey(moduleRelativePath, moduleUri) {
  logDebug({ moduleRelativePath, moduleUri })
  return moduleUri
}

const projectBaseDir = path.dirname(entryFile)
packherdRequire(projectBaseDir, {
  diagnostics: true,
  moduleDefinitions: definitions,
  getModuleKey,
})
