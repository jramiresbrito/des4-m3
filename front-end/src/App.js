import React, { useState, useEffect } from 'react';
import * as api from './service/gradesService';
import Spinner from './components/Spinner';

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
    }
    getGrades();
  }, []);

  return (
    <div>
      <h1 className="center">Controle de Notas</h1>
      {allGrades.length > 0 && <p>Notas Disponíveis</p>}
      {allGrades.length === 0 && <Spinner/>}
    </div>
  );
}
