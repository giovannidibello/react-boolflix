// Header.jsx
import { useState, useContext } from 'react'
import GlobalContext from "../contexts/GlobalContext";

//  aggiungo il campo vuoto al form
const initialFormData = { cerca: "" };

export default function Header() {

    const [formData, setFormData] = useState(initialFormData);
    const { fetchData } = useContext(GlobalContext);

    // funzione di gestione delle info dei campi
    function handleFormData(e) {

        const value = e.target.value;
        // setto tramite la info prese dal campo del form
        setFormData({ cerca: value });
    }

    // funzione di gestione dell'invio del form
    function handleSubmit(e) {
        e.preventDefault();
        fetchData(formData.cerca);
    }


    return (
        <header>
            <h1>BOOLFLIX</h1>
            <form id='formpost' onSubmit={handleSubmit}>
                {/* campo di ricerca */}
                <input
                    type="text"
                    name="cerca"
                    value={formData.cerca}
                    onChange={handleFormData}
                    placeholder='Cerca...'
                />

            </form>
        </header>
    );

}