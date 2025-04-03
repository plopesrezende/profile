import React from 'react';

export default function Favicon() {
    return (
        <>
            <meta name="msapplication-TileColor" content="#3B82F6" />
            <meta name="theme-color" content="#ffffff" />
            <link rel="icon" type="image/png" href="/favicon/favicon-96x96.png" sizes="96x96" />
            <link rel="icon" type="image/svg+xml" href="/favicon/favicon.svg" />
            <link rel="shortcut icon" href="/favicon/favicon.ico" />
            <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
            <link rel="manifest" href="/favicon/site.webmanifest" />
        </>
    );
}