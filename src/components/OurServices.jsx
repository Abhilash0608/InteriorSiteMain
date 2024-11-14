import { serviceData, workAchievements } from "../utils/servicesData"
import SectionHeader from "./SectionHeader"
const OurServices = () => {
    return (
        <main className="max-w-[90vw] m-auto">
            <div className="grid grid-cols-2 items-center py-8">
                <SectionHeader mainHeading="Explore our Best" subHeading="Services" />

                <div className="border-div flex gap-8">
                    {workAchievements.map((item) => (
                        <div key={item.title} className="service-card flex flex-col gap-4">
                            <div className="flex items-center">
                                <h1 className="text-[36px]">{item.title}</h1>
                                <p>+</p>
                            </div>
                            <div className="header-line"></div>
                            <div className="text-[18px] text-gray-400">{item.description}</div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="card-container">
                {serviceData.map((service) => (
                    <div key={service.id} className="card">
                        <h3 className="card-no">{`0${service.id}`}</h3>
                        <h2 className="card-title">{service.title}</h2>
                        <p className="card-description">{service.description}</p>
                    </div>
                ))}
            </div>
        </main>

    )
}
export default OurServices