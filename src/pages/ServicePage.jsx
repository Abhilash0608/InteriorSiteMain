import { useSelector } from 'react-redux'
import Navbar from '../components/Navbar'
import './servicePage.css'
import Portfolio from '../components/Portfolio'
const ServicePage = () => {
    const currentService = useSelector((state) => state.services.currentService)

    return (
        <main className="servicesPage-main  " key={currentService.id}>
            <div className=''>

                <div className="services-bg">
                    <Navbar />

                    <div className="service-header ">
                        <h1>{currentService.title}</h1>
                        <div className="breadcrumb">
                            <a href='/'>Home</a>
                            <p>-</p>
                            <h2>Service Details</h2>
                        </div>
                    </div>
                </div>

                
                <div className="services-list max-w-[90vw] m-auto mt-6">
                    <div className="details-section ">
                        <h1 className='text-[#8A7C56]'>{currentService.title}</h1>
                        <p>
                            {currentService.description}
                        </p>
                    </div>
                </div>
                {currentService.id === 2 && <Portfolio/>}

            </div>

        </main>

    )
}
export default ServicePage