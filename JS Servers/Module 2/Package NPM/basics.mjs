//Version 1.4.2 = 1 fully new version (Major release) 4, adding new functionalities to that releas  (minor release) 2 patch like buf fixex
//^1.x.x = major release with most recent minor releases and patches will be installed (all versions of 1.whatever.whatever)
//~1.5.x = minor release with most recent patches will be installed (all versions of 1.5.whatever ut not above current one)

//Dist-Tags
//--tag when publishing --tag <tagName> usually for beta versions
npm publish --tag beta

//dist-tag after publication
npm dist-tag add text-npm@1.0.0 [stable]

//UPDATE PACKAGE, just change in package.json and call command same way when publishing
"version": "1.0.1",

npm publish --tag beta

//Update your own file package-lock.json.. change version there to ~1.0.0 so it can update that last digit
"version": "~1.0.0",

npm install


//UNPUBLISH version
npm unpublish <package-name>@<version>

//UNPUBLISH package
npm unpublish add-four-numbers -f
