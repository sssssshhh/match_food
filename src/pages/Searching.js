import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Lemon from "pages/lemon";
import Wine from "pages/wine";
import Icecream from "pages/icecream";
import Martini from "pages/martini";
import Fish from "pages/fish";
import Cheese from "pages/cheese";

const Searching = () => {
    const { keyword } = useParams();

    const [lemonResultArray, setLemonResultArray] = useState([]);
    const [wineResultArray, setWineResultArray] = useState([]);
    const [icecreamResultArray, setIcecreamResultArray] = useState([]);
    const [martiniResultArray, setMartiniResultArray] = useState([]);
    const [fishResultArray, setFishResultArray] = useState([]);
    const [cheeseResultArray, setCheeseResultArray] = useState([]);

    useEffect(() => {
        findSearchResult();
    }, []);

    const findSearchResult = () => {
        const lemonArray = document.getElementsByClassName("lemon")[0].querySelectorAll(".searchable");
        const wineArray = document.getElementsByClassName("wine")[0].querySelectorAll(".searchable");
        const icecreamArray = document.getElementsByClassName("icecream")[0].querySelectorAll(".searchable");
        const martiniArray = document.getElementsByClassName("martini")[0].querySelectorAll(".searchable");
        const fishArray = document.getElementsByClassName("fish")[0].querySelectorAll(".searchable");
        const cheeseArray = document.getElementsByClassName("cheese")[0].querySelectorAll(".searchable");

        matchResult("lemon", lemonArray);
        matchResult("wine", wineArray);
        matchResult("icecream", icecreamArray);
        matchResult("martini", martiniArray);
        matchResult("fish", fishArray);
        matchResult("cheese", cheeseArray);
    }

    const matchResult = (address, array) => {
        const resultArray = Object.values(array)
            .filter(a => a.innerHTML.indexOf(keyword) >= 0);

        // if keyword matched with the word in the screen
        if (resultArray.length > 0) {
            if (address === "lemon") {
                setLemonResultArray(resultArray);
            }

            if (address === "wine") {
                setWineResultArray(resultArray);
            }

            if (address === "icecream") {
                setIcecreamResultArray(resultArray);
            }

            if (address === "martini") {
                setMartiniResultArray(resultArray);
            }

            if (address === "fish") {
                setFishResultArray(resultArray);
            }

            if (address === "cheese") {
                setCheeseResultArray(resultArray);
            }
        }
    }

    return (
        <>
            <div className="showKeyword">This is the result for "{keyword}" and I found ..</div>
            {lemonResultArray.length > 0
                ?
                <div className="result">{lemonResultArray[0].innerHTML}</div>
                :
                <div></div>
            }
            {wineResultArray.length > 0
                ?
                <div className="result">{wineResultArray[0].innerHTML}</div>
                :
                <div></div>
            }
            {icecreamResultArray.length > 0
                ?
                <div className="result">{icecreamResultArray[0].innerHTML}</div>
                :
                <div></div>
            }
            {martiniResultArray.length > 0
                ?
                <div className="result">{martiniResultArray[0].innerHTML}</div>
                :
                <div></div>
            }
            {fishResultArray.length > 0
                ?
                <div className="result">{fishResultArray[0].innerHTML}</div>
                :
                <div></div>
            }
            {cheeseResultArray.length > 0
                ?
                <div className="result">{cheeseResultArray[0].innerHTML}</div>
                :
                <div></div>
            }
            <div className="lemon hide"><Lemon></Lemon></div>
            <div className="wine hide"><Wine></Wine></div>
            <div className="icecream hide"><Icecream></Icecream></div>
            <div className="martini hide"><Martini></Martini></div>
            <div className="fish hide"><Fish></Fish></div>
            <div className="cheese hide"><Cheese></Cheese></div>
        </>
    );
}

export default Searching;
