# FitnessTracker
Bootcamp Assignment that has me create the backend of a fitness tracker, including Mongo Database
    + *there is a get request (or two?) for api/workouts*
    - my json is currently broken
    



Users start at home page ("/")

They have 2 options
1. Continue Workout
2. New Workout

**1. Continue Workout**
    if no workout redirects to "/exercise" {see option 2}
    else... {need to look at code or get to this point}

**2. New Workout**
    sends user to "/exercise?"
    Post request to api/workouts
        CHECK POST!!
        seems to create a workout with no data...
    user has optins to select exercise type
    1. complete
            put request (/api/workouts/undefined)
            need to fix this...
    2. add exercise
            put request (/api/workouts/undefined)
            need to fix this...

~~~~~~~~
So what needs to be done?
1. need to set up get for workouts
2. need to set up post for workouts - should be empty...
3. need to set up put for workouts


**user wants to add excersises to workout... it seems to do that through a put method**
...so excersises should not be its own model after all?
...could simply be an array?
