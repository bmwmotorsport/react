import react from "react";
import i1 from "./f1.jpg"
import i2 from "./f1race.jpg"

function Map() {
    const ar = ['red','blue','cyan']
    const arr = [1,2,3,4,5]
    const ai = [i1,i2,i1,i2]
    const newarr = arr.filter(num => num != 3)
    const garr = arr.filter(num => num > 3)
    return(
        <div>
            <img src="/f1celeb.jfif" height="250px" alt="F1 Celeb" /> <br />
            {
                ai.map((value)=>{
                    return <img src={value} height="200px"/>
                })
            }

            <h3>Using Filter != 3</h3>
                <span>{arr.join(',')}</span> <br />
                <span>{newarr.join(',')}</span> <br />
                <span>{newarr}</span>

            <h3>Using Filter greater than 3</h3>
                <span>{garr.join(',')}</span>

            <h1>Mapping</h1>
            {
                arr.map((value)=>{
                    if(value > 3) {
                        return <h2>{value}</h2>
                    }
                })
            }
            {
                ar.map((value)=>{
                    return <h2 style={{color:value}}>{value.toUpperCase()}</h2>
                })
            }
            {
                arr.map((value)=>{
                    return <h2>{value} x 5 = {value*5}</h2>
                })
            }
        </div>
    )
}

export default Map