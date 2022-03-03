import ContentWrapper from './ContentWrapper';
import SideBar from './SideBar';

import '../assets/css/app.css';

export default function App () {
    return (
        <div id="wrapper">
            <SideBar />
            <ContentWrapper />
        </div>
    );
}
