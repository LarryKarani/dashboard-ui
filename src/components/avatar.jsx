import Profile from '../assets/profile.png'

export default function Avartor() {
    return (
        <>
            <img
                className="inline-block h-14 w-14 rounded-full"
                src={Profile}
                alt=""
            />
            <h3 style={{color: '#888CB7'}} className="mt-3">Hello ! Rusalba Luise</h3>
            <p className='text-xs text-center font-light text-gray-500'>Welcome back to your insurance portal</p>
            <p className='text-sm text-center font-light text-gray-600 mt-2'>Your Plan <span className='text-green-500'>Free</span></p>
        </>
    )
}