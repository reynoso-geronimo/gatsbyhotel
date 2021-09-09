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
    console.log(data)
    
}
 
export default UseHabitacion;