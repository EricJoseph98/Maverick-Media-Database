import { useEffect, useState } from 'react';
import axios from "axios";

import '../Trending/Trending.css';

import SingleContent from '../../components/SingleContent/SingleContent';
import CustomPagination from '../../components/Pagination/CustomPagination';
import Genres from '../../components/Genres';
import useGenre from '../../components/hooks/useGenre';

const Series = () => {
    const [page, setPage] = useState(1);
    const [content, setContent] = useState([]);
    const [numOfPages, setNumOfPages] = useState(0);
    const [genres, setGenres] = useState([]);
    const [selectedGenres, setSelectedGenres] = useState([]);

    const genreForUrl = useGenre(selectedGenres);

    const fetchTVSeries = async() => {
        const { data } = await axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreForUrl}`);
        setContent(data.results);
        setNumOfPages(data.total_pages);
        console.log(data);
    }

    useEffect(() => {
        fetchTVSeries();
        // eslint-disable-next-line
    }, [page, genreForUrl]);

    return(
        <div>
            <span className="pageTitle">TV Series</span>
            <Genres type="tv" genres={genres} setGenres={setGenres} selectedGenres={selectedGenres} setSelectedGenres={setSelectedGenres} setPage={setPage}/>
            <div className="trending">
                {
                    content && content.map((c) => {
                        return(
                            <SingleContent key={c.id} id={c.id} poster={c.poster_path} title={c.title || c.name}
                            date={c.release_date || c.first_air_date} media_type="tv" vote_average={c.vote_average}/>
                        )
                    })
                }
                <br/>
                { numOfPages > 1 && <CustomPagination setPage={setPage} noOfPages={numOfPages}/> }
            </div>
        </div>
    );
}

export default Series;