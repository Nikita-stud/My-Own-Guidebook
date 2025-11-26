command + option + i; //open console panel in Browser
q; //allows me to write again in terminal

/*GIT
 * 1.Download homebrew
 * 2.Download git from homebrew
 *
 * Link to git commands: https://git-scm.com/docs
 * git --version //to check if I have it or download it from net
 * git status //shows stage,not stages files
 * git add . //stages all changes, basically saves,adds,deletes changes to files from PC into Git so that we can commit them to have a snapshot of code
 * Saying what files I want to be a part of this commit and what not
 * git reset // resets add .
 * git add fileName.html
 * git commit -m "" //commit creates a snapchat of the file because it is git
 * git log // shows everything that has happened in our repo
 * git show //show all changes
 * git pull origin //get updates origin in yours
 * git push --all //update branches, tags etc..
 *
 * Stashing allows us to keep local change with no need to resolve conflicts.
 * We can save the code we dont want to be changes during development and add it anytime in future branches
 * git stash // save as indexes, (will get rid of all your changes on your branch but dont worry)
 * git stash list //see the saves stashes
 * git stash apply [stash] -applies stash, can be done multiple times
 * git stash pop [stash] -applies stash and deletes it
 * git stash drop [stash] -removes stash
 * git restore . //restore back to original with no stash (does not delete stash)
 * git clean //deletes all not commited stuff and stashes
 * //
 * or 3 dots, stash thereafter
 *
 * MERGING vs REBASE
 *
 * merging adds a merge commit, provides history
 * rebasing changes git history, so branches dont exist, only a single path when commiting.
 * rebase does not have branch history, rather a single path
 * git branch //shows you what branch you on
 * git branch new_Name //creates new branch, use _ for words
 * git rebase //
 *
 * !!!UP in Git round icon on the left next top pull request,
 * you can create pull requests from there and specify what branch to merge into
 * !!!Down in blue on VSCode shows two icons in middle
 * circle with arrows = remote changes to pull
 * arrow up = changes to push
 * commit changes in GitHub when you are done with all conflicts
 *
 */

/*README file
 *# First header //main header
 *## Second header //Creates smaller header
 * html
 * <p> Text paragraph</p> //highlights
 * javascript
 * console.log("Hello world"); //adds highlight too
 */
