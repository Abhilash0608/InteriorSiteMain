import { serviceData, workAchievements } from "../utils/servicesData"
import AchievementsSection from "./AchievementsSection"
import SectionHeader from "./SectionHeader"
const OurServices = () => {
    return (
        <main className="max-w-[90vw] m-auto">
            <div className="grid grid-cols-2 items-center py-8">
                <SectionHeader mainHeading="Explore our Best" subHeading="Services" />

               <AchievementsSection workAchievements={workAchievements}/>
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