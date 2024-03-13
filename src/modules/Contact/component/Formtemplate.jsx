import React from 'react'

const Formtemplate = () => {
    return (
        <div>
            <div className="row col-sm-1 w-100 mt-3">
                <div className="col-md-6 ps-sm-4">
                <iframe className='w-100 h-100' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d242.26311473861747!2d72.82652728530697!3d21.186712953987794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04e683ea1565f%3A0xcb6edabe57ab9f20!2sKhangad%20St%2C%20Sagrampura%2C%20Surat%2C%20Gujarat%20395008!5e1!3m2!1sen!2sin!4v1709746489199!5m2!1sen!2sin"allowfullscreen="true" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div className="col-md-6 d-flex justify-content-center">
                    <div className="contact-form">
                        <form action="" id="contact-form">
                            <h2>Send Message</h2>
                            <div className="input-box">
                                <input type="text" required="true" name="" placeholder="Full Name" />

                            </div>

                            <div className="input-box">
                                <input type="email" required="true" name="" placeholder="Email" />
                            </div>

                            <div className="input-box">
                                <textarea required="true" name="" placeholder="Type your Message..."></textarea>
                            </div>

                            <div className="input-box">
                                <input type="submit" value="Send" name="" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Formtemplate
