import React, { useEffect } from 'react';
import axios from 'axios';
import Chip from '@material-ui/core/Chip';

const Genres = ({genres, setGenres, selectedGenres, setSelectedGenres, setPage, type}) => {

    const handleAdd = (genre) => {
        setSelectedGenres([...selectedGenres, genre]);
        setGenres(genres.filter((g) => g.id !== genre.id)); 
        setPage(1);
    }

    const handleRemove = (genre) => {
        setSelectedGenres(selectedGenres.filter((g) => g.id !== genre.id)); 
        setGenres([...genres, genre]);
        setPage(1);
    }

    const fetchGenres = async() => {
        const { data } = await axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`);
        setGenres(data.genres);
        // console.log(data.genres);
    }

    useEffect(() => {
        fetchGenres();
        return () => {
            setGenres({});
        };
        // eslint-disable-next-line
    }, []);

    return(
        <div style={{ padding: "6px 0" }}>
            { selectedGenres && selectedGenres.map((genre) => (<Chip key={genre.id} size="small" label={genre.name} style={{ margin: 3 }} color="primary" onDelete={() => handleRemove(genre)} clickable />)) }
            
            { genres && genres.map((genre) => (<Chip key={genre.id} size="small" label={genre.name} style={{ margin: 3 }} clickable 
                onClick={() => handleAdd(genre)}/>)) }
        </div>
    );
}
export default Genres;