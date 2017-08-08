const api = "http://localhost:5000"

export const getEvent = () =>
  fetch(`${api}/event`)
    .then(res => res.json())

export const createEvent = (newEvent) =>
  fetch(`${api}/new`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newEvent)
  }).then(res => console.log(res))
