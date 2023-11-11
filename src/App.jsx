import { useState, useEffect } from 'react';
import styles from './App.module.scss'

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Fetch data when the component mounts
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('/api/data');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
  };

  console.log({ data })

  return (
    <div className={styles.root}>
      <h1>Hello World!!!</h1>
    </div>
  )
}

export default App
