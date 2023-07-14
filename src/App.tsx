import React, {MouseEventHandler, useState} from 'react';
import './App.css';


function App() {
    const day = new Date().toLocaleDateString()

    let [winner, setWinner] = useState("Ждет твоего выбора!")


        return(
        <div className="App">
            <div className={"title"}>Эмбрион дня {day} </div>
            <div className={"winner"}>{winner}</div>
            <div className={"h2"}>Кандидаты:</div>
            <div className={"spisok"}>
                <div><button className={"button"} onClick={ ()=>{setWinner("Саня (Патрик)")} }>Саня (Патрик)</button></div>
                <div><button className={"button"} onClick={ ()=>alert("Ты шо охуел? Попробуй снова!")}>Егорик (Дрифтер)</button></div>
                <div><button className={"button"} onClick={ ()=>{setWinner("Майоров (Червь)")} }>Майоров (Червь)</button></div>
                <div><button className={"button"} onClick={ ()=>{setWinner("Степанец (Солевой)")} } >Степанец (Солевой)</button></div>
                <div><button className={"button"} onClick={ ()=>{setWinner("Жека (Кувалда)")} }>Жека (Кувалда)</button></div>
                <div><button className={"button"} onClick={ ()=>{setWinner("Паша (Чандурик)")} }>Паша (Чандурик)</button></div>
            </div>
        </div>
    );
};

export default App;
