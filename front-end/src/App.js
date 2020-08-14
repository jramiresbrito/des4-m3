import React, { useState, useEffect } from 'react';
import * as api from './service/gradesService';
import Spinner from './components/Spinner';
import GradesControl from './components/GradesControl';

export default function App() {
  const [allGrades, setAllGrades] = useState([]);
  const [selectedGrade, setSelectedGrade] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const getGrades = async () => {
      const grades = await api.getAllGrades();
      setTimeout(() => {
        setAllGrades(grades);
      }, 1500);
    };
    getGrades();
  }, []);

  const handleDelete = () => {
    console.log('handle delete');
  }

  const handlePersist = () => {
    console.log('handle persist');
  }

  return (
    <div>
      <h1 className="center">Controle de Notas</h1>
      {allGrades.length === 0 && <Spinner />}
      {allGrades.length > 0 && (
        <GradesControl
          grades={allGrades}
          onDelete={handleDelete}
          onPersis={handlePersist}
        />
      )}
    </div>
  );
}
