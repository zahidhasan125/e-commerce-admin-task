import { useEffect, useState } from "react";

const useToken = email => {
    const [token, setToken] = useState('');
    useEffect(() => {
        if (email) {
            fetch(`http://localhost:8082/jwt?email=${email}`)
                .then(res => res.json())
                .then(data => {
                    if (data.accessToken) {
                        localStorage.setItem('e-shop-task-token', data.accessToken);
                        setToken(data.accessToken);
                    }
                })
        }
    }, [email]);
    return [token];
}

export default useToken;