// your code goes here.

import { getJobsList } from './api/jobs.js';

let jobListElement = document.querySelector(".searched-jobs")

getJobsList().then((data) => {
    console.log(data);
}) 