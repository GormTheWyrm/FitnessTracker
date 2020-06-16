# FitnessTracker
Bootcamp Assignment that has me create the backend of a fitness tracker, including deployign a Mongo Database to Heroku


# Fitness Tracker
Welcome to the Fitness Tracker Application.
To use the app as is go to https://backend-bootcamp-project-gorm.herokuapp.com/ 
<br> 
This is the Easiest way to experience the application but is not suitable for privately tracking your own data.
<br>
## Alternative: Setting the App up on your local machine <br>
In order to keep your data private and separate from other's data
Otherwise, the source code can be cloned by going to this repository: https://github.com/GormTheWyrm/FitnessTracker and clicking "clone or download". Hit the clipboard symbol to copy the URL and run "git clone TheCopiedURLGoesHere" via a command line interface in the directory you want to clone it to.
<br>  
To run this appplication on your local machine you will need to download MongoDB.
Go to their website and follow the instructions.
<br> This link may be helpful but I offer no gaurentee. Feel free to perform your own search engine query for the proper download information. 
 https://www.mongodb.com/try/download/community

<br>
Once you have clicked the first link above or oppened the application on your local machine you should be taken to the Fitness Tracker Home Page. This should display the details of your last workout. If you opened this on your machine there should be no previous workout data so that information will not be displayed yet.

To add a workout click "New Workout". This creates a new empty workout. You will be redirected to a new page where you can select from cardio and resistance type workouts. <br>
After selecting cardio or resistance you should fill out the form and select "Add exercise". This will add the exercise to your latest workout.
Once you hit "Add Exercise" you may fill out the form again to add more exercises to the workout. <br>
Click "Complete" to finish adding exercises. This will bring you back to the home page.
<br> <br>
From the home page, selecting "Continue Workout" will bring you back to the page where you may select exercise options.
<br>
Workouts are designed to reflect work done in a single day. The date of the workout should be that of the day you clicked "New Workout", regardless of when exercises were added to that workout.

<br>
Selecting "Fitniss Tracker" at the top lect corner of the screen should bring you back to the home page. <br>
Selecting "Dashboard" should allow should show you the


## Current issues;
Total Workout Duration is stuck at 0
Range api route return all workouts instead of a limit...  
...maybe I will limit this to 2 weeks/ 14 days?
