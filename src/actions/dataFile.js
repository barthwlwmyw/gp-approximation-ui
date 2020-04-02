import { ActionsObservable } from 'redux-observable'

export const LOAD_DATAFILE = 'LOAD_DATAFILE'
export const loadDatafile = (file) => ({
  type: LOAD_DATAFILE,
  file: file
})

export const PARSE_DATAFILE_SUCCESS = 'PARSE_DATAFILE_SUCCESS'
export const parseDatafileSuccess = (file) => ({
  type: PARSE_DATAFILE_SUCCESS,
  file
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
      // let fileContent
      try {
        // fileContent = fileReader.readAsText(file)
      } catch (err) {
        observable.error('parsing failed')
      }
      observable.next(fileReader.result)
      observable.complete()
    }

    fileReader.readAsText(file)
  })
}
