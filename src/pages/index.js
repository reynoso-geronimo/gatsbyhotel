import React from 'react';
import Layout from '../components/layout';
import ImagenHotel from '../components/imagenHotel';
import ContenidoInicifo from '../components/contenidoInicio'
import UseHabitacion from '../components/hooks/use-habitacion';


const IndexPage = () => {
  UseHabitacion();
  return(
    <Layout>
      <ImagenHotel/>
      <ContenidoInicifo/>
    </Layout>
   
  )
}

export default IndexPage
