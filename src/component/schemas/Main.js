import * as yup from "yup"


export const signUpSchema = yup.object({
    title : yup.string().min(3).required("please enter title"),
    address:yup.string().min(5).required("please enter address"),
    information:yup.string().min(5).required("please enter information"),
    image:yup.mixed().required("please enter image"),
    

})