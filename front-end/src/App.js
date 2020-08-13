import React from 'react';
import * as api from './service/gradesService';

export default function App() {
  const testApi = async() => {
    const result = await api.getAllGrades();
    console.log(result);
  }

  testApi();
  return (
    <>
      <p>hello, world!!!</p>
    </>
  );
}
