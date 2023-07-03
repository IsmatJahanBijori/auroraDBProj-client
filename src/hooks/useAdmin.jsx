// import { useQuery } from '@tanstack/react-query';
// import React, { useContext } from 'react';
// import { AuthContext } from '../Provider/AuthProvider';

// const useAdmin = () => {
//     const { user } = useContext(AuthContext)
//     const { data: isAdmin=[], isLoading: isAdminLoading } = useQuery({
//         queryKey: ['isAdmin', user?.email],
//         queryFn: async () => {
//             const res = await fetch(`http://localhost:5000/users/admin?email=${user?.email}`)
//             console.log("res", res)
//             return res.json()
//         }
//     })
//     return [isAdmin, isAdminLoading]
// };

// export default useAdmin;