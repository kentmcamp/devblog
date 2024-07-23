// import { Typography } from '@material-tailwind/react'
import { useContext } from 'react'
import myContext from '../../context/data/myContext';

function HeroSection() {
    const context = useContext(myContext);
    const { mode } = context;
    return (
        <section
            style={{ background: mode === 'dark' ? 'linear-gradient(0deg, rgba(21,76,89,1) 0%, rgba(26,36,71,1) 100%)' : 'linear-gradient(0deg, rgba(34,195,185,1) 0%, rgba(61,48,164,1) 76%)'}}>

            {/* Hero Section  */}
            <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
                {/* Main Content  */}
                <main>
                    <div className="text-center">
                        <div className="mb-2">
                            {/* Image  */}
                            <div className="flex justify-center">
                                <img src="https://cdn-icons-png.flaticon.com/128/3685/3685253.png" alt="" />
                            </div>

                            {/* Text  */}
                            <h1 className=' text-2xl text-white font-bold'>Kent&apos;s Developer Blog</h1>
                        </div>

                        {/* Paragraph  */}
                        <p
                            style={{ color: mode === 'dark' ? 'white' : 'white' }}
                            className="sm:text-1xl text-xl font-extralight sm:mx-auto ">
                            A collection of projects and tutorials in regards to web development, software engineering, audio production, and more.
                        </p>
                    </div>

                </main>
            </div>
        </section>
    )
}

export default HeroSection
