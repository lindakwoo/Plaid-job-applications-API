# Plaid-job-applications-API
These functions enhance the job applications process that Plaid uses whereby applicants submit their information via an API endpoint.

functions:

standardizePhoneNumber: 
This function takes in the text enetered by the applicant for their phone numbers and normalizes it to a standardized format: "1-xxx-xxx-xxxx".  This presumes that all phone numbers are from the USA.  It will return invalid if the text entered is not a standard phone number.

mostPopularCandy: 
Applicants are asked to submit their favorite candy as part of the API json data.  This function takes all applicant json data and tallies the most mentioned candy bar to the least mentioned.  
