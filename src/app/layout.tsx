import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Foder Meal Planner',
  description: 'Planea tus comidas semanalmente',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <head>
                {/* <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
                <meta name="theme-color" content="#000000" /> */}
                {/* <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
                <link rel="manifest" href="%PUBLIC_URL%/manifest.json" /> */}
                {/* <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
                <link href="https://fonts.googleapis.com/css2?family=PT+Sans+Caption:wght@400;700&family=Jost:ital,wght@0,100..900;1,100..900&family=Raleway:ital,wght@0,100..900;1,100..900&family=Dosis:wght@400;500;600;700;800&family=Josefin+Sans:wght@300;400;500;600;700&family=Young+Serif&display=swap" rel="stylesheet" /> */}
            </head>
            <body>
                <div id="root">{children}</div>

            </body>
        </html>
    )
}