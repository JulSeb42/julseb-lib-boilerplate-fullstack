/*=============================================== Routes ===============================================*/

// import { Navigate } from "react-router-dom"
import { PATHS } from "routes"
import { Homepage } from "pages/Homepage"
import { NotFound } from "pages/NotFound"
import { AllUsers, PublicProfile } from "pages/user"
import {
    Signup,
    ThankYou,
    Verify,
    Login,
    ForgotPassword,
    ForgotSent,
    ResetPassword,
    Goodbye,
} from "pages/auth"
import { MyAccount, EditAccount, EditPassword } from "pages/account"
import { Admin } from "pages/admin/Admin"
import { Users } from "pages/admin/Users/AdminUsers"
/* Prepend import - DO NOT REMOVE */

type Route = {
    path: string
    element: JSX.Element
    type: "none" | "protected" | "anon" | "admin"
}

const redirects: Array<Route> = [
    // {
    //     path: "",
    //     element: <Navigate to="" />,
    // },
]

export const routes: Array<Route> = [
    { path: PATHS.ROOT, element: <Homepage />, type: "none" },
    { path: "*", element: <NotFound />, type: "none" },

    { path: PATHS.USERS, element: <AllUsers />, type: "none" },
    { path: PATHS.USER(), element: <PublicProfile />, type: "none" },

    { path: PATHS.SIGNUP, element: <Signup />, type: "anon" },
    { path: PATHS.THANK_YOU, element: <ThankYou />, type: "none" },
    { path: PATHS.VERIFY, element: <Verify />, type: "none" },
    { path: PATHS.LOGIN, element: <Login />, type: "anon" },
    { path: PATHS.FORGOT_PASSWORD, element: <ForgotPassword />, type: "anon" },
    { path: PATHS.FORGOT_PASSWORD_SENT, element: <ForgotSent />, type: "anon" },
    { path: PATHS.RESET_PASSWORD, element: <ResetPassword />, type: "anon" },
    { path: PATHS.GOODBYE, element: <Goodbye />, type: "anon" },

    { path: PATHS.MY_ACCOUNT, element: <MyAccount />, type: "protected" },
    { path: PATHS.EDIT_ACCOUNT, element: <EditAccount />, type: "protected" },
    { path: PATHS.EDIT_PASSWORD, element: <EditPassword />, type: "protected" },

    { path: PATHS.ADMIN_HOME, element: <Admin />, type: "protected" },
    { path: PATHS.ADMIN_USERS, element: <Users />, type: "protected" },
    /* Prepend route - DO NOT REMOVE */

    ...redirects,
]
