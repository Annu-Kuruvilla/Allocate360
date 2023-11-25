import React, { useState } from 'react';
import './ExamDetails.css'; // Import CSS file for styling

const ExamDetails = () => {
  const [exams, setExams] = useState([
    { name: 'Exam 1', time: '10:00 AM' },
    { name: 'Exam 2', time: '2:00 PM' },
    // Add more initial exams here if needed
  ]);

  const [newExam, setNewExam] = useState({ name: '', time: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewExam({ ...newExam, [name]: value });
  };

  const addNewExam = () => {
    if (newExam.name && newExam.time) {
      setExams([...exams, newExam]);
      setNewExam({ name: '', time: '' });
    } else {
      alert('Please provide both exam name and time.');
    }
  };

  const modifyExamDetails = (index, newName, newTime) => {
    const updatedExams = [...exams];
    updatedExams[index] = { name: newName, time: newTime };
    setExams(updatedExams);
  };

  return (
    <div className="exam-details-container">
      <h1>Exam Details</h1>

      <div className="existing-exams">
        <h2>Existing Exams</h2>
        <ul>
          {exams.map((exam, index) => (
            <li key={index}>
              <span>Name: {exam.name}</span> - <span>Time: {exam.time}</span>
              <button
                onClick={() => {
                  const newName = prompt('Enter new name:', exam.name);
                  const newTime = prompt('Enter new time:', exam.time);
                  if (newName !== null && newTime !== null) {
                    modifyExamDetails(index, newName, newTime);
                  }
                }}
              >
                Modify
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="add-exam">
        <h2>Add New Exam</h2>
        <input
          type="text"
          placeholder="Enter exam name"
          name="name"
          value={newExam.name}
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="Enter exam time"
          name="time"
          value={newExam.time}
          onChange={handleInputChange}
        />
        <button onClick={addNewExam}>Add Exam</button>
      </div>
    </div>
  );
};

export default ExamDetails;
