import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  const styles = {
    container: {
      textAlign: 'center',
      marginTop: '50px',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      backgroundColor: '#ffffff',
      maxWidth: '400px',
      margin: '0 auto',
    },
    header: {
      color: '#333333',
    },
    countDisplay: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '20px 0',
    },
    countLabel: {
      fontSize: '18px',
      marginRight: '10px',
      color: '#333333',
    },
    countValue: {
      fontSize: '24px',
      fontWeight: 'bold',
      color: '#1a1a1a',
    },
    buttonContainer: {
      display: 'flex',
      gap: '10px',
      justifyContent: 'center',
    },
    button: {
      padding: '10px 20px',
      fontSize: '16px',
      cursor: 'pointer',
      border: 'none',
      borderRadius: '5px',
      transition: 'background-color 0.3s',
    },
    incrementButton: {
      padding: '10px 20px',
      fontSize: '16px',
      cursor: 'pointer',
      border: 'none',
      borderRadius: '5px',
      transition: 'background-color 0.3s',
      backgroundColor: '#4caf50',
      color: 'white',
    },
    decrementButton: {
      padding: '10px 20px',
      fontSize: '16px',
      cursor: 'pointer',
      border: 'none',
      borderRadius: '5px',
      transition: 'background-color 0.3s',
      backgroundColor: '#f44336',
      color: 'white',
    },
    resetButton: {
      padding: '10px 20px',
      fontSize: '16px',
      cursor: 'pointer',
      border: 'none',
      borderRadius: '5px',
      transition: 'background-color 0.3s',
      backgroundColor: '#2196f3',
      color: 'white',
    },
  };

  return (
      <div style={styles.container}>
        <h1 style={styles.header}>Counter Example</h1>
        <div style={styles.countDisplay}>
          <p style={styles.countLabel}>Count:</p>
          <p style={styles.countValue}>{count}</p>
        </div>
        <div style={styles.buttonContainer}>
          <button style={styles.incrementButton} onClick={increment}>
            Increment
          </button>
          <button style={styles.decrementButton} onClick={decrement}>
            Decrement
          </button>
          <button style={styles.resetButton} onClick={reset}>
            Reset
          </button>
        </div>
      </div>
  );
};

export default Counter;
