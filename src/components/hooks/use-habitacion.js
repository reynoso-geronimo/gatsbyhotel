import { graphql } from "gatsby";
import { useStaticQuery } from "gatsby"

const UseHabitacion = () => {
    const data = useStaticQuery(graphql`

    query{	

        allDatoCmsHabitacion{
              nodes{
                  titulo
            contenido
            id
            slug
            imagen{
      
            fluid(maxWidth:1200){
                      ...GatsbyDatoCmsFluid
            }}
          }
        }
      }
    `)
      return data.allDatoCmsHabitacion.nodes.map(habitacion=>({
          titulo:habitacion.titulo,
          id:habitacion.id,
          contenido:habitacion.contenido,
          imagen:habitacion.imagen,
          slug:habitacion.slug,
      }))
}
 
export default UseHabitacion;