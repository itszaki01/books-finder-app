import React, { ChangeEvent, useState, MouseEvent } from "react";
import "./SearchFrom.scss";
import { FaSistrix } from "react-icons/fa6";

type SearchcFormProps = {
    setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
};
export default function SearchFrom({setSearchTerm}: SearchcFormProps) {
    const [searchValue, setSearchValue] = useState<string>("");

    //handleFromSubmit
    function handleFromSubmitButtonClick(e: MouseEvent<HTMLButtonElement>) {
        e.preventDefault();
        setSearchTerm(searchValue)        
    }

    //handleSearchInputChange
    function handleSearchInputChange(e: ChangeEvent<HTMLInputElement>) {
        setSearchValue(e.target.value);
    }
    return (
        <div className="search-from-container">
            <form>
                <input type="search" placeholder="Search For A Book" value={searchValue} onChange={handleSearchInputChange} />
                <button onClick={handleFromSubmitButtonClick}>
                    <FaSistrix />
                </button>
            </form>
        </div>
    );
}
