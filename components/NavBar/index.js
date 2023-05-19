import { useRouter } from "next/router"
import Container from "../Container"

const NavBar = ()=>{

    const router = useRouter()
    return (
        <div
            className="
            w-full 
            bg-bg-primary-color 
            z-10 
            shadow-sm
            "
        >
            <div
                className="py-6 border-b-[1px]"
            >
                <Container>
                    <div
                        className="
                            flex
                            flex-row
                            items-center
                            justify-between
                            gap-3
                            md:gap-0
                        "
                    >
                        {/* Logo */}
                        <p
                            className="text-2xl font-semibold"
                            onClick={()=>router.push("/")}
                        >
                            Tasty Kathmandu
                        </p>
                      
                    </div>
                </Container>
            </div>
        </div>
    )
}


export default NavBar