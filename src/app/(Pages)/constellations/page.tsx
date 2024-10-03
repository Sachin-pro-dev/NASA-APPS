import React from 'react';

const Page: React.FC = () => {
  return (
    <div style={styles.container}>
      <iframe
        src="https://theskylive.com/planetarium"
        style={styles.iframe}
        title="Constellations"
      ></iframe>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    width: '100vw',
    height: '100vh',
    margin: 0,
    padding: 0,
  },
  iframe: {
    width: '100%',
    height: '100%',
    border: 'none', // removes the border
  },
};

export default Page;
