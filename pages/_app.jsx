import Container from "@/component/Container";
import '../styles/app.css'

export default function App({ Component, pageProps }) {
    return (
        <>
            <Container>
                <Component {...pageProps} />
            </Container>
        </>
    )
}