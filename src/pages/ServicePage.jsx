import { useSelector } from 'react-redux'
import image1 from '../assets/image1.jpg'
import Navbar from '../components/Navbar'
import { serviceData } from '../utils/servicesData'
import './servicePage.css'
const ServicePage = () => {
    const currentService = useSelector((state) => state.services.currentService)

    return (
        <main className="servicesPage-main  ">
            <div className=''>

                <div className="services-bg">
                    <Navbar />

                    <div className="service-header">
                        <h1>{currentService.title}</h1>
                        <div className="breadcrumb">
                            <a href='/'>Home</a>
                            <p>-</p>
                            <h2>Service Details</h2>
                        </div>
                    </div>
                </div>

                <div className="content-container w-[90vw] m-auto">
                    <div
                        className="image-container"
                        style={{ backgroundImage: `url(${image1})` }}
                    ></div>

                    <div className="services-list">
                        <h2>Main Services</h2>
                        <ul>
                            {serviceData.map((item) => {
                                return <li>{item.title}</li>
                            })}
                        </ul>
                    </div>
                </div>

                <div className="details-section w-[90vw]">
                    <h1>{currentService.title}</h1>
                    <p>
                        {currentService.description}
                    </p>
                </div>
            </div>

        </main>

    )
}
export default ServicePage