import Container from "@/component/Container";

export default function App({ Component, pageProps }) {
    return (
        <>
            <Container>
                <h2>h2</h2>
            </Container>
             <Component {...pageProps} />
        </>
    )
}