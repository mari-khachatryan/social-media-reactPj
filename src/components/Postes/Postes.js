import { useEffect, useState } from "react"
import { usePostes } from "../../contexts/PostesProvider"
import { useUserInfo } from "../../contexts/UserProvider"
import classes from "./Postes.module.css"



const Postes = () => {
    const { postesData, setPostesData } = usePostes()
    const [aretext, setAretext] = useState({ coment: '' })

    const { user } = useUserInfo()
    const addPost = () => {
        postesData.push(aretext)
        setAretext({ ...aretext, coment: '' })
    }
    const countPlus = (id) => {
        let count = postesData?.find((e) => (e.id == id));

        count.count++
        setPostesData([...postesData])
    }


    useEffect(() => { }, [postesData])
    return (
        <div className={classes.newPost}>
            <p>Add your post</p>
            <div>
                {/* <h1> {aretext}</h1> */}
                <input type="text"
                    value={aretext.coment}
                    onChange={(evt) => {
                        setAretext({ ...aretext, coment: evt.target.value, id: new Date().getTime(), title: "json-server", count: 0, author: user, "picture": "https://media.cntraveller.com/photos/611bf0b8f6bd8f17556db5e4/1:1/w_2000,h_2000,c_limit/gettyimages-1146431497.jpg" })
                    }}
                    className={classes.newPostArea}
                />
            </div>
            <button onClick={() => addPost()}>Post</button>

            <main>
                {
                    postesData?.map(post => {
                        return (
                            <div key={post.id} className={classes.postsItem}>
                                <p>{post.author}</p>
                                <p>{post.coment}</p>
                                <p><img src={post.picture} className={classes.postPicture} /></p>
                                <div className={classes.likes}>
                                    <img src="https://w7.pngwing.com/pngs/394/403/png-transparent-heart-shape-love-heart-love-heart-shape.png" className={classes.srtik} onClick={() => { countPlus(post.id) }} />
                                    <p>{post.count}</p>

                                </div>
                            </div>
                        )
                    })
                }
            </main>
        </div>
    )
}

export default Postes
