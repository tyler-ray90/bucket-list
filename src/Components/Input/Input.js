function Input({
    list,
    title,
    type,
    value,
    placeholder,
    handleChange }) {
        return (
            <>
            <label htmlFor={list}>{title}</label>
            <input
             id={list}
             list={list}
             type={type}
             value={value}
             onChange={handleChange}
             placeholder={placeholder}
             />
            </>
        );
}

export default Input;