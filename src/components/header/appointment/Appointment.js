import React from 'react';
import classes from './Appointment.css'
import img from '../../../img/AppointmentSH.jpg'

const Appointment = () => {

    return (
        <section id='időpontok'>
            <>
                <h3>Időpontfoglalás</h3>

                {/* <a target="_blank" href='https://www.calengoo.com/booking/access_bars/#/'><img className='appointmentSh' src={img} /></a> */}
                <p style={{ textAlign: 'center' }}>60 vagy 120 perces időpontok foglalására <a style={{ textDecoration: 'underline' }} href="tel:+36205334023">telefonon</a>, vagy az alábbi linken van lehetőség.
                </p>
                <a className='bookAppointment' target="_blank" href='https://www.calengoo.com/booking/access_bars/#/'>idpontofoglalashoz kattints ide>></a>
            </>
        </section >
    )
}

export default Appointment