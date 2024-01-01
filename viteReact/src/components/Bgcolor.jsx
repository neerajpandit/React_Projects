import { useState } from "react"

function Bgcolor(){
    const [color,setColor]=useState("olive")
    return(
        <div className="h-screen w-full duration-200"
        style={{backgroundColor: color}}
        >
            <div className="fixed flex flex-wrap justify-center inset-x-0 bottom-12 px-2 ">
                <div className="bg-white flex flex-wrap  justify-center px-3 py-2 gap-4 rounded-xl">
                    <button
                    onClick={()=>setColor("red")}
                     className="outline-none px-4 bg-red-400 rounded-2xl">Red</button>
                    <button
                    onClick={()=>setColor("green")}
                     className="outline-none px-4 bg-green-400 rounded-2xl">Green</button>
                    <button 
                    onClick={()=>setColor("black")}
                    className="outline-none px-4 bg-black-400 rounded-2xl">Black</button>
                   
                </div>
                
            </div>
        </div>
    )
}
export default Bgcolor