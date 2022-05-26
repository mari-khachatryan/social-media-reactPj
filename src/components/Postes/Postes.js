import { usePostes } from "../../contexts/PostesProvider"

const Postes = () => {
    const {postesData} = usePostes()

    console.log("postesData", postesData)

    return (
      <main>
          {
            //   postesData.map(post => {
            //       return (
            //           <div key={post.id} className={{}}>
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