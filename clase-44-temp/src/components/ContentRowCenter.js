//
// imports
//
import React from 'react';
import ContentRowMovie from './ContentRowMovie';

//
// constants
//
const movies = [{
    id: 1,
    title: 'Billy Elliot',
    duration: 123,
    rating: 5,
    awars: 2,
    genres: [{
        id: 1,
        title: 'Drama'
    }, {
        id: 3,
        title: 'Comedia'
    }]
}, {
    id: 2,
    title: 'Alicia en el país de las maravillas',
    duration: 142,
    rating: 4.8,
    awars: 3,
    genres: [{
        id: 1,
        title: 'Drama'
    }, {
        id: 2,
        title: 'Acción'
    }, {
        id: 3,
        title: 'Comedia'
    }]
}];

//
// component
//
export default function ContentRowCenter () {
    return (
        <React.Fragment>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12 mb-4">
                        <div className="card shadow">
                            <div className="card-body">
                                <table className="table table-bordered mb-0">
                                    <thead>
                                        <tr>
                                            <th>Título</th>
                                            <th>Duración</th>
                                            <th>Rating</th>
                                            <th>Género</th>
                                            <th>Premios</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {movies.map(movie => <ContentRowMovie key={movie.id} {...movie} />)}
                                    </tbody>

                                    <tfoot>
                                        <tr>
                                            <th>Título</th>
                                            <th>Duración</th>
                                            <th>Rating</th>
                                            <th>Género</th>
                                            <th>Premios</th>
                                        </tr>
                                    </tfoot>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
