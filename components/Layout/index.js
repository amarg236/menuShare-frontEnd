import SideBar from "../SideBar";


const Layout = ({children})=>{

    return (
        <div
            className="h-screen bg-white"
        >
        <div className="
                container 
                h-full  
                max-w-full
            ">
            <div className="grid grid-cols-4 h-full">
                <SideBar />
                <div 
                    className="
                    col-span-3 
                    lg:col-span-3
                    border-x-[1px] 
                    border-neutral-800
                ">
                    {children}
                </div>
    
            </div>
        </div>
        </div>
    )
}


export default Layout;