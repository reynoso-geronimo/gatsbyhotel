import React from 'react';
import Layout from '../components/layout';
import ImagenHotel from '../components/imagenHotel';
import ContenidoInicifo from '../components/contenidoInicio'
import UseHabitacion from '../components/hooks/use-habitacion';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import HabitacionPreview from '../components/habitacionPreview';

const ListadoHabitacion=styled.ul`
  max-width: 1200px;
  width: 95%;
  margin:4rem auto 0 auto;
  @media(min-width:768px){
    display: grid;
    grid-template-columns: repeat(3,1fr);
    column-gap: 3rem;
  }

`

const IndexPage = () => {
  const habitaciones =UseHabitacion();
  console.log(habitaciones)
  return(
    <Layout>
      <ImagenHotel/>
      <ContenidoInicifo/>
      <h2
        css={css`
          text-align: center;
          margin-top: 5rem;
          font-size: 3rem;
        `}
      >Nuestras Habitaciones</h2> 
      <ListadoHabitacion>
        {habitaciones.map(habitacion=>(
          <HabitacionPreview
            key={habitacion.id}
            habitacion={habitacion}
          /> 
        ))}
      </ListadoHabitacion>
    </Layout>
   
  )
}

export default IndexPage
