import React from "react";
import { useFormik } from "formik";
export default function FormikValidations() {

    function ValidateUser(userDetails) {
        const errors = {};
        if (userDetails.UserName == "") {
            errors.UserName = "User Name Required";
        }
        if (userDetails.Mobile.match(/\+91\d{10}/)) {
            errors.Mobile = "";
        } else {
            errors.Mobile = "Invalid Mobile";
        }
        return errors;
    }

    const formik = useFormik({
        initialValues: {
            UserName: '',
            Mobile: ''
        },
        validate: ValidateUser,
        onSubmit: values => {
            alert(JSON.stringify(values));
        }
    })
    return (
        <div className="container-fluid">
            <h2>Register User</h2>
            <form onSubmit={formik.handleSubmit}>
                <dl>
                    <dt>User Name</dt>
                    <dd><input name="UserName" onBlur={formik.handleBlur} onChange={formik.handleChange} type="text" /></dd>
                    <dd className="text-danger">{formik.errors.UserName}</dd>
                    <dt>Mobile</dt>
                    <dd><input name="Mobile" onChange={formik.handleChange} type="text" /></dd>
                    <dd className="text-danger">{formik.errors.Mobile}</dd>
                </dl>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}