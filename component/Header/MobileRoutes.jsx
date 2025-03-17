import routes from "@/constants/routes"
import { useEffect, useState } from "react"
import CloseIcon from '@mui/icons-material/Close';
import Link from "next/link";

export default function MobileRoutes({ open, onClose }) {
    const [windowHeight, setWindowHeight] = useState(null)

    useEffect(() => {
        setWindowHeight(window.innerHeight)
    }, [open])

    return (
        <div className="mobile-routes" style={{
            width: '100vw',
            position: 'fixed',
            top: open ? 0 : `-${windowHeight}px`,
            left: 0,
            background: 'rgba(0,0,0,0.8)',
            zIndex: 1000,
            height: '100vh',
            transition: 'all 0.3s',
            backdropFilter: 'blur(5px)'
        }}>
            <button onClick={onClose} className="absolute top-0 right-0 cursor-pointer p-2">
                <CloseIcon className="text-white" />
            </button>
            <div className="route-items items-center w-fit flex flex-col mx-auto mt-20 gap-5">
                {routes.map((route, index) => (
                    <Link
                        key={index}
                        className="cursor-pointer"
                        href={route.path}
                    >
                        <div className="flex items-center gap-2">
                            <img 
                                alt={route.name}
                                src={route.icon}
                                className="w-12 h-12"
                            />
                            <span className="name text-white font-semibold text-lg">{route.name}</span>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}