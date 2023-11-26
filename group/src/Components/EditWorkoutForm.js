import React, { useState } from 'react';

const EditWorkoutForm = ({ workout, onSave, onCancel }) => {
  const [editedWorkout, setEditedWorkout] = useState({
    exercise: workout.exercise,
    duration: workout.duration,
    date: workout.date,
    notes: workout.notes,
  });

 
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedWorkout((prevWorkout) => ({
      ...prevWorkout,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(editedWorkout);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit Workout</h2>
      <label>
        Exercise:
        <input
          type="text"
          name="exercise"
          value={editedWorkout.exercise}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Duration:
        <input
          type="text"
          name="duration"
          value={editedWorkout.duration}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Date:
        <input
          type="text"
          name="date"
          value={editedWorkout.date}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Notes:
        <textarea
          name="notes"
          value={editedWorkout.notes}
          onChange={handleInputChange}
        />
      </label>
      <div>
        <button type="submit">Save</button>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default EditWorkoutForm;