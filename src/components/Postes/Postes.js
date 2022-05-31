import { usePostes } from "../../contexts/PostesProvider"
import classes from "./Postes.module.css"

const Postes = () => {
    const { postesData } = usePostes()


    return (
        <main>
            {
                postesData.map(post => {
                    return (
                        <div key={post.id} className={classes.postsItem}>
                            <p>{post.author}</p>
                            <p>{post.coment}</p>
                            <p><img src={post.picture} /></p>
                        </div>
                    )
                })
            }
        </main>
    )
}

export default Postes