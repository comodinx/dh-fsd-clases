import React from 'react';

function ContentWrapper(){
    return (
        <React.Fragment>
            {/*<!-- Content Wrapper -->*/}
            <div id="content-wrapper" className="d-flex flex-column">
                {/*<!-- Main Content -->*/}
                <div id="content" className="bg-white">
                    <div className="container">
                        <div className="row">
                            <div className="col-7 d-flex flex-column justify-content-center">
                                <h1 className="mb-5">
                                    <b className="font-weight-bolder">404</b> PAGINA NO ENCONTRADA
                                </h1>
                                <h4 className="mb-5">¡HYDRA está atacando esta página actualmente!</h4>
                                <p>Verifique que haya escrito la dirección correctamente.</p>
                            </div>
                            <div className="col-5 d-flex align-content-center justify-content-center">
                                <img src="https://i.annihil.us/u/prod/marvel/html_pages_assets/error-pages/prod/iron-man-char.72fe5e86.jpg" alt="404" height="100%" className="my-auto" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>    
        </React.Fragment>
    )
}
export default ContentWrapper;