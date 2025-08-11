import React, { useState, useEffect } from "react";
import { getOffers } from "../services/offer";
import CardOffer from "./CardOffer";

export default function Offers() {
    const [Offers,setOffers] = useState([])

    const loadOffers = async ()=>{
        const data = await getOffers()
        console.log(data);
        setOffers(data)
    }
    useEffect(()=>{
        loadOffers()
    },[])
    return(
        <>
        <section className="container">
            <h2 className="text-center">Ofertas disponibles</h2>
            <div className="row">
                {Offers.map((offers,i)=>(
                    <CardOffer
                    key ={i}
                    offers = {offers}/>
                ))}
            </div>
        </section>
        {console.log(Offers)}
        </>
    )
}