import { usePostes } from "../../contexts/PostesProvider"
import { useUserInfo } from "../../contexts/UserProvider"
import classes from "./Postes.module.css"

const Postes = () => {


    const { postesData, setPostesData } = usePostes()

    // const handelTextArea = () = {
    //     setPostText(e.target.value)
    // }

    const { user } = useUserInfo()


    return (

        <div className={classes.newPost}>
            <p>Add your post</p>
            <div>
                <textarea
                    value={{}}
                    className={classes.newPostArea}
                />
            </div>
            <button>Post</button>
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
        </div>
    )
}

export default Postes