import { Formik, Form, useField } from 'formik';
import {getInitialValues, validationSchema} from '../../utils'
import { v4 as uuidv4 } from 'uuid';

const MyTextInput = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
      <>
        <label htmlFor={props.name}>{label}</label>
        <input {...field} {...props} />
        {meta.touched && meta.error ? (
          <div className="error">{meta.error}</div>
        ) : null}
      </>
    );
};



const CustomForm = ({setUsers}) => {
    const initialValues = getInitialValues();


    const handleSubmit = (values, {resetForm}) => {
        const newUser = {
            id: uuidv4(),
            ...values
        }
        setUsers(prevState => [...prevState, newUser]);
        let users = JSON.parse(localStorage.getItem('users'));
        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));
        resetForm();
    }




    return (
        <Formik
        initialValues = {initialValues}
        validationSchema = {validationSchema}
        onSubmit = {handleSubmit}
        >
            <Form className="form">
                <h2>Форма регистрации</h2>
                <MyTextInput
                    label="ФИО"
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="off"
                />
                <MyTextInput
                    label="Ваша почта"
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="off"
                />
                <MyTextInput
                    label="Ваша адрес"
                    id="address"
                    name="address"
                    type="address"
                    autoComplete="off"
                />
                <MyTextInput
                    label= "Ваш возраст"
                    id="age"
                    name="age"
                    type="number"
                    autoComplete="off"
                />
                <button type="submit">Отправить</button>
            </Form>
        </Formik>
    )
}

export default CustomForm;
