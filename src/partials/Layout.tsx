import React from "react"
import Header from "./Header"
interface Layout {
    children: React.ReactNode
}
const Layout: React.FC<Layout> = ({ children }): React.JSX.Element => {
    return (
        <>
            <Header></Header>
            <main>
                {children}
            </main>
        </>

    )
}
export default Layout