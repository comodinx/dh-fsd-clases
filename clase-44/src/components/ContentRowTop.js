//
// imports
//
import React from 'react';
import ContentRowMetrics from './ContentRowMetrics';
import LastMovieInDb from './LastMovieInDb';
import GenresInDb from './GenresInDb';

//
// constants
//
const metrics = [{
    id: 1,
    titulo: 'MOVIES IN DATA BASE',
    cifra: 21,
    // color: 'primary',
    icono: 'film'
}, {
    id: 2,
    titulo: 'TOTAL AWARDS',
    cifra: 79,
    color: 'success',
    icono: 'award'
}, {
    id: 3,
    titulo: 'ACTORS QUANTITY',
    cifra: 49,
    color: 'warning',
    // icono: 'user'
}];

//
// component
//
function ContentRowTop(){
    return(
        <React.Fragment>
                {/*<!-- Content Row Top -->*/}
                <div className="container-fluid">
                    <div className="d-sm-flex aligns-items-center justify-content-between mb-4">
                        <h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
                    </div>

                    <ContentRowMetrics metrics={metrics} />

                    <div className="row">
                        <LastMovieInDb />
                        <GenresInDb />
                    </div>
                </div>
                {/*<!--End Content Row Top-->*/}

        </React.Fragment>
    )

}
export default ContentRowTop;