import * as yup from "yup"
export const signUpSchema = yup.object({
    email:yup.string().email().required("please enter email"),
    feedback:yup.string().required("please enter feedback"),
})