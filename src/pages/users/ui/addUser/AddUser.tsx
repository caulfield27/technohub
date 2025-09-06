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
} from "@fluentui/react-components";
import {
    Dismiss24Regular
} from "@fluentui/react-icons";
import { useFormik } from "formik";
import React, {
    useEffect,
    useId,
    type Dispatch,
    type SetStateAction,
} from "react";
import { validationSchema } from "./validation";
import { drawer_background, drawer_footer, input_container } from "../../../../shared/const/styles";
import type { Role } from "../../../../shared/types/role";
import { apiUrl, request } from "@/shared/api/api.config";
import useSWR from "swr";

interface IAddUser {
    showDrawer: boolean;
    setShowDrawer: Dispatch<SetStateAction<boolean>>;
}

interface IRoles {
    Code: Role;
    CreatedAt: string;
    DeletedAt: string | null;
    Desc: string;
    ID: number;
    UpdatedAt: string;
}

const rolesFetcher = async () => {
    try {
        const roles = await request.get(apiUrl.roles);
        return roles.data?.res;
    } catch (e) {
        throw e;
    }
}

const AddUserDrawer = ({ showDrawer, setShowDrawer }: IAddUser) => {
    const dropdownId = useId();

    const { data: roles } = useSWR<IRoles[]>("roles", rolesFetcher, { revalidateOnFocus: false });

    const formik = useFormik({
        initialValues: {
            username: "",
            name: "",
            surname: "",
            patron: "",
            inn: "",
            role_id: roles?.[0]?.ID ?? "",
            email: "",
            phone: ""
        },
        validationSchema: validationSchema,
        onSubmit: async (values, { resetForm, setSubmitting }) => {
            try {
                setSubmitting(true);
                values.role_id = roles?.find((role) => role.Code === values.role_id)?.ID ?? 2;
                await request.post(apiUrl.createUser, values);
            } catch (e) {
                console.error(e);
            } finally {
                resetForm();
                setSubmitting(false);
                setShowDrawer(false);
            };

        },
    });


    useEffect(() => {
        if (!showDrawer) {
            formik.resetForm();
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
                                        formik.touched.role_id ? formik.errors.role_id : null
                                    }
                                >
                                    <Dropdown
                                        aria-labelledby={dropdownId}
                                        placeholder="Выберите роль"
                                        size="medium"
                                        style={{ width: "100%" }}
                                        value={String(formik.values.role_id)}
                                        onOptionSelect={(_, option) => {
                                            formik.setFieldValue("role_id", option.optionValue);
                                        }}
                                    >

                                        {roles?.map((item) => {
                                            if (item.Code === "supervisor") return null;
                                            return (
                                                <Option
                                                    text={item.Code}
                                                    key={item.Code}
                                                    value={String(item.Code)}
                                                >
                                                    {item.Code}
                                                </Option>
                                            )
                                        })}
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
                                        id="username"
                                        name="username"
                                        onChange={formik.handleChange}
                                        value={formik.values.username}
                                        width={400}
                                        appearance="outline"
                                        onBlur={formik.handleBlur}
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
                        disabled={!formik.values.username || formik.isSubmitting}
                        appearance="primary" form="add_user" type="submit"
                        style={{
                            background: 'var(--primery-green-color)',
                            color: '#fff',
                            opacity: !formik.values.username || formik.isSubmitting ? "0.5" : "1"
                        }}
                    >
                        {formik.isSubmitting ? "Добавление..." : "Добавить"}
                    </Button>
                </DrawerFooter>
            </Drawer>
        </>
    );
};

export default React.memo(AddUserDrawer);
