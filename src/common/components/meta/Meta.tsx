import React from 'react'

const Meta = () => {
    return (
        <>
            {/* Favicons */}
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
            <link rel="manifest" href="/site.webmanifest" />
            <link rel="canonical" href="https://danfolio.vercel.app/"></link>
            <link rel="pingback" href="https://danfolio.vercel.app/"></link>

            {/* General Metadata */}
            <meta name="author" content="Dani Maulana" />
            <title>Dani Maulana (@dnm17_), a full stack web developer</title>
            <meta title="Dani Maulana (@dnm17_), a full stack web developer" name="title" />

            {/* Description and Keywords Metadata */}
            <meta
                name="description"
                content="I'm a web developer with a passion for creating beautiful and functional websites and 2D web games. I am a self-taught developer with a strong foundation in HTML, CSS, and JavaScript."
            />
            <meta
                name="keywords"
                content="javascript, typescript, react js, next js, express js, node js, mongodb, mern stack developer, web development, website development, web developer, website developer"
            />

            {/* Open Graph Tags (for Facebook) */}
            <meta property="og:site_name" content="Dani Maulana" />
            <meta property="og:url" content="https://danfolio.vercel.app/" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content="Dani Maulana (@dnm17_), a full stack web developer" />
            <meta
                property="og:description"
                content="I'm a web developer with a passion for creating beautiful and functional websites and 2D web games. I am a self-taught developer with a strong foundation in HTML, CSS, and JavaScript."
            />
            <meta property="og:image" content="https://danfolio.vercel.app/preview.png" />

            {/* Article Publisher Metadata */}
            <meta property="article:publisher" content="https://www.linkedin.com/in/dani-maulana-58798b215/" />

            {/* Twitter Card Tags */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="@dnm17_" />
            <meta name="twitter:title" content="Dani Maulana (@dnm17_), a full stack web developer" />
            <meta
                name="twitter:description"
                content="I'm a web developer with a passion for creating beautiful and functional websites and 2D web games. I am a self-taught developer with a strong foundation in HTML, CSS, and JavaScript."
            />
            <meta name="twitter:image" content="https://danfolio.vercel.app/preview.png" />

            {/* Pinterest Tags */}
            <meta name="pinterest-rich-pin" content="true" />
            <meta name="pinterest:title" content="Dani Maulana (@dnm17_), a full stack web developer" />
            <meta
                name="pinterest:description"
                content="I'm a web developer with a passion for creating beautiful and functional websites and 2D web games. I am a self-taught developer with a strong foundation in HTML, CSS, and JavaScript."
            />
            <meta name="pinterest:image" content="https://danfolio.vercel.app/preview.png" />
        </>
    )
}

export default Meta
