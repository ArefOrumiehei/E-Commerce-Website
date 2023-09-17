import { Link } from 'react-router-dom';
import '../scss/NotFound.scss';

const NotFound = () => {
    return (
        <div className='notFound'>
            <div className="container">
                <div className="breadcrumb">
                    <div className="content">
                        <Link to='/' className='link'>Home</Link> / <span>404 Not Found</span>
                    </div>
                </div>
                <div className="mainContent">
                    <span className="title">404 Not Found</span>
                    <span className="desc">Your visited page not found. You may go home page.</span>
                    <Link to='/'>
                        <button>Back to home page</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NotFound;