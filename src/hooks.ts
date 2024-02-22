import { useEffect, useState } from "react"

/*
- **BONUS:** If you were to attempt to minimize rerenders as a user types in the 
    input fields how would you go about it? NO answer is off the table, except using a third party library.

    for this fix I would consider using a custom react hook to debounce the requests made when a user is done typing
    effectively creating a timeout on our call that gets delayed after every keystroke within half a second. Wouldn't
    do it for much longer as users typically prefer a seemless sense of immediateness but a 
    significant enough delay to take some of the weight off of the calls that become expensive.

*/
export const useDebounce = <T>(value: T, delay: 500) => {
    const [debouncedVal, setDebouncedVal] = useState<T>(value);
    useEffect(() => {
        const timeout = setTimeout(() => {
            setDebouncedVal(value);
        }, delay)

        return () => clearTimeout(timeout);
    }, [value]);

    return debouncedVal;
}