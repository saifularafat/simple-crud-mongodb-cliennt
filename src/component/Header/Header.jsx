import { Link } from "react-router-dom";


const Header = () => {
    return (
        <div className="py-4 bg-slate-400 text-center">
            <Link to= '/' className="px-5 hover:underline">Home</Link>
            <Link to= 'users' className="hover:underline">Users</Link>
        </div>
    );
};

export default Header;