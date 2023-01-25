
import { useEffect, useState } from "react"

const useAdmin = email => {
    const [isAdmin, setIsAdmin] = useState(false);
    const [isAdminLoading, setIsAdminLoading] = useState(true);
    useEffect(() => {
        console.log(email);
        const url = `http://localhost:5000/users/admin/${email}`
        console.log(url)
        if (email) {
            fetch(`http://localhost:5000/users/admin/${email}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setIsAdmin(data.isAdmin);
                    setIsAdminLoading(false);
                })
        
                // {isAdmin: false}
                // isAdmin
                // : 
                // false
    //         Axios.get(url)
    // .then(res => res.json())
    // .then(data => {
    //     console.log(data);
    //     setIsAdmin(data.isAdmin);
    //     setIsAdminLoading(false);
    // })
        }
    }, [email])
    return [isAdmin, isAdminLoading]
}

export default useAdmin;