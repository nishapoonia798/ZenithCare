import React, { useEffect, useState } from 'react';
import api from '../services/api';

function Appointments() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    api.get('/appointments') // Adjust this to match your backend route
      .then(res => setAppointments(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>Appointments</h2>
      {appointments.length > 0 ? (
        <ul>
          {appointments.map((appt, i) => (
            <li key={i}>
              <strong>{appt.patientName}</strong> — {appt.date}
            </li>
          ))}
        </ul>
      ) : (
        <p>No appointments found.</p>
      )}
    </div>
  );
}

export default Appointments;
