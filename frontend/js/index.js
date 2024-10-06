// your code goes here.

import { getJobsList } from './api/jobs.js';
import { renderJobPostings } from './dom/jobs.js';

let jobListElement = document.querySelector("#searched-jobs")

getJobsList().then((data) => {
    data.results.map((jobPosting) => {
        renderJobPostings(jobPosting, jobListElement)
    })
})
