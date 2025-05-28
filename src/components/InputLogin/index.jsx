// import styles from './index.module.css';
// import React, {useState} from 'react';

// const InputLogin = (props, Icon) => {
//     const [valor, setValor] = useState('');

//     const handleChange = (event) => {
//         setValor(event.target.value);
//     };

//     return (
//         <div>
//         <label className={styles.label}>

//             <input className={styles.input} type="text" value={valor} onChange={handleChange} placeholder={props.placeholder}/>
//         </label>
//         </div>
//     );
// }

// export default InputLogin;

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
