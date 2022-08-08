import React from 'react';
import classes from './Appointment.css'
import img from '../../../img/AppointmentSH.jpg'

const Appointment = () => {

    return (
        <section id='appointment'>
            <h3>Időpontfoglalás</h3>

            {/* <a target="_blank" href='https://www.calengoo.com/booking/access_bars/#/'><img className='appointmentSh' src={img} /></a> */}
            <p>idopontot online 3 nappal lehet foglalni, amennyiben surgos telefonos egyeztetes alapjan
                kozelebbi idopontot is talalunk.
            </p>
            <a className='bookAppointment' target="_blank" href='https://www.calengoo.com/booking/access_bars/#/'>idpontofoglalashoz kattincs ide >></a>
        </section>
    )
}

export default Appointment