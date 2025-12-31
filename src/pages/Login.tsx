import { ErrorMessage, Field, Form, Formik } from "formik";
import { useAppDispatch, useAppSelector } from "../hooks/storeHooks";
import { loginUser } from "../store/slices/authReducer";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Background from "../assets/Background.png";
import Logo from "../assets/Logo.png";
import iconEmail from "../assets/iconEmail.png";
import iconPassword from "../assets/iconPassword.png";

interface LoginValues {
  username: string;
  password: string;
}

function Login() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { loading, error } = useAppSelector((state) => state.auth);

  const initialValues: LoginValues = {
    username: "",
    password: "",
  };

  const validate = (values: LoginValues) => {
    const errors: Partial<LoginValues> = {};

    if (!values.username) {
      errors.username = "Campo requerido";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.username)
    ) {
      errors.username = "Dirección de email inválida";
    }

    if (!values.password) {
      errors.password = "Campo requerido";
    } else if (values.password.length < 6) {
      errors.password = "La contraseña debe tener al menos 6 caracteres";
    }
    return errors;
  };

  const handleSubmit = async (values: LoginValues) => {
    const payload = {
      username: values.username,
      password: values.password,
    };
    console.log("Submitting", values);
    const result = await dispatch(loginUser(payload));
    console.log("result", result);

    if (loginUser.fulfilled.match(result)) {
      console.log("Login exitoso");
      navigate("/dashboard");
    }
  };
  return (
      <div className="min-h-screen bg-repeat flex items-center justify-center" style={{ backgroundImage: `url(${Background})` }}>
        <div className="flex flex-col items-center justify-between bg-white bg-opacity-75 rounded-[20px] shadow-[0px_4px_8px_3px_rgba(0,0,0,0.15)] w-142.25 mx-auto h-148.5 p-8">
        <img src={Logo} alt="Logo Be Kind" />
        <h1 className="text-3xl text-center ">
          ¡Empieza a conectar tu comunidad ante buenas acciones!
        </h1>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <Formik
          initialValues={initialValues}
          validate={validate}
          onSubmit={handleSubmit}
          >
          {({ isSubmitting }) => (
            <Form className="flex flex-col gap-4 w-3/4">
              <div className="flex flex-col">
                <label htmlFor="email" className="text-[14px] font-medium" >Correo Electrónico*</label>
                <div className="relative">
                <img src={iconEmail} alt="Icono de correo electrónico" className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"/>
                <Field
                  type="email"
                  name="username"
                  id="username"
                  placeholder="Ingresar correo"
                  className="
                      w-full h-10
                      border border-[#8F8D93] rounded
                      pl-10 pr-3
                      focus:outline-none focus:ring-2 focus:ring-gray-500
                    "
                  />
                </div>
                <ErrorMessage name="username" component="div" className="text-[12px] font-light" />
              </div>

              <div className="flex flex-col">
                <label htmlFor="password" className="text-[14px] font-medium">Contraseña*</label>
                <div className="relative">
                <img src={iconPassword} alt="Icono de contraseña" className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"/>
                <Field
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Ingresa tu contraseña"
                  className="
                      w-full h-10
                      border border-[#8F8D93] rounded
                      pl-10 pr-3
                      focus:outline-none focus:ring-2 focus:ring-gray-500
                    "
                  />
                </div>
                <ErrorMessage name="password" component="div" className="text-[12px] font-light"/>
              </div>

              <div className="text-center text-[#1E1B4D]">
                <Link to="/recover-password" className="border-solid border-b-2">Recuperar contraseña</Link>
              </div>
              <div className="flex justify-center mt-6">
                <button type="submit" disabled={isSubmitting || loading} className="bg-[#D2D1D4] text-[#A6A4A8] px-4 py-2 rounded w-64 h-10 hover:bg-[#1E1B4D] cursor-pointer hover:text-white disabled:opacity-50 ">
                  {loading ? "Iniciando sesión..." : "Ingresar"}
                </button>
              </div>
            </Form>
          )}
        </Formik>
          </div>
      </div>
  );
}

export default Login;
