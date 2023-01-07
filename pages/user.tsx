import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { UserPage } from '../Page_Components/UserPage/UserPage';

function User(): JSX.Element {
    const [userId, setUserId] = useState<string>('');
    const [userName, setUserName] = useState<string>('');
    const [userDate, setUserDate] = useState<string>('');
    const router = useRouter();
    
    useEffect(() => {
      let id = localStorage.getItem('user_id');

      if (id) {
          setUserId(id);
      } else {
          router.push('/login');
      }
    }, [router])

    if (userId) {
      let user = axios.get(process.env.NEXT_PUBLIC_DOMAIN + '/user/get/?id=' + userId);

      user.then((response) => {
        setUserName(response.data.name);
        setUserDate(response.data.registration_date);
      });
    }
    
    return (
      <UserPage userName={userName} userDate={userDate} />
    );
}

export default User;