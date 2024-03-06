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
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
                <link href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400..700;1,400..700&family=Raleway:ital,wght@0,100..900;1,100..900&family=Tilt+Neon&display=swap" rel="stylesheet"></link>
            </head>
            <body>
                <div id="root">{children}</div>

            </body>
        </html>
    )
}