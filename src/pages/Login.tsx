import { ErrorMessage, Field, Form, Formik } from "formik";
import { useAppDispatch, useAppSelector } from "../hooks/storeHooks"
import { loginUser } from "../store/slices/authReducer"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom";

interface LoginValues {
    username: string;
    password: string;
}

function Login() {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const {loading, error} = useAppSelector(state => state.auth)

  const initialValues: LoginValues = {
    username: '',
    password: '',
  }

  const validate = (values: LoginValues) => {
    const errors: Partial<LoginValues> = {};

    if (!values.username) {
        errors.username = 'Campo requerido';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.username)) {
        errors.username = 'Dirección de email inválida';
    }

    if (!values.password) {
        errors.password = 'Campo requerido';
    }else if (values.password.length < 6) {
      errors.password = 'La contraseña debe tener al menos 6 caracteres';
    }
    return errors;
  }

  const handleSubmit = async(values: LoginValues) => {
    const payload = {
    username: values.username,
    password: values.password,
  };
    console.log("Submitting", values);
    const result = await dispatch(loginUser(payload));
    console.log("result", result);

    if(loginUser.fulfilled.match(result)){
      console.log('Login exitoso');
      navigate('/dashboard');
    }

  }
  return (
    <>
      <h1>¡Empieza a conectar tu comunidad ante buenas acciones!</h1>
      {error && <p style={{color: 'red'}}>{error}</p>}
      <Formik 
        initialValues={initialValues}
        validate={validate}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting}) => (
          <Form>
            <div>
              <label htmlFor="email">Correo Electrónico*</label>
              <Field
                type="email"
                name="username"
                id="username"
                placeholder="Ingresar correo"
              />
              <ErrorMessage
                name="username"
                component="div"
              />
            </div>

            <div>
              <label htmlFor="password">Contraseña*</label>
              <Field
                type="password"
                name="password"
                id="password"
                placeholder="Ingresa tu contraseña"
              />
              <ErrorMessage
                name="password"
                component="div"
              />
            </div>

            <div>
              <Link to="/recover-password">Recuperar contraseña</Link>
            </div>
            <div>
              <button type="submit" disabled={isSubmitting || loading}>
                {loading ? 'Iniciando sesión...' : 'Iniciar sesión'}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  )
}

export default Login