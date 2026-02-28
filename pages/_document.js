import { Head, Html, Main, NextScript } from 'next/document'
export default function Document() {
    return (
        <Html lang="pt-BR">
            <Head />
            <link rel="icon" type="image/png" href="/assets/images/app-icon.png" />
            <link rel="preconnect" href="https://fonts.bunny.net" />
            <link
                href="https://fonts.bunny.net/css?family=montserrat:400,500,600"
                rel="stylesheet"
            />
            <body className="theme-creote">
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
