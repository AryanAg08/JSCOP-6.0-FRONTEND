import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { SlCalender } from "react-icons/sl";
import { FaLocationDot } from "react-icons/fa6";
import { FaClock } from "react-icons/fa";
import './EventDetailPage.css';
import Team from '../Team/Team';
import FAQ from './faqtoggle.jsx'; // Import the FAQ component
import Data from '../../assets/Data/EventsData.js' // Import your events data
import Part from './Part.jsx';
import './faq.css';
const EventDetailPage = () => {
    const { id } = useParams();
    const [faqs, setFaqs] = useState([]);

    useEffect(() => {
        // Find the event by id and set its faqs
        const temp = Data.find(event => parseInt(event.id) === parseInt(id));
        setFaqs(temp.faq);
    }, [id]);

    const toggleFAQ = (index) => {
        setFaqs(faqs.map((faq, i) => {
            if (i === index) {
                faq.open = !faq.open;
            } else {
                faq.open = false;
            }
            return faq;
        }));
    };

    return (
        <>
            <Part op1={0.8} op2={0.8} sh={""} col={"white"} val={40} />
            <div className='event-section'>
                <h1 className='event-sectiontopheading'>{Data[id - 1].title}</h1>
                <div className='container'>
                    <div className='container-part-first'>
                        <div className='container-img'>
                            <img src={Data[id - 1].imgsrc} alt="" />
                        </div>
                        <div className='container-buttons'>

                            <button className='container-button1'> <a className='container-link' href={Data[id - 1].register_link} target="_blank" rel="noopener noreferrer">Register</a></button>

                            <button className='container-button1'> <a className='container-link' href={Data[id - 1].rules} target="_blank" rel="noopener noreferrer">Rules</a></button>
                        </div>
                    </div>
                    <div className='container-part-second'>
                        <div className='container-part-text1'>
                            <div className='container-part-secondicons'>
                                <FaClock /> {Data[id - 1].time}
                            </div>
                            <div className='container-part-secondicons'>
                                <SlCalender />  {Data[id - 1].date}
                            </div>
                            <div className='container-part-secondicons'>
                                <FaLocationDot /> {Data[id - 1].location}
                            </div>

                        </div>
                        <hr />
                        <div className='container-part-text2'>
                            <h1>DESCRIPTION</h1>
                            <p>
                                {Data[id - 1].description}
                            </p>
                            <h1>
                                ORGANISING TEAM
                            </h1>
                            <div>
                                <Team id={id - 1} />
                            </div>
                            <h1>FAQS</h1>
                            <div className="FAQS">
                                <div className="faqs">
                                    {faqs.map((faq, index) => (
                                        <FAQ faq={faq} index={index} key={index} toggleFAQ={toggleFAQ} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default EventDetailPage;