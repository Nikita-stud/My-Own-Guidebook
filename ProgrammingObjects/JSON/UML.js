//UML = Unified Modelling Language, have both structural and behavioural diagrams, they are to help understand OOP
//Basically way of visualizing a software program
//Structural UML diagrams- Class diagram,Package diagram,Object diagram,Component diagram,Composite structure diagram,Deployment diagram
//Behavioural UML diagrams- Use-case diagram,Activity diagram,Sequence diagram, State diagram, Communication diagram, Interaction overview diagram, Timing diagram
// https://lucid.app/users/login#/login
// https://app.diagrams.net/

- //private info
+ //public info
# //protected info
/ //derived 
~ //packaged
line // association representation
//EXample, Scanner has -payment +scan(product) and -update
//Scanner has private payment property and private method to update it but a public scan method

1 * // number of instances of one class linked to one instance of other class
1 // exactly one
0..1 // zero or one
* // many
0..* // zero or many
1..* // one or manys

//ASSOCIATIONS:
{} // constrains/ restrictions
-<> //filled = strong ownership between A whole and B part  student<>- transcript
-<> // hollow = weak aggregation, teacher <>- course
<- // inheritance, specialized version of another car<- honda student<-person 

//Inheritance allows full access to all the private and public data
//Aggregation allows only public parts of the class

//USE CASES
//Consists of Title, Primary Actor and Success Scenario
//System is rectangular [] like a shop where stuff happens
//Extensions is incorrect or empty details
//Preconditions, user is already registered and logged in
//Use case is round () is what happens
//<<include>> is it has to happen like arraw with includes towards login for accessing menu