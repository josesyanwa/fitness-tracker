"# fitness-tracker" 

Fitness Tracker App

Overview

Welcome to the Fitness Tracker App! This application is designed to help you track your workouts efficiently. It includes several key components, each with its own specific functionality. The app utilizes a db.json server running on port 3001 to store and manage workout data.

Contributors

Justin
Joses
Alvine
Peter
Maureen

Components

1. WorkoutForm (by Joses)
The WorkoutForm component is responsible for rendering a form where users can input details for a new workout. It manages the state of form inputs and handles the submission of the form.

2. WorkoutList (by Justin)
The WorkoutList component displays a list of workouts with their details. It involves mapping through the workout data and rendering each workout. Additionally, it may include buttons for editing or deleting workouts.

3. WorkoutCard (by Alvine)
The WorkoutItem component represents an individual workout item within the WorkoutList. It renders the details of a workout, such as exercise type, duration, date, and notes. This component includes buttons for editing or deleting the specific workout.

4. EditWorkoutForm (by Peter)
When a user clicks the "Edit" button on a workout, the EditWorkoutForm component is responsible for rendering a form with pre-filled values for that workout. It manages the state of the form inputs and handles the submission to update the workout.

5. DeleteConfirmationModal (by Maureen)
When a user clicks the "Delete" button on a workout, the DeleteConfirmationModal component can appear to confirm the deletion. It manages the modal state and provides options for confirming or canceling the deletion.

Server Information
The app relies on a db.json server running on port 3001 to store and retrieve workout data.

Getting Started

Clone the repository.
Navigate to the project directory.
Install dependencies with npm install.
Start the app with npm start.
Access the app through your browser at http://localhost:3000.
