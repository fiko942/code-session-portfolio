import constants from '../../constants/about-me'
import socials from '@/constants/socials'

export default function AboutMe() {
    return (
        <div className="about-me--page">
            <section id="my-profile">
                <div className='flex w-fit flex-col mx-auto mt-12 border-2 border-gray-200 p-6 rounded-xl shadow-2xl'>
                    <img
                        src={constants.profilePicture}
                        alt={constants.name}
                        className='profile-picture rounded-xl max-w-full w-[300px]'
                    />
                    <h2 className="name text-center text-2xl font-semibold mt-3">Wiji Fiko Teren</h2>
                    <p className='max-w-[300px] text-sm italic mt-1'>"Hi everyone, Im Wiji Fiko Teren, I'm so antusiast to collaborate with the open source software, please contact me when you're need collaborate with me."</p>
                    <div className="flex items-center gap-2 mt-2 w-fit mx-auto">
                        {socials.map((social, index) => (
                            <a
                                key={index}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img 
                                    src={social.icon}
                                    className='w-8 h-8'
                                    alt={social.name}
                                    title={social.name}
                                />
                            </a>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}