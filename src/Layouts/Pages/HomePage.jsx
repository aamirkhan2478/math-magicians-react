import React from 'react';
import '../Assets/styles/homepage.css';

const HomePage = () => {
  const centerContent = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '100px',
  };
  return (
    <>
      <div style={centerContent}>
        <h1 className="heading">Welcome to our page!</h1>
        <p className="paragraph">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum,
          illo? Sit, itaque totam. Ratione illum, nisi perferendis corporis
          doloribus vel impedit veritatis modi, adipisci veniam similique
          expedita ipsam tempore earum! Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Vel corporis ea facere atque aliquid et.Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Repellat, exercitationem
          obcaecati! Ex facilis vero quaerat libero similique aliquam reiciendis
          laudantium in eaque illo aperiam odit voluptate, soluta sed cupiditate
          sequi debitis labore voluptates error sunt excepturi ut necessitatibus
          molestiae. Necessitatibus, similique fuga consequuntur et culpa labore
          error placeat ad. Assumenda?
        </p>
        <p className="paragraph">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum,
          illo? Sit, itaque totam. Ratione illum, nisi perferendis corporis
          doloribus vel impedit veritatis modi, adipisci veniam similique
          expedita ipsam tempore earum! Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Vel corporis ea facere atque aliquid et.Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Repellat, exercitationem
          obcaecati! Ex facilis vero quaerat libero similique aliquam reiciendis
          laudantium in eaque illo aperiam odit voluptate, soluta sed cupiditate
          sequi debitis labore voluptates error sunt excepturi ut necessitatibus
          molestiae. Necessitatibus, similique fuga consequuntur et culpa labore
          error placeat ad. Assumenda?
        </p>
      </div>
    </>
  );
};

export default HomePage;
