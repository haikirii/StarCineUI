import styles from './index.module.css';

const InputLogin = ({ placeholder, Icon, type = "text", value, onChange }) => {
    return (
        <div className={styles.inputWrapper}>
            <label className={styles.label}>
                <input
                    className={styles.input}
                    type={type}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                />
            </label>
            {Icon && <span className={styles.icon}><Icon /></span>}
        </div>
    );
}

export default InputLogin;
