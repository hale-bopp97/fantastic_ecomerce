import { useContext } from 'react';
import { UserContext } from '../lib/UserContext';

const Profile = () => {
  const [user] = useContext(UserContext);
  //const user = useUser({ redirectTo: '/login' })

  return (
    <div>
      <h1>Profile</h1>

      {user && (
        <>
          <p>Your session:</p>
          <p>{user.email}</p>
          <pre>{JSON.stringify(user, null, 2)}</pre>
        </>
      )}

      
    </div>
  )
}

export default Profile;