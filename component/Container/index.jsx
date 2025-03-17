import Footer from "../Footer";
import Header from "../Header";

export default function Container({ children }) {
    return (
        <div className="container--app">
            <Header />
            {children}
            <Footer />
        </div>
    )
}