import { useState } from "react";

function Counter({ limitValue, maxValue, minValue }) {
    const [counter, setCounter] = useState(0);
    const [isOver, setIsOver] = useState(false);

    const isOverSetter = (actualCounter) => {
        setIsOver(actualCounter > limitValue);
    };

    const Increment = () => {
        if (counter < maxValue) {
            const newValue = counter + 1;
            setCounter(newValue);
            isOverSetter(newValue);
        }
    };

    const Decrement = () => {
        if (counter > minValue) {
            const newValue = counter - 1;
            setCounter(newValue);
            isOverSetter(newValue);
        }
    };

    const Reset = () => {
        setCounter(0);
        isOverSetter(0);
    };

    return (
        <>
            <p>{counter}</p>
            <div className="counter-buttons">
                <button
                    onClick={Decrement}
                    className={`btn ${counter > minValue ? "btn-active-min" : "btn-disabled"}`}
                    disabled={counter <= minValue}
                >
                    -
                </button>
                <button
                    onClick={Increment}
                    className={`btn ${counter < maxValue ? "btn-active-max" : "btn-disabled"}`}
                    disabled={counter >= maxValue}
                >
                    +
                </button>
                <button
                    onClick={Reset}
                    className="btn btn-reset"
                >
                    Reset
                </button>
            </div>

            {counter !== limitValue && (
                <>
                    {isOver ? (
                        <p>Mon compteur est supérieur à {limitValue}, il est à {counter}</p>
                    ) : (
                        <p>Mon compteur est inférieur à {limitValue}, il est à {counter}</p>
                    )}
                </>
            )}

            {counter >= maxValue && (
                <p className=" alert-max">Vous avez atteint la valeur maximale autorisée, Appuie sur le -</p>
            )}

            {counter <= minValue && (
                <p className=" alert-min">Vous avez atteint la valeur minimale autorisée, Appuie sur le +.</p>
            )}
        </>
    );
}

export default Counter;
