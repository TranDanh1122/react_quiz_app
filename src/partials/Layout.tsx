import React from "react"
import Header from "./Header"
interface Layout {
    children: React.ReactNode
}
const Layout: React.FC<Layout> = ({ children }): React.JSX.Element => {
    return (
        <div className="w-[90%] max-w-[1160px] mx-auto">
            <Header></Header>
            {children}
        </div>




    )
}
export default Layout