//CI: continuous integration, basically test and deliver code
//CD: continuous deployment, basically frequently integrate code into the main branch

//Environments: new code goes through dev env, test, env, stage env and product env
//UAT: User Acceptance Testing, final check if the the application meets business requirements
//Staging environment: test that the app runs as a whole
//Production environment: Software goes to live users

//Unit tests: class methods, components and modules are tested.
//Integration tests: how different modules or services work with each other
//Functional tests: Check if the output of the application functionalities is the same as in the business requirements
//End-to-end tests:simulate the user behaviour
//Acceptance testing: Formal tests verifying if the system satisfies business requirements.
//Performance testing: how the system behaves under various circumstances, for example, how fast and reliable it is
//Smoke testing: after a new build to determine if we want to run more expensive tests.

//Shift left: term, for devs should be ran on desktop first
//Test Case: detailed document that outlines a specific scenario to be tested, including input, expected output
//Test Suite:  structured collection of test cases grouped logically to execute a single job across various test scenarios,
//Test fixture: Objects used in the test run
//SUT: system under test
//Cycle time: time from when something is worked on til deployment
//Lead time: time from when something is requested until it is deployed
//Mock: piece of code that will be used as test
//TTD: writing failing test first
//BDD: simple sentence driven testing
//ATDD: BDD but for devs before the dev begins

//Continuous delivery pipeline: Idea to deliver consistant and predictable in short sprints
//4phases, 1.Cmponent phase-building small testable components
//2.Sybsystem phase -server is created by those small components
//3.System ohase - after all security is in plase on server we can test the whole
//4. Production phase - making it live and test live on smoke tests

//Source control version management: git commit issues
//Automated Builds, Tests, and Deployments: auto series of test run when pushed to git

//Jira: CI tool
//Issue: individual item (Epic,Story,Bug)
//Porject: collection of issues
//Project and Key: Nor-1 project name and a short number
//Board: status view of issue
//Query: a question
//JQL: Jira Query Language
//Filter: saved query
//Filter Subscription: scheduled query with email results

/***
Backlog - the collection of all created issues without their prioritisation
Epic – Big goal containing smaller issues.
Story – User Story describes business needs, usually used by teams and tracks the progress of multiple people.
Task – Distinct pieces of work, designed to be completed in one day or less. It usually tracks one person’s progress.
Bug – Similar to Task, but used when already implemented functionality is working incorrectly
 */

//!!!GitHub Actions -Has CI/CD Pipeline, CI pipeline runs when code changes, CD pipeline deploys the built code into production
//Actually great, go to actions, find the package you want to check through
//download/ commit to the repo you want and run the test, it will usually run on push requests, checking all the stuff before commiting itself
//te runs-on has to be changed to macos-latest

//Confluence- documentation for new team members
//https://vimeo.com/910318383/094353d5df?share=copy
//In Jira Legacy on Page you can- project = ES and issuetype = Task to search trough code and etx
// // is to select date
// @ user
//If you select a table you created, you can make issues/ tasks

//Bitbucket- improve Jira
//Go to jira projects, setting next to avatar, jira apps, select DCVS acc
