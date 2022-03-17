//
// imports
//
import PropTypes from 'prop-types';

//
// component
//
function ContentColumnMetric ({ titulo, cifra, color, icono }) {
    return (
        <div className="col-md-4 mb-4">
            <div className={`card border-left-${color} shadow h-100 py-2`}>
                <div className="card-body">
                    <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                            <div className={`text-xs font-weight-bold text-${color} text-uppercase mb-1`}>{titulo}</div>
                            <div className="h5 mb-0 font-weight-bold text-gray-800">{cifra}</div>
                        </div>
                        <div className="col-auto">
                            <i className={`fas fa-${icono} fa-2x text-gray-300`}></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

//
// configure
//
ContentColumnMetric.propTypes = {
    titulo: PropTypes.string.isRequired,
    cifra: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    color: PropTypes.oneOf(['primary', 'success', 'warning']),
    icono: PropTypes.string.isRequired
};

ContentColumnMetric.defaultProps = {
    color: 'primary',
    icono: 'user'
};

//
// export
//
export default ContentColumnMetric;
