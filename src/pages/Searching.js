import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Wine1 from "./wine1";
import Wine2 from "./wine2";
import Wine3 from "./wine3";
import Wine4 from "./wine4";
import Wine5 from "./wine5";
import Wine6 from "./wine6";

const Searching = () => {
    const { keyword } = useParams();

    const [wine1ResultArray, setWine1ResultArray] = useState([]);
    const [wine2ResultArray, setWine2ResultArray] = useState([]);
    const [wine3ResultArray, setWine3ResultArray] = useState([]);
    const [wine4ResultArray, setWine4ResultArray] = useState([]);
    const [wine5ResultArray, setWine5ResultArray] = useState([]);
    const [wine6ResultArray, setWine6ResultArray] = useState([]);

    useEffect(() => {
        findSearchResult();
    }, []);

    const findSearchResult = () => {
        const wine1Array = document.getElementsByClassName("wine1")[0].querySelectorAll(".searchable");
        const wine2Array = document.getElementsByClassName("wine2")[0].querySelectorAll(".searchable");
        const wine3Array = document.getElementsByClassName("wine3")[0].querySelectorAll(".searchable");
        const wine4Array = document.getElementsByClassName("wine4")[0].querySelectorAll(".searchable");
        const wine5Array = document.getElementsByClassName("wine5")[0].querySelectorAll(".searchable");
        const wine6Array = document.getElementsByClassName("wine6")[0].querySelectorAll(".searchable");

        matchResult("wine1", wine1Array);
        matchResult("wine2", wine2Array);
        matchResult("wine3", wine3Array);
        matchResult("wine4", wine4Array);
        matchResult("wine5", wine5Array);
        matchResult("wine6", wine6Array);
    }

    const matchResult = (address, array) => {
        const resultArray = Object.values(array)
            .filter(a => a.innerHTML.indexOf(keyword) >= 0);

        // if keyword matched with the word in the screen
        if (resultArray.length > 0) {
            if (address === "wine1") {
                setWine1ResultArray(resultArray);
            }

            if (address === "wine2") {
                setWine2ResultArray(resultArray);
            }

            if (address === "wine3") {
                setWine3ResultArray(resultArray);
            }

            if (address === "wine4") {
                setWine4ResultArray(resultArray);
            }

            if (address === "wine5") {
                setWine5ResultArray(resultArray);
            }

            if (address === "wine6") {
                setWine6ResultArray(resultArray);
            }
        }
    }

    return (
        <>
            <div>Searching</div>
            {wine1ResultArray.length > 0
                ?
                <div className="result">{wine1ResultArray[0].innerHTML}</div>
                :
                <div></div>
            }
            {wine2ResultArray.length > 0
                ?
                <div className="result">{wine2ResultArray[0].innerHTML}</div>
                :
                <div></div>
            }
            {wine3ResultArray.length > 0
                ?
                <div className="result">{wine3ResultArray[0].innerHTML}</div>
                :
                <div></div>
            }
            {wine4ResultArray.length > 0
                ?
                <div className="result">{wine4ResultArray[0].innerHTML}</div>
                :
                <div></div>
            }
            {wine5ResultArray.length > 0
                ?
                <div className="result">{wine5ResultArray[0].innerHTML}</div>
                :
                <div></div>
            }
            {wine6ResultArray.length > 0
                ?
                <div className="result">{wine6ResultArray[0].innerHTML}</div>
                :
                <div></div>
            }
            <div className="wine1 hide"><Wine1></Wine1></div>
            <div className="wine2 hide"><Wine2></Wine2></div>
            <div className="wine3 hide"><Wine3></Wine3></div>
            <div className="wine4 hide"><Wine4></Wine4></div>
            <div className="wine5 hide"><Wine5></Wine5></div>
            <div className="wine6 hide"><Wine6></Wine6></div>
        </>
    );
}

export default Searching;
