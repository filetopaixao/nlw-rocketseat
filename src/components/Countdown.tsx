import { useState, useEffect, useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Countdown.module.css'

let countdownTimeout: NodeJS.Timeout;

const Countdown = () => {
    const { startNewChallenge } = useContext(ChallengesContext)

    const [time, setTime] = useState(0.1 * 60);
    const [isActive, setIsActive] = useState(false);
    const [hasFinished, setHasFinished] = useState(false);

    const minutes = Math.floor(time/60);
    const seconds = Math.floor(time%60);

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('')
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('')

    const startCountdown = () => {
        setIsActive(true);
    }

    const resetCountdown = () => {
        clearTimeout(countdownTimeout)
        setIsActive(false);
        setTime(0.1 * 60);
    }

    useEffect(()=>{
        if(isActive && time > 0) {
            countdownTimeout = setTimeout(()=>{
                setTime(time - 1);
            }, 1000)
        }else if (isActive && time === 0){
            setHasFinished(true);
            setIsActive(false);
            startNewChallenge();
        }
    },[isActive, time])

    return(
        <div>
            <div className={styles.countdownContainer}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondLeft}</span>
                    <span>{secondRight}</span>
                </div>
            </div>

            {hasFinished ? (
                <button disabled className={styles.startCountdownButton}>
                    Ciclo encerrado
                </button>
            ) : (
                <>
                    { isActive ? (
                        <button type="button" className={`${styles.startCountdownButton} ${styles.startCountdownActive}`} onClick={()=> resetCountdown()}>
                            Abandonar ciclo
                        </button>
                        ) : (
                        <button type="button" className={styles.startCountdownButton} onClick={()=> startCountdown()}>
                            Iniciar um ciclo
                        </button>
                    )}
                </>
            )}

            
        </div>
    )
}

export default Countdown;