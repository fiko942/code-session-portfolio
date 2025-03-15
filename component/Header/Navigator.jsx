import { useEffect, useState } from "react"
import MenuIcon from '@mui/icons-material/Menu';
import isMobileScreen from "@/utils/isMobileScreen";
import MobileRoutes from "./MobileRoutes";

export default function Navigator() {
    const [isMobile, setIsMobile] = useState(true)
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)

    function handleResize() {
        setIsMobile(isMobileScreen())
    }

    useEffect(() => {
        handleResize()
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    if(isMobile) { // for the mobile navigator
        return (
            <>
                <div className="flex items-center w-fit ml-auto mr-0 cursor-pointer"
                    onClick={() => { setIsMobileNavOpen(true) }}
                >
                    <MenuIcon
                        fontSize="large"
                        className="text-gray-600"
                    />
                </div>
                <MobileRoutes
                    open={isMobileNavOpen}
                    onClose={() => setIsMobileNavOpen(false)}
                />
            </>
        )   
    }

    // For the desktop navigator
    return (
        <></>
    )
}