import * as yup from "yup";

export const validationSchema = yup.object({
    username: yup.string().required("Поле обязательное"),
    password: yup
        .string()
        .min(1, "Пароль должен иметь длину не менее 4 символов")
        .required("Поле обязательное"),
});
