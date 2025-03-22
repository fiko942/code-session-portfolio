import historicalSchools from "@/constants/school";

export default function School() {
    return (
        <div className="school--page">
            <div className="w-[450px] max-w-full mx-auto mt-4 overflow-hidden">
                <p className="text-sm text-gray-600">Semenjak saya belajar di sekolah saya selalu mempunyai keinginan untuk explore hal hal baru, dan juga berteman dengan orang baru. Mungkin itu menjadi suatu hal yang menyenangkan bagi saya, dan ini adalah riwayat pendidikan saya dari High School hingga Sarjana.</p>
                <section id="school-list" className="pb-4">
                   <div className="flex flex-col gap-4 mt-4 px-2">
                    {historicalSchools.map((school, i) => (
                            <div
                                key={i}
                                className="flex flex-col gap-2 p-4 bg-white  rounded-md drop-shadow-md !shadow-[3px_3px_3px_3px_rgba(0,0,0,0.5)] hover:!shadow-[1px_1px_1px_1px_rgba(0,0,0,0.5)] duration-100 transition-all"
                            >
                                <h2 className="text-lg font-semibold text-gray-700">{school.name}</h2>
                                <p className="text-sm text-gray-700">Major: {school.major}</p>
                                <p className="text-sm text-gray-700">Period: {school.year[0]} - {school.year[1]}</p>
                                <p className="text-gray-600 text-xs ">Address: {school.address}</p>
                            </div>
                        ))}
                   </div>
                </section>
            </div>
        </div>
    )
}