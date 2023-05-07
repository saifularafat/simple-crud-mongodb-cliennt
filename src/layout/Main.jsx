import { Outlet } from "react-router-dom";
import Header from "../component/Header/Header";
import Footer from "../component/Footer/Footer";

const Main = () => {
    return (
        <div>
            <Header />
            <div className="min-h-[calc(100vh-96px)]">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Main;