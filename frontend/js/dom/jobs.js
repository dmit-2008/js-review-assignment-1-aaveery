const renderJobPostings = (jobListing, listElement) => {
    let element = `<li class="job-card card my-1" style="width: 18rem;">
                    <div class="card-header">${jobListing.company}</div>
                        <div class="card-body">
                            <h5 class="card-title">${jobListing.title}</h5>
                            <h6 class="card-subtitle mb-2 text-body-secondary">${jobListing.location}</h6>
                            <h6 class="card-subtitle mb-2 text-body-secondary">Posted ${jobListing.date_posted}</h6>
                            <button class="btn btn-primary view-job-button" job-data-id="${jobListing.id}">View Job</button>
                        </div>
                    </li>`
    listElement.innerHTML += element
}

export { renderJobPostings }