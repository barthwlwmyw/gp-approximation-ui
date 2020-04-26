import config from '../config.json'

export const createTaskRequest = (algorithmParams, dataFile) => {
  const formData = new window.FormData()
  formData.append('dataFile', dataFile)
  formData.append('algorithmParams', JSON.stringify(algorithmParams))
  return {
    method: 'POST',
    url: `${config.apiUrl}approxTask`,
    body: formData
  }
}
