import { usePostes } from "../../contexts/PostesProvider"

const Postes = () => {
    const {postesData} = usePostes

    return (
      <main>
          {
            //   postesData.map(post => {
            //       return (
            //           <div key={post.div} className={{}}>
            //               <p>{post.author}</p>
            //               <p>{post.coment}</p>
            //               <p>{post.picture}</p>
            //           </div>
            //       )
            //   })
          }
      </main>
    )
}

export default Postes