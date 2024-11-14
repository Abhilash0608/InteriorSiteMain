const ContactUs = () => {
    return (
        <main className="flex w-[90vw] m-auto my-2">
            <div className="flex flex-col justify-center items-center w-full my-4 py-12 gap-8 contact-form">
                <h1>Contact Us</h1>
                <div className="flex items-center justify-center w-[50%] my-2">

                    <div className="flex flex-col gap-4 w-full">
                        <div className="flex flex-col gap-1">
                            <label htmlFor="name">Name</label>
                            <input placeholder="Enter Your Name" className="contact-input" id="name" />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label htmlFor="email">Email</label>
                            <input placeholder="Enter Your Email" id="email" className="contact-input" />
                        </div>

                        <div className="flex flex-col gap-1">
                            <label htmlFor="message">Message</label>
                            <textarea id="message" className="contact-textArea" />
                        </div>
                        <div className="flex justify-center items-center bg-orange-600 text-white p-2 rounded-xl mt-2 ">
                            <button className="w-[40%]">Submit</button>

                        </div>
                    </div>
                </div>


            </div>

        </main>
    )
}
export default ContactUs