import {useState} from "react";

function DropSelection(){
    const [dropdata, setDropdata] = useState([
        {
            country:"India",
            year:"2015",
            states:[
                {
                    name:"AP",
                    counties:23
                },
                {
                    name:"TL",
                    counties:28
                }
            ]
        },
        {
            country:"United States",
            year:"2016",
            states:[
                {
                    name:"TN",
                    counties:13
                },
                {
                    name:"AZ",
                    counties:28
                },
                {
                    name:"NY",
                    counties:52
                }
            ]
        },
        {
            country:"Canada",
            year:"2017",
            states:[
                {
                    name:"VA",
                    counties:43
                },
                {
                    name:"TD",
                    counties:41
                }
            ]
        }
    ]);

    const [states, setStates] = useState([]);

    const pickStates=(e)=>{
        dropdata.filter((item)=>{
            
            if(item.year==e.target.value){
                setStates(item.states);
            }
        });
    }

    return(
        <div>
            <select onChange={pickStates}>
                {dropdata.map((item)=>
                    {return(<option value={item.year}>{item.country}</option>)}
                )}
            </select>
            
            <select>
                {states.map((state)=>
                    {return(<option value={state.counties}>{state.name}</option>)}
                )}
            </select>
        </div>
    )
}

export default DropSelection