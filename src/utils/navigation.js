const getNavigation = (userid) =>{

    const links = [
        {
            title: "Publication",
            link:"/"
        },
        {
            title: "Shere your thouthg",
            link:"/share"
        },
        {
            title: "Profile",
            link:`/profile/${userid}`
        },
        {
            title: "Register",
            link:"/register"
        },
        {
            title: "Login",
            link:"/login"
        }
    ]
    return links
}
export default getNavigation