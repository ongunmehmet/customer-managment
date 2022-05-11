import logo from './logo.svg';
import './App.css';
import Sehir from './il-ilce.json'
import {useEffect, useState} from "react";

function App() {

    const [seciliIl,setSeciliIl]=useState(null);
    const [ilceler,setIlceler]=useState([]);
    const [seciliIlce,setSeciliIlce]=useState([]);
    const [data,setData]=useState(Sehir.data);
    const [index,setIndex]=useState([]);


    useEffect(()=>{
        data.map((item,index)=>{
            if(item.il_adi===seciliIl){
                console.log(item["ilceler"])
                setIlceler(item["ilceler"])
            }
        })

    },[seciliIl])



    return (
        <div className="App">
            <header className="App-header ">
                <>
                    <select value={seciliIl}  onChange={e => {
                        setSeciliIl(e.target.value)
                    }} >
                        {
                            data.map((il,index)=> {

                                return(
                                    <option>{il.il_adi}</option>
                                )
                            })
                        }
                    </select>
                    {
                        seciliIl !== null ?
                            <select value={seciliIlce} onChange={e => setSeciliIlce(e.target.value)} >
                                {
                                    ilceler.map((item,index)=> {

                                        return(
                                            <option>{item.ilce_adi}</option>
                                        )
                                    })

                                }
                            </select> : <div></div>
                    }
                </>
            </header>
        </div>
    );
}

export default App;
