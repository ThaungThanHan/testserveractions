"use client";
import React, {useState} from "react";
import {increment} from "@/app/actions";

const plusMinus = () => {
    const [text,setText] = useState("");
    const handleClickPlus = async() => {
        await increment().then(res=>{
          setText(res);
        }).catch(err=>console.log(err));
      }
    return(
        <div>
        <div onClick={()=>handleClickPlus()}>+</div>
        <div>{text}</div>
        <div>-</div>
      </div>
    )
}

export default plusMinus;