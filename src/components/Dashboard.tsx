import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

interface Student {
  _id: string;
  name: string;
}

const Dashboard: React.FC = () => {
  const [students, setStudents] = useState<Student[]>([]);

  useEffect(() => {
    axios.get('/students')
      .then(response => setStudents(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      <ul>
        {students.map(student => (
          <li key={student._id}>
            <Link to={`/students/${student._id}`}>{student.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Dashboard;