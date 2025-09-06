import * as yup from "yup";

export const validationSchema = yup.object({
    email: yup.string().required("Поле обязательное"),
    password: yup.string().required("Поле обязательное"),
});
