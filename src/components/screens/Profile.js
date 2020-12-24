import React , {useEffect , useState, useContext} from 'react'
import {UserContext} from '../../App'

const Profile =()=> {

    const [mypics , setMypics] = useState([]);
    const {state , dispatch} = useContext(UserContext);

    useEffect(()=>{
        fetch('/mypost',{
            headers:{
                "Authorization":"Bearer "+localStorage.getItem("jwt")
            }
        }).then(res=>res.json())
        .then(result=>{
            setMypics(result.mypost)
        })
    },[])


    return (
        <div style={{maxWidth:"550px" , margin:"0px auto"}}>
            <div style={{display:"flex",
                        justifyContent:"space-around",
                        margin:"18px 0px",
                        borderBottom:"1px solid grey"}}>
                <div>
                    <img style={{width :"160px",height:"160px",borderRadius:"80px"}}
                    src="https://images.unsplash.com/photo-1569466896818-335b1bedfcce?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fHBlcnNvbnxlbnwwfDJ8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"/>
                </div>
                <div>
                    <h4>{state? state.name : "Loading..."}</h4>
                    <div style={{display:"flex",justifyContent:"space-between",width:"108%"}}>
                        <h6>40 post</h6>
                        <h6>1M followers</h6>
                        <h6>145 following</h6>
                    </div>
                </div>
            </div>
            <div className="gallery">
                {
                    mypics.map(item=>{
                        return(
                            <img className="item" key={item._id} src={item.photo} alt={item.title}/>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Profile;