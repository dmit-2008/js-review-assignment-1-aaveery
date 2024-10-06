// your code goes here.
const BASE_URL = `../../../backend/jobs.json`;

const getJobsList = () => {
    return fetch(`${BASE_URL}`)
        .then((response) => {
            return response.json();
        }).then((data) => {
            return data
        })

}

export { getJobsList }