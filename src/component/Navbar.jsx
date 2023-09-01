import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import logo from '../Assets/medicare 3.png'
import { NavHashLink, HashLink as Link } from 'react-router-hash-link'
import Button from './Button'
import { motion } from 'framer-motion'
import { useNavigate } from "react-router-dom";

const navigation = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Hire a Caregivers', href: '#hcaregivers' },
    { name: 'Caregivers', href: '#caregivers' },
    { name: 'Contact', href: '#contact' },


]



const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const navigate = useNavigate()

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Adds smooth scrolling animation
        });
    };
    const updateUrl = () => {
        // const newPath = '/login'; // Replace with the desired new path
        // window.history.pushState({}, null, newPath);
        navigate("#login")
    };

    const handleClick = () => {
        setMobileMenuOpen(false)
        updateUrl()
    }

    return (
        <div className="">
            <header className="absolute inset-x-0 top-0 z-50">
                <nav className="flex items-center justify-between bg-white shadow-md fixed w-full  p-6 lg:px-8" aria-label="Global">
                    <div className="flex lg:flex-1">
                        <a href="#home" className="-m-1.5 p-1.5">
                            <img
                                className="h-14 w-20 "
                                src={logo}
                                alt=""
                            />
                        </a>
                    </div>
                    <div className="flex lg:hidden">
                        <button
                            type="button"
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(true)}
                        >
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="hidden lg:flex lg:gap-x-12 ">
                        {navigation.map((item) => (
                            <NavHashLink onClick={scrollToTop} to={item.href} className=" transition-ease-out text-sm font-extrabold border-b-2 border-white hover:border-b-emerald-500 hover:border-b-2 p-3  font-Poppins leading-6 text-gray-900" smooth key={item.index} >{item.name} </NavHashLink>
                        ))}
                    </div>
                    <div className="hidden lg:flex lg:flex-1 gap-5 lg:justify-end">
                        <Button text="Sign up" navigate="/createaccount" />
                        <Button text="Login" navigate="/login" />


                    </div>
                </nav>
                <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                    <div className="fixed inset-0 z-50" />
                    <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full  overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                        <div className="flex items-center justify-between">
                            <a href="#logo" className="-m-1.5 p-1.5">

                                <img
                                    className="h-8 w-auto"
                                    src={logo}
                                    alt=""
                                />
                            </a>
                            <button
                                type="button"
                                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                <span className="sr-only">Close menu</span>
                                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                            </button>
                        </div>
                        <div className="mt-6 flow-root">
                            <div className="-my-6 divide-y divide-gray-500/10">
                                <div className="space-y-2 py-6">
                                    {navigation.map((item) => (
                                        <Link to={item.href} key={item.index} onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50" smooth  >{item.name} </Link>
                                    ))}
                                </div>
                                <div className="py-6 flex flex-col gap-3">
                                    <motion.button
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.8 }}
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="  rounded-lg font-Poppins px-[20px] py-[5px] border-emerald-500 border-2
                                             text-emerald-500 hover:border-white hover:text-white hover:bg-gradient-to-r from-emerald-500
                                             to-lime-300  first-letter:justify-center items-center   focus:outline-none focus:shadow-outline"><a href="#login" smooth>Login</a> </motion.button>
                                    <motion.button
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.8 }}
                                        onClick={handleClick}
                                        className="  rounded-lg font-Poppins px-[20px] py-[5px] border-emerald-500 border-2
                                             text-emerald-500 hover:border-white hover:text-white hover:bg-gradient-to-r from-emerald-500
                                             to-lime-300  first-letter:justify-center items-center   focus:outline-none focus:shadow-outline"><Link smooth>Sign Up</Link> </motion.button>

                                </div>
                            </div>
                        </div>
                    </Dialog.Panel>
                </Dialog>
            </header>
        </div>

    )
}

export default Navbar