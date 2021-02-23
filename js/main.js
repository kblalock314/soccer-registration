//Initialize function to register children
function registerChildren() {

//Initialize counter and league variables
var totalcount = 0;
var junior = 0;
var intermediate = 0;
var senior = 0;

//Initialize loop for entering age 
DO
	{
	var age = prompt("Enter the next child's age, or type 'done' if there are no more children to register:"," ")

	//Check that entry is between the ages of 4 and 15
	IF (age >= 4 && age <= 15)
		
		//Initialize loop for assigning leagues
		{
		IF (age <= 7)
			junior = junior + 1;
		
		ELSE IF (age <= 11)
			intermediate = intermediate + 1;
		
		ELSE IF (age <= 15)
			senior = senior + 0;
		
		totalcount++
		}		
		
	//Alert the user that this child is unqualified
	ELSE IF (age < 4 || age > 15) {
		document.write("<p>Sorry, only children who are between the ages of 4 and 15 can register.</p>")
		};
		
	//Alert the user that their entry is invalid.
	ELSE {
		document.write("<p>Invalid entry. Please enter an integer between 4 and 15.</p>")
		};
WHILE (age != "done")
	
//Print the final count for each league
document.write("<p>Number of children registered:" + totalcount + "</p>"); 
document.write("<p>Number of children in the Junior league:" + junior + "</p>"); 
document.write("<p>Number of children in the Intermediate league:" + intermediate + "</p>"); 
document.write("<p>Number of children in the Senior league:" + senior + "</p>");
}