import { useFormik } from 'formik'
import React, { useEffect } from 'react'
import { NumericFormat } from 'react-number-format'
import { json } from 'react-router-dom'
import * as Yup from 'yup'

const SignUp = () => {

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
           
            password: "",
            cpassword: "",
            birthdate:""
           
        },
        validationSchema: Yup.object({
            name: Yup.string().min(3, "Too Short!").max(15, "Too Long!").required("Name is Required*"),

            email: Yup.string().email().required("Email is required*"),

           
            password: Yup.string().required('Password is required').min(8, 'Your password is too short.').matches(/^(?=.*[0-9])(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/, 'Password can only contain one special and one special character.'),

            cpassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match'),

            birthdate: Yup.date()
                .max(new Date(Date.now() - 567648000000), "“You are not eligible to access the site”.")
                .required("Required"),
           
        }),

        onSubmit: (value,{resetForm}) => {
            console.log(88, value)
            alert(JSON.stringify({ Name: value.name, Email: value.email, Password: value.password, BirthDate: value.birthdate }))
           
            
            resetForm({value:""})
        }
    })

    useEffect(() => {
       
    },[])

    return (
        <div className='mainForm'>

        <div className='child ' >
        <form onSubmit={formik.handleSubmit} className="mt-4">
            <div>
                <label  htmlFor="">Name :</label>
                        <input className='form-control ' type="text" name="name" id=""
                    onChange={formik.handleChange}
                    value={formik.values.name}
                    onBlur={formik.handleBlur}
                />
                {formik.touched.name && formik.errors.name && <p style={{ color: "red" }}>{formik.errors.name}</p>}
            </div>
            <div>
                <label htmlFor="">Email :</label>
                <input className='form-control' type="text" name="email" id=""
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    onBlur={formik.handleBlur}

                />
                {formik.touched.email && formik.errors.email && <p style={{ color: "red" }}>{formik.errors.email}</p>}

            </div>
           
           
            <div>
                <label htmlFor="">Password :</label>
                <input className='form-control' type="text" name="password" id=""
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    onBlur={formik.handleBlur}

                />
                {formik.touched.password && formik.errors.password && <p style={{ color: "red" }}>{formik.errors.password}</p>}

            </div>
            <div>
                <label htmlFor="">Comfirm Password :</label>
                <input className='form-control' type="text" name="cpassword" id=""
                    onChange={formik.handleChange}
                    value={formik.values.cpassword}
                    onBlur={formik.handleBlur}
                />
                {formik.touched.cpassword && formik.errors.cpassword && <p style={{ color: "red" }}>{formik.errors.cpassword}</p>}

            </div>
            <div>
                        <label htmlFor="">Date of Birth:</label>
                        <input className='form-control' type="date" name="birthdate" id=""
                    onChange={formik.handleChange}
                            value={formik.values.birthdate}
                    onBlur={formik.handleBlur}
                />
                        {formik.touched.birthdate && formik.errors.birthdate && <p style={{ color: "red" }}>{formik.errors.birthdate}</p>}

            </div>

           

           

            


            <div className='mt-2'>
                <button className='btn w-100 border btn-primary' type='submit'>Submit</button>
                </div>
            </form>
            </div> 
        </div>
    )
}

export default SignUp