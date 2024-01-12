import Outlet from 'react-router-dom';
import Sitebar from '../Pages/Dashbord/Sitebar/Sitebar';

const Dashbord = () => {
    return (
        <div className='flex '>
            <div>
                <Sitebar></Sitebar>
            </div>
            <div className='flex-1 bg-white'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashbord;