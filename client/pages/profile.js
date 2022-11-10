import Nav from '../components/Nav'
import { useContext } from 'react';
import { UserContext } from '../lib/UserContext';

const Profile = () => {
  const [user] = useContext(UserContext);
  //const user = useUser({ redirectTo: '/login' })

  return (



    <div className='relative bg-black'>
      <Nav />
      <div className='absolute inset-0 from-pink-500 to-blue-500 bg-gradient-45 rounded-lg blur-3xl opacity-25'></div>
      <div className='relative grid justify-center px-10 py-40 content-center items-center grid-rows-2'>
        <div className='text-sky-500 bg-white-600'>
          <div className='relative'>
            <div className='absolute inset-0 from-pink-500 to-blue-500 bg-gradient-45 rounded-lg blur-3xl opacity-75'></div>
            <h1 className='text-3xl'>Profile</h1>
            <img src='/images/profileLogo.png'></img>
            {user && (
              <>
                <p className='text-sky-700'>Your Session:</p>
                <p>{user.email}</p>
                {/* <pre>{JSON.stringify(user, null, 2)}</pre> */}
              </>
            )}
          </div>
        </div>


      </div>

    </div>






  )
}

export default Profile;