import routes from "@/constants/routes"
import Link from "next/link"

export default function DesktopRoutes() {
    return (
        <div className="desktop-routes-container flex w-fit ml-auto mr-0">
            <div className="items-container items-center flex">
                {routes.map((route, index) => (
                    <Link
                        key={index}
                        className="route-item cursor-pointer hover:bg-gray-300 px-3 py-1 rounded-md transition-all duration-200"
                        href={route.path}
                    >
                        <div className="flex items-center gap-1">
                            <img
                                src={route.icon}
                                className="w-5 h-5"
                            />
                            <span className="text-sm font-semibold">{route.name}</span>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}