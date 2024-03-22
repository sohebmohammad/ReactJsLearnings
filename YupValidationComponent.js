import { useFormik, Field, ErrorMessage, Form } from "formik";
import * as yup from 'yup';

export default function YupValidationComponent() {
    const formik = useFormik({
        initialValues: {
            UserName: '',
            Email: '',
            Age: '',
            City: ''
        },
        validationSchema: yup.object({
            UserName: yup.string().min(4, 'Name too short').max(10, 'Name too long').required('Name Required'),
            Email: yup.string().email('Invalid Email').required('Email Required'),
            Age: yup.number().required('Age Required'),
            City: yup.string()
        }),
        onSubmit: (values) => {
            // Handle form submission here (e.g., send data to server)
            console.log("Form submitted:", values);
            
            // Optionally reset the form after submission
    
        }
    });

    return (
        <div className="container-fluid">
            <h2>Register User</h2>
            <Form>
                <div>
                    <dl>
                        <dt>User Name</dt>
                        <dd><Field name="UserName" type="text" /></dd>
                        <dd className="text-danger"><ErrorMessage name="UserName" /></dd>
                        <dt>Email</dt>
                        <dd><Field name="Email" type="text" /></dd>
                        <dd className="text-danger">
                            <ErrorMessage name="Email" />
                        </dd>
                        <dt>Age</dt>
                        <dd><Field name="Age" type="text" /></dd>
                        <dd className="text-danger">
                            <ErrorMessage name="Age" />
                        </dd>
                        <dt>City</dt>
                        <dd><Field name="City" as="select">
                            <option>Delhi</option>
                            <option>Hyd</option>
                        </Field></dd>
                    </dl>
                    <button type="submit">Register</button>
                </div>
            </Form>
        </div>
    );
}
