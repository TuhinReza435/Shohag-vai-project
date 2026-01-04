import React from 'react';
import MovieItem from './movieItem';

const MovieList = ({movies,rateMovies,toggleWatched,deleteMovies}) => {
    return (
        <ul className='mt-4'>
            {
                movies.length()===0 ? alert("Please Enter a movie itam"):(
                    movies.map((movie)=>{
                        <MovieItem 
                         key={movie.id}
                         movie={movie}
                         rateMovies={rateMovies}
                         toggleWatched={toggleWatched}
                         deleteMovies={deleteMovies}
                        />;
                    })
                )
            }
        </ul>
    );
};
//  
export default MovieList;