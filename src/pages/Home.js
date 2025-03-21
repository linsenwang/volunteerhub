// src/App.js
import React, { useState, useEffect } from 'react';
import SectionContainer from '../components/SectionContainer';
// import Form from '../components/Form';
import CardList from '../components/CardList';

function Home() {

  const [cardData, setCardData] = useState([]);

  // 从 Flask 后端获取 cardData
  useEffect(() => {
    fetch('http://localhost:5001/api/card-data')
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => setCardData(data))
      .catch(error => console.error("Error fetching card data:", error));
  }, []);


  return (
    <div>
      <SectionContainer title="Recent Projects">
        <CardList cardData={cardData}/>
      </SectionContainer>

      {/* <SectionContainer title="Contact Us" marginTop={6}>
        <Form />
      </SectionContainer> */}

      <SectionContainer title="About Us" marginTop={6}>
        {/* 其他组件 */}
      </SectionContainer>
    </div>
  );
}

export default Home;
