import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Home: React.FC = () => {
  return (
    <div className={`p-4`}>
      <h1 className="text-2xl lg:text-4xl text-center font-bold">Profile</h1>
      <div className="py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
        <Image
          className="block mx-auto h-auto w-auto rounded-full sm:mx-0 sm:shrink-0"
          src="https://github.com/eduardofavarato.png"
          alt="Eduardo Favarato"
          width={100}
          height={24}
          priority={true}
        ></Image>
        <div className="text-center space-y-2 sm:text-left">
          <div className="space-y-0.5 mb-2">
            <p className="text-lg text-black font-semibold">Eduardo Favarato</p>
            <p className="text-slate-500 font-medium">Software Engineer</p>
          </div>
          <Link
            className="px-4 py-1 text-sm text-slate-800 font-semibold rounded-full border border-slate-200 hover:text-white hover:bg-slate-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-slate-600 focus:ring-offset-2"
            href={'/repositories'}
          >
            Repositories
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home
