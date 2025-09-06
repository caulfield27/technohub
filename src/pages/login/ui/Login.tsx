import {
    Button,
    Field,
    Input,
    Spinner,
    Title3,
    Toaster,
} from "@fluentui/react-components";
import { Eye20Filled, Eye20Regular } from "@fluentui/react-icons";
import { useFormik } from "formik";
import { useEffect, useId, useState } from "react";
import { useNavigate } from "react-router";
import { useLoginStyles } from "./styles";
import { validationSchema } from "./validation";

const Login = () => {
    const styles = useLoginStyles();
    const [toggleShowPassword, setToggleShowPassword] = useState(false);

    const navigate = useNavigate();


    const formik = useFormik({
        initialValues: {
            username: "",
            password: "",
        },
        validationSchema: validationSchema,
        onSubmit: async (values, { resetForm, setSubmitting }) => {
            // try {
            //     const response = await loginAuth({
            //         username: values.username,
            //         password: values.password,
            //     }).unwrap();

            //     if (response?.access_token) {
            //         navigate("/statistic");

            //         // if (response.permissions) {
            //         //   const sortedPers = response.permissions.toSorted();
            //         //   for (let i = 0; i < sortedPers.length; i++) {
            //         //     for (let j = 0; j < routes.length; j++) {
            //         //       if (sortedPers[i] === routes[j].id) {
            //         //         navigate(routes[j].path);
            //         //         return;
            //         //       }
            //         //     }
            //         //   }
            //         // }
            //     } else {
            //         navigate("/");
            //     }
            // } catch (err) {
            //     // notify(err.data.message);
            // }

            // setSubmitting(false);
            // resetForm();
        },
    });
    ;

    return (
        <div className={styles.page_container}>
            <div className={styles.login_content}>
                <div className={styles.login_blok}>
                    <div className={styles.logoin_block_logo}>
                        <Title3 className={styles.title}>Вход в Humopay</Title3>
                        <p className={styles.subtitle}>
                            Для входа вам необходимо ввести ваши логин и пароль{" "}
                        </p>
                    </div>
                    <form onSubmit={formik.handleSubmit}>
                        <div className={styles.login_forms}>
                            <div className={styles.login_forms_action}>
                                <Field
                                    validationMessage={
                                        formik.touched.username ? formik.errors.username : null
                                    }
                                >
                                    <Input
                                        className={styles.input_field}
                                        type="text"
                                        placeholder="Логин"
                                        id="username"
                                        name="username"
                                        onChange={formik.handleChange}
                                        value={formik.values.username}
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
                                {/* <Link className={styles.forgot_pass}>Забыли пароль?</Link> */}
                            </div>

                            <Button
                                type="submit"
                                appearance="primary"
                                disabled={
                                    formik.isSubmitting || !formik.isValid || formik.isSubmitting
                                }
                                style={{ width: "100%" }}
                            >
                                {/* {isLoading ? <Spinner size="tiny" /> : "Далее"} */}
                                Далее
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
