import {
    Button,
    Field,
    Input,
    Title3,
} from "@fluentui/react-components";
import { Eye20Filled, Eye20Regular } from "@fluentui/react-icons";
import { useFormik } from "formik";
import { useState } from "react";
import { useNavigate } from "react-router";
import { useLoginStyles } from "./styles";
import { validationSchema } from "./validation";
import { apiUrl, request } from "../../../shared/api/api.config";

const Login = () => {
    const styles = useLoginStyles();
    const [toggleShowPassword, setToggleShowPassword] = useState(false);
    const navigate = useNavigate();


    const formik = useFormik({
        initialValues: {
            login: "",
            password: "",
        },
        validationSchema: validationSchema,
        onSubmit: async (values, { resetForm, setSubmitting }) => {
            setSubmitting(true);
            try {
                const response = await request.post(apiUrl.login, values);
                const { access_token } = response.data?.res;
                const { refresh_token } = response.data?.res;

                if (access_token && refresh_token) {
                    localStorage.setItem("access_token", access_token);
                    localStorage.setItem("refresh_token", refresh_token);
                    navigate("/");
                }
            } catch (err) {
                console.log(err);
            } finally {
                resetForm();
                setSubmitting(false);
            };
        }
    });

    return (
        <div className={styles.page_container}>
            <div className={styles.login_content}>
                <div className={styles.login_blok}>
                    <div className={styles.logoin_block_logo}>
                        <Title3 className={styles.title}>Вход в Storage Admin</Title3>
                        <p className={styles.subtitle}>
                            Для входа вам необходимо ввести ваши логин и пароль{" "}
                        </p>
                    </div>
                    <form onSubmit={formik.handleSubmit}>
                        <div className={styles.login_forms}>
                            <div className={styles.login_forms_action}>
                                <Field
                                    validationMessage={
                                        formik.touched.login ? formik.errors.login : null
                                    }
                                >
                                    <Input
                                        className={styles.input_field}
                                        type="text"
                                        placeholder="Логин"
                                        id="login"
                                        name="login"
                                        onChange={formik.handleChange}
                                        value={formik.values.login}
                                        width={400}
                                        appearance="outline"
                                        onBlur={formik.handleBlur}
                                        autoFocus={true}
                                    />
                                </Field>

                                <Field
                                    validationMessage={
                                        formik.touched.password ? formik.errors.password : null
                                    }
                                >
                                    <Input
                                        className={styles.input_field}
                                        type={toggleShowPassword ? "text" : "password"}
                                        placeholder="Пароль"
                                        id="password"
                                        name="password"
                                        onChange={formik.handleChange}
                                        value={formik.values.password}
                                        width={400}
                                        appearance="outline"
                                        onBlur={formik.handleBlur}
                                        contentAfter={
                                            <div
                                                className={styles.eye_icon}
                                                onClick={() =>
                                                    setToggleShowPassword((prevState) => !prevState)
                                                }
                                            >
                                                {toggleShowPassword ? (
                                                    <Eye20Filled />
                                                ) : (
                                                    <Eye20Regular />
                                                )}
                                            </div>
                                        }
                                    />
                                </Field>
                            </div>

                            <Button
                                type="submit"
                                appearance="primary"
                                disabled={
                                    formik.isSubmitting || !formik.isValid || formik.isSubmitting
                                }
                                className={styles.confirmBtn}
                            >
                                Войти
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
            <div className={styles.version}>v:1.0.34</div>
        </div>
    );
};

export default Login;
