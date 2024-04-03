import React, { useState } from 'react';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFolder } from '@fortawesome/free-solid-svg-icons';

function OmbudsmanOptions() {
    const [fullName, setFullName] = useState('');
    const [occupation, setOccupation] = useState('');
    const [telephone, setTelephone] = useState('');
    const [type, setType] = useState('');
    const [character, setCharacter] = useState('');
    const [subject, setSubject] = useState('');
    const [reportOfFact, setReportOfFact] = useState('');
    const [message, setMessage] = useState('');
    const [agree, setAgree] = useState(false);
    const [formSubmitted, setFormSubmitted] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!fullName || !occupation || !telephone || !type || !character || !subject || !reportOfFact) {
            setMessage('Please fill in all fields.');
            setTimeout(() => {
                setMessage('');
            }, 1000);
            return;
        }
        if (!agree) {
            setMessage('Please accept the terms.');
            setTimeout(() => {
                setMessage('');
            }, 1000);
            return;
        }
        setMessage('Message sent successfully!');
        setFormSubmitted(true);
        setFullName('');
        setOccupation('');
        setTelephone('');
        setType('');
        setCharacter('');
        setSubject('');
        setReportOfFact('');
        setAgree(false);
        setTimeout(() => {
            setMessage('');
        }, 1000);
    };

    return (
        <div className="ombudsman-options" style={{ marginTop: '20px' }}>
            <div className="card">
                <h1>Ombudsman</h1>
            </div>
            <div className='intro'>
                <p>
                    The Unifacisa Ombudsman's Office is a communication channel of a mediating and democratic nature, which welcomes the manifestations of students, teachers,<br />
                    employees and the community in general. If you have any complaints, reports, suggestions, requests or compliments, please contact us via<br />
                    our email: <a href="mailto:ombudsman@unifacisa.edu.br">ombudsman@unifacisa.edu.br</a> or if you prefer, fill out our form by clicking on the link below.
                </p>
            </div>
            <form onSubmit={handleSubmit}>
                <label>Full Name:</label>
                <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Enter your full name"

                />

                <label>Occupation:</label>
                <select
                    value={occupation}
                    onChange={(e) => setOccupation(e.target.value)}
                    style={{
                        padding: '4px',
                        fontSize: '14px',
                        border: '1px solid #ccc',
                        borderRadius: '4px',
                        width: '100%',
                        boxSizing: 'border-box',
                        marginBottom: 10,
                        fontFamily: "roboto",
                        color: 'grey'
                    }}
                >
                    <option value="">Select an occupation</option>
                    <option value="Student">Student (Unifacisa/ESAC)</option>
                    <option value="Teacher">Teacher (Unifacisa/ESAC)</option>
                    <option value="Collaborator">Collaborator (Unifacisa/ESAC)</option>
                    <option value="Other">Other (External Community)</option>

                </select>

                <label>Telephone:</label>
                <input
                    type="tel"
                    value={telephone}
                    onChange={(e) => {
                        const re = /^[0-9\b]+$/;
                        if (e.target.value === '' || re.test(e.target.value)) {
                            setTelephone(e.target.value);
                        }
                    }}
                    pattern="[0-9]*"
                    placeholder="Enter your telephone number"
                />

                <label>Type:</label>
                <select
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                    style={{
                        padding: '4px',
                        fontSize: '14px',
                        border: '1px solid #ccc',
                        borderRadius: '4px',
                        width: '100%',
                        boxSizing: 'border-box',
                        marginBottom: 10,
                        fontFamily: "roboto",
                        color: 'grey'
                    }}
                >
                    <option value="">Select a type</option>
                    <option value="Complaint with Proof">Complaint with Proof</option>
                    <option value="Complaint">Complaint</option>
                    <option value="Review">Review</option>
                    <option value="Praise">Praise</option>
                    <option value="Query">Query</option>
                    <option value="Request">Request</option>
                    <option value="Suggestion">Suggestion</option>

                </select>

                <label>Character:</label>
                <select
                    value={character}
                    onChange={(e) => setCharacter(e.target.value)}
                    style={{
                        padding: '4px',
                        fontSize: '14px',
                        border: '1px solid #ccc',
                        borderRadius: '4px',
                        width: '100%',
                        boxSizing: 'border-box',
                        marginBottom: 10,
                        fontFamily: "roboto",
                        color: 'grey'
                    }}
                >
                    <option value="">Select a character</option>
                    <option value="Confidential on Request">Confidential on Request</option>
                    <option value="Not">Not Confidential</option>

                </select>

                <label>Subject:</label>
                <input
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="Enter subject"
                />

                <label>Report of Fact:</label>
                <input
                    type="text"
                    value={reportOfFact}
                    onChange={(e) => setReportOfFact(e.target.value)}
                    placeholder="Enter report of fact"
                />

                <div className='checkbox-container '>
                    <input
                        type="checkbox"
                        id="agree"
                        checked={agree}
                        onChange={(e) => setAgree(e.target.checked)}
                    />
                    <label htmlFor="agree" style={{ marginBottom: -3, marginLeft: 10, marginTop: -9 }}>I am aware and agree that my data will be collected and used to promote educational services.</label>
                </div>
                <button type="submit" style={{ marginLeft: '470px', cursor: 'pointer', width: 130, height: 32, fontSize: 15, fontWeight: 'bold' }}>Submit</button>
                {message && (
                    <div className="message" style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', padding: '10px', background: 'rgba(0, 0, 0, 0.7)', color: '#fff', borderRadius: '5px', zIndex: '9999' }}>
                        {message}
                    </div>
                )}
            </form>
            <div className='card-3'>
                <h1>
                    Are you in <br />doubt?
                </h1>
                <h2 style={{ fontSize: 18, marginRight: 880 }}>We have a team ready to assist you!</h2>
                <form>
                    <div className='button' style={{ marginRight: 880 }}>
                        <button type="submit" >Explore more options</button>
                    </div>
                </form>
            </div>
            <div className='card-4'>
                <h1><FontAwesomeIcon icon={faWhatsapp} style={{ marginRight: '10px', marginLeft: '-8px', marginBottom: '-10px' }} size="2x" />WhatsApp</h1>
                <h2>83 8105-4461</h2>
                <form>
                    <div className='button'>
                        <button type="submit">To talk</button>
                    </div>
                </form>
            </div>
            <div className='card-5'>
                <h1><FontAwesomeIcon icon={faPhoneVolume} style={{ marginRight: '10px', marginLeft: '-10px', marginBottom: '-10px' }} size="2x" />Ligar</h1>
                <h2>83 2101 8877</h2>
                <form>
                    <div className='button'>
                        <button type="submit">Call Now</button>
                    </div>
                </form>
            </div>
            <div className='card-6'>
                <h1><FontAwesomeIcon icon={faEnvelope} style={{ marginRight: '10px', marginLeft: '-10px', marginBottom: '-10px' }} size="2x" />Leave a message</h1>
                <h2>Leave your message and we will contact you</h2>
                <form>
                    <div className='button'>
                        <button type="submit">Message</button>
                    </div>
                </form>
            </div>
            <div className='card-7'>
                <h1><FontAwesomeIcon icon={faFolder} style={{ marginRight: '10px', marginLeft: '-10px', marginBottom: '-10px' }} size="2x" />Academic Repository</h1>
                <h2>Notices, ordinances, resolutions and other documents</h2>
                <form>
                    <div className='button'>
                        <button type="submit">Access Now</button>
                    </div>
                </form>
            </div>

            <div className='card-2' >
                <footer  >
                    <p>Apply Reading and Oral Communication Techniques in English</p>
                </footer>
            </div>
        </div>

    );
}

export default OmbudsmanOptions;
