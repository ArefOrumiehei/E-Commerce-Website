import { useState, useEffect } from 'react';
// import PropTypes from 'prop-types'

//Styles
import '../scss/CountDownTimer.scss'

const CountDownTimer = ({ initialTime }) => {
    const [time, setTime] = useState(initialTime);
    const [timerActive, setTimerActive] = useState(true);
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    const tick = () => {
        if (time > 0) {
            setTime((prevTime) => prevTime - 1);
        }
    };

    useEffect(() => {
        if (timerActive) {
            const timer = setInterval(tick, 1000);

            return () => {
                clearInterval(timer);
            };
        }
    }, [timerActive , tick]);

    useEffect(() => {
        if (time === 0) {
            setTimerActive(false);
        }

        
        const daysCount = Math.floor(time / (60 * 60 * 24));
        const hoursCount = Math.floor((time % (60 * 60 * 24)) / (60 * 60));
        const minutesCount = Math.floor((time % (60 * 60)) / 60);
        const secondsCount = time % 60;

        setDays(daysCount);
        setHours(hoursCount);
        setMinutes(minutesCount);
        setSeconds(secondsCount);
    }, [time]);

    return (
        <div className='countDownTimer'>
            {time === 0 ? (
                <p className='timeOver'>Time is up...</p>
            ) : (
                <div className='timer'>
                    <div className='days'>
                        <span>days</span>
                        <span className="number">{days < 10 ? `0${days}` : days}</span>
                    </div>
                    <span className="twoPoints">:</span>
                    <div className='hours'>
                        <span>hours</span>
                        <span className="number">{hours < 10 ? `0${hours}` : hours}</span>
                    </div>
                    <span className="twoPoints">:</span>
                    <div className='minutes'>
                        <span>minutes</span>
                        <span className="number">{minutes < 10 ? `0${minutes}` : minutes}</span>
                    </div>
                    <span className="twoPoints">:</span>
                    <div className='seconds'>
                        <span>seconds</span>
                        <span className="number">{seconds < 10 ? `0${seconds}` : seconds}</span>
                    </div>
                </div>
            )}
        </div>
    );
};

// CountDownTimer.propTypes = {
//     initialTime: PropTypes.any
// }

export default CountDownTimer;
