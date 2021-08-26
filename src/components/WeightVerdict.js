import randomColor from "randomcolor"

export const WeightVerdict =(props)=>{
    return(props.kilogram >= 90 && props.kilogram < 100 ? <h3 style={{color:randomColor()}}>Kindly Watch your Weight, You are close to being obesed</h3> : 
    props.kilogram >= 100 ? <h3 style={{color:randomColor()}}>You are obesed</h3> : props.kilogram >= 0 && props.kilogram < 90?<h3 style={{color:randomColor()}}>You are still in shape, keep it up</h3> : '')
    

}
