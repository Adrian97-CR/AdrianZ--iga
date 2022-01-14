import {useState} from 'react'

const useForm = (initialState = {}) => {
    const [formValues, setValues] = useState(initialState);
    const reset = (newState = initialState) => {
        setValues(newState);
    }
    const handleInputChange = ({target}) => {
        setValues(s=>({...s, [target.name]:target.value}))
    }
    return [formValues, handleInputChange, reset];

}

useForm.propTypes = {

}

export default useForm;
