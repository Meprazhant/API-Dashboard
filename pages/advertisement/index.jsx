import React, { useEffect } from 'react'
import Advertisement from '../../components/advertisement/Home'

function index() {
    var [isAdmin, setIsAdmin] = React.useState(false)
    var [loading, setLoading] = React.useState(true)
    useEffect(() => {
        checkData()
    }, [])

    function checkData() {
        fetch("/api/user/checkAdmin")
            .then(res => res.json())
            .then(data => {
                setLoading(false)
                if (data.isadmin === true) {
                    setIsAdmin(true);
                } else {
                    setIsAdmin(false);
                }
            }
            )
            .catch(err => console.log(err))

    }
    return (
        <div>
            {(isAdmin && !loading) && <Advertisement />}
            {(!isAdmin && !loading) && <h1>
                You do not have permission to access this page. Ask Admins for more information.
            </h1>}
        </div>
    )
}

export default index