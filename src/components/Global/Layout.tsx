import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout() {
    return (
        <div>
            <Header />
            <Outlet /> {/* Renders the matched child route */}
            <Footer />
        </div>
    );
}
