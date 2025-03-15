import { useState } from "react"
import MenuIcon from '@mui/icons-material/Menu';

export default function Navigator() {
    const [isMobile, setIsMobile] = useState(true)

    if(isMobile) { // for the mobile navigator
        return (
            <div className="flex items-center w-fit ml-auto mr-0 cursor-pointer">
                <MenuIcon
                    fontSize="large"
                    className="text-gray-600"
                />
            </div>
        )
    }

    // For the desktop navigator
    return (
        <></>
    )
}