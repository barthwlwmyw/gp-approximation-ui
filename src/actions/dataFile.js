import { ActionsObservable } from 'redux-observable'

import * as R from 'ramda'

export const LOAD_DATAFILE = 'LOAD_DATAFILE'
export const loadDatafile = (file) => ({
  type: LOAD_DATAFILE,
  file: file
})

export const PARSE_DATAFILE_SUCCESS = 'PARSE_DATAFILE_SUCCESS'
export const parseDatafileSuccess = (fileContent) => ({
  type: PARSE_DATAFILE_SUCCESS,
  fileContent
})

export const PARSE_DATAFILE_FAILURE = 'PARSE_DATAFILE_FAILURE'
export const parseDatafileFailure = (err) => ({
  type: PARSE_DATAFILE_FAILURE,
  err
})

export const parseDatafile = (file) => {
  return ActionsObservable.create((observable) => {
    const fileReader = new window.FileReader()

    fileReader.onerror = err => observable.error(err)
    fileReader.onabort = err => observable.error(err)

    fileReader.onloadend = () => {
      if (isFileContentValid(fileReader.result)) {
        observable.next(fileReader.result)
        observable.complete()
      } else {
        observable.error('Invalid datafile structure')
      }
    }

    fileReader.readAsText(file)
  })
}

const isFileContentValid = (fileContent) => {
  const getDim = R.pipe(
    R.split('\r\n'),
    R.head(),
    R.split(' '),
    R.length)

  const dimensions = getDim(fileContent)

  let isValid = true

  fileContent
    .split('\r\n')
    .forEach(line => {
      const values = line.split(' ')
      if (values.length !== dimensions) { isValid = false }

      values
        .forEach(value => { if (isNaN(value)) { isValid = false } })
    })

  return isValid
}
