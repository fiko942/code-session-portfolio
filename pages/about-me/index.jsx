import constants from '../../constants/about-me'
import socials from '@/constants/socials'
import StarIcon from '@mui/icons-material/Star';

export default function AboutMe() {
    return (
        <div className="about-me--page">
            {/* BEGIN MY PROFILE */}
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
            {/* END OF MY PROFILE */}
            {/* BEGIN SKILLS */}
            <section id="skils">
                <h3 className='text-center font-semibold text-lg mt-10'>My Skills</h3>
                <div className='flex flex-col items-center mt-2'>
                    <div className="skill-items grid grid-cols-2 gap-4">
                        {constants.skills.map((skill, index) => (
                            <div
                                key={index}
                                className='bg-white shadow-white-300 shadow-md rounded-lg px-4 py-2'
                            >
                                <span className='font-semibold text-gray-600'>{skill.name}</span>
                                <div className="grade-container">
                                    {Array.from({ length: skill.grade }).map((_, index) => (
                                        <StarIcon
                                            key={index}
                                            className='text-yellow-500'
                                        />
                                    ))}
                                    {Array.from({ length: 5 - skill.grade }).map((_, index) => (
                                        <StarIcon
                                            key={index}
                                            className='text-gray-400'
                                        />
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* END OF SKILLS */}
            {/* BEGIN FUNFACTS */}
            <section id="funfacts">
                <h3 className='text-center font-semibold text-lg mt-10'>Fun Fact</h3>
                <p className='italic text-md font-semibold text-gray-500 w-[350px] max-w-full text-center mx-auto mt-12'>〝Ketika saya mandi saya tidak suka menggunakan handuk, biasanya saya menggunakan tisu sebanyak banyaknya untuk mengeringkan badan dan juga rambut saya.〞</p>
            </section>
            {/* END OF FUNFACTS */}
        </div>
    )
}