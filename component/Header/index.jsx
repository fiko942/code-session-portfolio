import appConfiguration from '@/constants/app'
import Navigator from './Navigator'

export default function Header() {
    return (
        <div className="flex items-center w-full h-[50px] shadow-gray-300 shadow-sm px-4">
            <div className="app cursor-pointer">
                <h1 className="name font-bold text-lg text-gray-600">{appConfiguration.name}</h1>
            </div>
            <Navigator />
        </div>
    )
}