import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const StudentProgress: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  interface IEPGoal {
    _id: string;
    goal: string;
    progress: number;
    targetDate: string;
  }
  
  interface Student {
    name: string;
    iepGoals: IEPGoal[];
  }
  
  const [student, setStudent] = useState<Student | null>(null);

  useEffect(() => {
    axios.get(`/students/${id}`)
      .then(response => setStudent(response.data))
      .catch(error => console.error(error));
  }, [id]);

  if (!student) return <div>Loading...</div>;

  return (
    <div>
      <h1>{student.name}'s Progress</h1>
      <ul>
        {student.iepGoals.map(goal => (
          <li key={goal._id}>
            <p>Goal: {goal.goal}</p>
            <p>Progress: {goal.progress}%</p>
            <p>Target Date: {new Date(goal.targetDate).toLocaleDateString()}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StudentProgress;