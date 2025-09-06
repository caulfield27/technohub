import { mergeStyles } from "@fluentui/react";
import {
    Button,
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerHeaderTitle,
    Dropdown,
    Field,
    Input,
    Label,
    Option,
    Toast,
    ToastTitle,
    Toaster,
    useToastController,
} from "@fluentui/react-components";
import {
    Dismiss24Regular,
    Eye20Filled,
    Eye20Regular,
} from "@fluentui/react-icons";
import { useFormik } from "formik";
import React, {
    useEffect,
    useId,
    useState,
    type Dispatch,
    type SetStateAction,
} from "react";
import { validationSchema } from "./validation";
import { useAddUsertyles } from "./styles";
import { drawer_background, drawer_footer, input_container } from "../../../../shared/const/styles";
import { roles } from "../../../../shared/data/roles";
import type { IRole } from "../../../../shared/types/role";

interface IAddUser {
    showDrawer: boolean;
    setShowDrawer: Dispatch<SetStateAction<boolean>>;
}

const AddUserDrawer = ({ showDrawer, setShowDrawer }: IAddUser) => {
    const dropdownId = useId();
    const styles = useAddUsertyles();
    const [roleName, setRoleName] = useState<string>("");
    const [showPassword, setShowPassword] = useState(false);


    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
            phone: "",
            role: "",
            Username: "",
        },
        validationSchema: validationSchema,
        onSubmit: (values, { resetForm, setSubmitting }) => {
            // addUser({
            //     email: formik.values.email,
            //     fname: formik.values.fname,
            //     login: formik.values.login,
            //     password: formik.values.password,
            //     phone: formik.values.phone.trim().replace(/\s+/g, "").replace("+", ""),
            //     role: formik.values.role,
            //     userDesc: formik.values.userDesc,
            //     disabled: false,
            // });
        },

        onReset(values, formikHelpers) {
            formikHelpers.resetForm;
            setShowDrawer(false);
        },
    });


    useEffect(() => {
        if (!showDrawer) {
            formik.resetForm();
            setRoleName("");
        }
    }, [showDrawer]);

    return (
        <>
            <Drawer
                type="overlay"
                separator
                open={showDrawer}
                onOpenChange={(_, { open }) => setShowDrawer(open)}
                position="end"
            >
                <DrawerHeader className={mergeStyles(drawer_background)}>
                    <DrawerHeaderTitle
                        action={
                            <Button
                                appearance="subtle"
                                aria-label="Close"
                                icon={<Dismiss24Regular />}
                                onClick={() => setShowDrawer(false)}
                            />
                        }
                    >
                        Добавить пользователя
                    </DrawerHeaderTitle>
                </DrawerHeader>
                <DrawerBody className={mergeStyles(drawer_background)}>
                    <div>
                        <form id="add_user" onSubmit={formik.handleSubmit}>
                            <div className={mergeStyles(input_container)}>
                                <Label>Выберите роль</Label>
                                <Field
                                    validationMessage={
                                        formik.touched.role ? formik.errors.role : null
                                    }
                                >
                                    <Dropdown
                                        aria-labelledby={dropdownId}
                                        placeholder="Выберите роль"
                                        size="medium"
                                        style={{ width: "100%" }}
                                        value={roleName}
                                        onOptionSelect={(event, option) => {
                                            formik.setFieldValue("role", option.optionValue);
                                            setRoleName(option.optionText);
                                        }}
                                    >
                                        {roles?.map((item: IRole) => (
                                            <Option
                                                text={item.name}
                                                key={item.name}
                                                value={String(item.name)}
                                            >
                                                {item.name}
                                            </Option>
                                        ))}
                                    </Dropdown>
                                </Field>
                            </div>
                            <div className={mergeStyles(input_container)}>
                                <Label>E-mail</Label>
                                <Field
                                    validationMessage={
                                        formik.touched.email ? formik.errors.email : null
                                    }
                                >
                                    <Input
                                        type="text"
                                        placeholder="E-mail"
                                        id="email"
                                        name="email"
                                        onChange={formik.handleChange}
                                        value={formik.values.email}
                                        width={400}
                                        appearance="outline"
                                        onBlur={formik.handleBlur}
                                    />
                                </Field>
                            </div>
                            <div className={mergeStyles(input_container)}>
                                <Label>Username</Label>
                                <Field>
                                    <Input
                                        type="text"
                                        placeholder="username"
                                        id="Username"
                                        name="Username"
                                        onChange={formik.handleChange}
                                        value={formik.values.Username}
                                        width={400}
                                        appearance="outline"
                                        onBlur={formik.handleBlur}
                                    />
                                </Field>
                            </div>

                            <div className={mergeStyles(input_container)}>
                                <Label>Пароль</Label>
                                <Field
                                    validationMessage={
                                        formik.touched.password ? formik.errors.password : null
                                    }
                                >
                                    <Input
                                        type={showPassword ? "text" : "password"}
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
                                                    setShowPassword((prevState) => !prevState)
                                                }
                                            >
                                                {showPassword ? <Eye20Filled /> : <Eye20Regular />}
                                            </div>
                                        }
                                    />
                                </Field>
                            </div>
                            <div className={mergeStyles(input_container)}>
                                <Label>Номер телефона</Label>
                                <Field
                                    validationMessage={
                                        formik.touched.phone ? formik.errors.phone : null
                                    }
                                >

                                    <Input
                                        type="tel"
                                        inputMode="numeric"
                                        placeholder="Номер телефона"
                                        id="phone"
                                        name="phone"
                                        appearance="outline"
                                    />
                                </Field>
                            </div>
                        </form>
                    </div>
                </DrawerBody>
                <DrawerFooter className={mergeStyles(drawer_footer)}>

                    <Button
                        form="add_user"
                        type="reset"
                        appearance="secondary"
                        onClick={formik.handleReset}
                    >
                        Отменить
                    </Button>

                    <Button
                        appearance="primary" form="add_user" type="submit"
                        style={{
                            background: 'var(--primery-green-color)',
                            color: '#fff'
                        }}
                    >
                        Добавить
                    </Button>
                </DrawerFooter>
            </Drawer>
        </>
    );
};

export default React.memo(AddUserDrawer);
