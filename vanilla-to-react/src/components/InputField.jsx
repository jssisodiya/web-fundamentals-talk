import styles from "@/styles/Home.module.css";

const InputField = ({
  value,
  hasError,
  label,
  name,
  placeholder,
  type,
  onChange,
}) => (
  <div>
    {label && <label htmlFor="input-field">{label}</label>}
    <input
      type={type}
      value={value}
      name={name}
      className={styles.input}
      placeholder={placeholder}
      onChange={onChange}
    />
    {hasError ? <span className={styles.error}>This is required</span> : null}
  </div>
);

export default InputField;
