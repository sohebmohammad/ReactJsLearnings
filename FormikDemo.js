import React from "react";
import { useFormik } from "formik";

export default function FormikDemo() {
    const formik = useFormik({
        initialValues: {
            name: "",
            password: "",
            city: "", // Add a city field for the select input
            subscribed: false, // Add a subscribed field for the checkbox
        },
        onSubmit: (values) => {
            alert(JSON.stringify(values)); // Use alert or console.log, not alert.log
        },
    });

    return (
        <>
            <form className="container-sm" onSubmit={formik.handleSubmit}>
                <dl>
                    <dt className="m-20px">Register Form</dt>
                    <dt>Name</dt>
                    <dd>
                        <input
                            name="name"
                            onChange={formik.handleChange}
                            value={formik.values.name}
                            type="text"
                        />
                    </dd>
                    <dt>Password</dt>
                    <dd>
                        <input
                            name="password"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            type="text"
                        />
                    </dd>
                    <dt>
                        <select
                            name="city" // Add a name attribute for the select input
                            onChange={formik.handleChange}
                            value={formik.values.city}
                        >
                            <option>Delhi</option>
                            <option>Hyd</option>
                        </select>
                    </dt>
                    <dt>
                        Subscribed
                        <div className="form-check form-switch">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                id="flexSwitchCheckDefault"
                                name="subscribed" // Add a name attribute for the checkbox input
                                checked={formik.values.subscribed}
                                onChange={formik.handleChange}
                            />
                            <label
                                className="form-check-label"
                                htmlFor="flexSwitchCheckDefault"
                            ></label>
                        </div>
                    </dt>
                    <dd>
                        <button type="submit" className="btn btn-danger">
                            Register
                        </button>
                    </dd>
                </dl>
            </form>
        </>
    );
}
