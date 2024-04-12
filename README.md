# App Presentation

This project was bootstrapped with Made by Akram Abo Zaid , a 25 years old student who is currently studying in Ariel University.

## App's Topic

The App revolves around flags api that can be implemented into the app and exhisibit them all and each one is categorized in its own continent.

### Libraries used in the App

1.Bootstrap 5.3.3 : A Powerful, extensible, and feature-packed frontend toolkit . can be installed by typing this code in the terminal : `npm i bootstrap@5.3.3` OR 
by copy-paste the following code in the index.html file : 
`<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">`
This library is used in every page.

2.REact-Router-Dom : A package contains bindings for using React Router in web applications. can be installed by typing this code in the terminal : `npm i react-router-dom`

##### Code Explination Per Page
NOTE : Every page contains 3 components in common : a Navbar Navigation , a Background Image and a Footer :

### (Navbar Navigation)
This component contains the website logo , which is a clickable text that re-directs the user to the home page , HomePage button , which will also directs the user to the homePage , AboutPage , Countries(Items) Page , AddFlag Page and 404 NOT FOUND Page which can only be accessed by inserting an invalid url.

### (BackGround)
This component contains only an image of this website.

### (Footer)
This component contains the rights reserved text , and 2 icons that by clicking on one of them , the user will be directed to the creator of this app's profiles . the 2 icons are Github and LinkedIn.

### ---------------------------------------------------------------------------------------------------------------------------

### 1. THE WEBSITE'S PAGES
![Home Page](src/Components/Pages-Images-Folder/Screenshot%20(927).png)

This is The Home Page . This page contains a text that includes the name of the creator of this project.
Below the text , there's a search bar that filters a country/s depends on the text inserted inside the search bar.
At first , all the flags are displayed . For example , if we type the letter G in the search bar , the search bar displays 
the country/s ,regardless if the inserted letter is capital , that its name contain that letter . Same thing goes also for a series of letters . For example , if we insert GT in the search bar , the flags that contain that series of letters are displayed . Otherwise , none will be displayed . In addition , an example of a flag is displayed in the bottom above the Footer that is surrounded with a border that contains an image of the flag , the country it is relevant to and a short information about that country.

### ---------------------------------------------------------------------------------------------------------------------------

### 2. THE ABOUT PAGE
![About Page](src/Components/Pages-Images-Folder/Screenshot%20(925).png)

This is The About Page . This page solely contains an extended info about the creator of this project such as name , age , a current job and a deep explained reason of why did the creator choose this topic and as well as a photo of this creator (if available).

### ---------------------------------------------------------------------------------------------------------------------------

### 3. THE DISPLAYED FLAGS PAGE
![Displayed Flags Page](src/Components/Pages-Images-Folder/Screenshot%20(926).png)

This is The Displayed Flags Page . This page solely is a showcase of every flag of every that is located in each continent.
There are a total of 7 continents : Asia , Africa , Europe , Australia , Antactica , North-America and South-America.
for each continent , a button is available to display/hide the flags of the countries that are located in said continent.
In addition , every flag that is stored inside a Card component , an additional button comes along with it . By Clicking on that button , a new web page is opened that gives the user a deep information or a historic information about that onClicked flag.

### ---------------------------------------------------------------------------------------------------------------------------

### 4. THE ADDING FLAG/S PAGE
![Adding Flag/s Page](src/Components/Pages-Images-Folder/Screenshot%20(928).png)

This is the Adding Flag/s Page . This Page contains a form that contains 3 input fields , that is accurate and suitable
for the flag api : 
First , The Country Code , which contains only of 2 Capital letters , and only capital letters.
Second , The flag display : there are only 2 options : either Shinny , to display a shinny flag , or Flat , to display a flat flag. the field only gets small letters only.
And Lastly , the size of the flag : this field can accept only 4 values : 16px , 32px , 48px and 64px . The flag will be displayed depending on the values inserted in all the inputs.
Note : all fields are required to fill . by leaving at least 1 input empty , a warning message pops from the empty input
and asks the user to fill that it.

At last , the form contains a button to add that button .
At start , there's an empty array of flags that uses the useState hook . the hook will be used to accept the values from the inputs and create a new flag and it is inserted into that empty array. by clicking on that button , the array will use the function map to create Card/s for each flag that is contained inside that array. 

### ---------------------------------------------------------------------------------------------------------------------------

### 5. THE 404 PAGE
![404 Page](src/Components/Pages-Images-Folder/Screenshot%20(943).png)

This is the 404 Page ,as known as , Not Found Page . This page can only be directed to the user if he inputs a path in the url on the top left of the page , or in other words , under the title of the page.
When this page is accessed , A warning text will appear in the middle of the page explaining that the requested page does not 
exist in this app.An additional text is displayed under the warning that prompts the user to click on the logo of this website , which is located on the very left of the navbar , to return to the home page.

### ---------------------------------------------------------------------------------------------------------------------------