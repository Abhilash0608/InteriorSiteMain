import { useSelector } from 'react-redux'
import Navbar from '../components/Navbar'
import './servicePage.css'
import Slider from '../components/Slider'
const ServicePage = () => {
    const currentService = useSelector((state) => state.services.currentService)

    return (
        <main className="servicesPage-main  " key={currentService.id}>
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

                    >
                        <Slider />
                    </div>


                </div>
                <div className="services-list max-w-[90vw] m-auto">
                    <div className="details-section ">
                        <h1>{currentService.title}</h1>
                        <p>
                            {currentService.description}
                        </p>
                    </div>
                </div>


            </div>

        </main>

    )
}
export default ServicePage