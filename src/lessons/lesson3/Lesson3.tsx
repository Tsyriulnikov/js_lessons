import React, {useState} from 'react';
import API from './API';
import './lesson_3';


const Lesson3 = () => {
    const [searchName, setSearchName] = useState('');
    const [serachResult, setSerachResult] = useState('');
    const [searchNameByType, setSearchNameByType] = useState('');
    const [serachResultByType, setSerachResultByType] = useState('');


    const searchFilm = async () => {
        try {
            const {data} = await API.searchFilmsByTitle(searchName);
            const {Search, Error, Response} = data;
            if (Response === 'True') {
                setSerachResult(JSON.stringify(Search));
            } else {
                setSerachResult(Error);
            }
        } catch (e) {
            console.log(e);
        }
    };

        const searchByType = async (e: React.MouseEvent<HTMLButtonElement>) => {
        try {
            let triggerType: string = 'movie'
            if (e.currentTarget.dataset.t) {
                triggerType = e.currentTarget.dataset.t;
            }

            const {data} = await API.searchFilmsByType(searchNameByType, triggerType);
            const {Search, Error, Response} = data;
            if (Response === 'True') {
                setSerachResultByType(JSON.stringify(Search));
            } else {
                setSerachResultByType(Error);
            }
        } catch (e) {
            console.log(e);
        }
    };


    return (
        <div>
            <h1>Promises</h1>
            <div>
                <h3><p>Search by name:</p></h3>
                <input type="text" value={searchName} onChange={(e) => setSearchName(e.currentTarget.value)}/>
                <button onClick={searchFilm}>Search</button>
                <div>
                    {serachResult}
                </div>
            </div>

            <div>
                <h3><p>Search by type:</p></h3>
                <input type="text" value={searchNameByType}
                       onChange={(e) => setSearchNameByType(e.currentTarget.value)}/>
                <button onClick={searchByType} data-t='movie'>Movie</button>
                <button onClick={searchByType} data-t='series'>Series</button>
                <div>
                    {serachResultByType}
                </div>
            </div>
        </div>
    );
}
export default Lesson3;