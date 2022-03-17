//
// imports
//
import ContentColumnMetric from './ContentColumnMetric';

//
// component
//
export default function ContentRowMetrics ({ metrics }) {
    return (
        <div className="row">
            {metrics.map(metric => <ContentColumnMetric key={metric.id} {...metric} />)}
        </div>
    );
}
