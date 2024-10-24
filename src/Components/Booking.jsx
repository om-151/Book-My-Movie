import React, { useState, useEffect } from 'react'
// import { Link } from 'react-router-dom';

const products = [
    {
        id: 1,
        name: 'Kalki',
        basePrice: '350'
    },
    {
        id: 2,
        name: 'PK',
        basePrice: '150'
    },
    {
        id: 3,
        name: 'Jawan',
        basePrice: '250'
    },
    {
        id: 4,
        name: 'War',
        basePrice: '200'
    },
    {
        id: 5,
        name: 'Stree 2',
        basePrice: '450'
    },
    {
        id: 6,
        name: 'Bahubali 2',
        basePrice: '280'
    },
    {
        id: 7,
        name: 'Brahmastra',
        basePrice: '320'
    },
    {
        id: 8,
        name: 'Bhool bhulaiyaa',
        basePrice: '230'
    },
]

const Booking = () => {
    const [selectedSeat, setSelectedSeat] = useState(0);
    const [selectedMovie, setSelectedMovie] = useState('');
    const [selectedTime, setSelectedTime] = useState('');
    const [selectedTheatre, setSelectedTheatre] = useState('');
    const [totalPrice, setTotalPrice] = useState(0);
    const [selectedSeatType, setSelectedSeatType] = useState('');
    const basePrice = totalPrice;

    const handleChange = (e) => {
        setSelectedSeat(Number(e.target.value));
    };

    const changeMovie = (e) => {
        setSelectedMovie(e.target.value);
    };

    const changeTime = (e) => {
        setSelectedTime(e.target.value);
    };

    const changeTheatre = (e) => {
        setSelectedTheatre(e.target.value);
    };

    useEffect(() => {
        const selectedProduct = products.find((product) => product.name === selectedMovie);
        if (selectedProduct) {
            const priceIncrease = (selectedProduct.basePrice);
            setTotalPrice(selectedSeat * priceIncrease);
        } else {
            setTotalPrice(0);
        }
    }, [selectedMovie, selectedSeat]);

    const changeSeatType = (event) => {
        const seatType = event.target.value;
        setSelectedSeatType(seatType);

        let additionalCost = 0;
        switch (seatType) {
            case "Gold (+30)":
                additionalCost = 30;
                break;
            case "Silver (+20)":
                additionalCost = 20;
                break;
            case "Executive (+10)":
                additionalCost = 10;
                break;
            case "Platinum (+50)":
                additionalCost = 50;
                break;
            case "Royal sofa (+100)":
                additionalCost = 100;
                break;
            default:
                additionalCost = 0;
                break;
        }
        setTotalPrice(basePrice + additionalCost * selectedSeat);
    }

    return (
        <>
            <div className="container">
                <p className='text-center text-2xl font-semibold my-4 text-zinc-600 tracking-tight'>Fill this form to book your ticket</p>

                <form className='p-5' action='/confirm'>
                    <div className="space-y-12">
                        <div className="border-b border-gray-900/10 pb-12">
                            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                <div className="sm:col-span-3">
                                    <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                                        First name
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="first-name"
                                            name="first-name"
                                            type="text"
                                            autoComplete="given-name"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="sm:col-span-3">
                                    <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                                        Last name
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="last-name"
                                            name="last-name"
                                            type="text"
                                            autoComplete="family-name"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="sm:col-span-4">
                                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                        Email address
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            autoComplete="email"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="sm:col-span-3">
                                    <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                                        City
                                    </label>
                                    <div className="mt-2">
                                        <select
                                            id="country"
                                            name="country"
                                            autoComplete="country-name"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                            required
                                        >
                                            <option value={''} disabled selected>Select city</option>
                                            <option>Surat</option>
                                            <option>Mumbai</option>
                                            <option>Jaipur</option>
                                            <option>Kolkata</option>
                                            <option>Pune</option>
                                            <option>Ahemedabad</option>
                                            <option>Delhi</option>
                                            <option>Kanpur</option>
                                            <option>Morbi</option>
                                            <option>Chennai</option>
                                            <option>Bengaluru</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="sm:col-span-3">
                                    <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                                        Theatre
                                    </label>
                                    <div className="mt-2">
                                        <select
                                            id="country"
                                            name="country"
                                            autoComplete="country-name"
                                            required
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                            value={selectedTheatre}
                                            onChange={changeTheatre}
                                        >
                                            <option value={''} disabled selected >Select Theatre</option>
                                            <option value={'Rajhans multiplex'}>Rajhans multiplex</option>
                                            <option value={'Apple Cinema'}>Apple Cinema</option>
                                            <option value={'Cinepolis'}>Cinepolis</option>
                                            <option value={'Cineverse Cinema'}>Cineverse Cinema</option>
                                            <option value={'Cinezza Multiplex'}>Cinezza Multiplex</option>
                                            <option value={'INOX, reliance mall'}>INOX, reliance mall</option>
                                            <option value={'INOX, VR mall'}>INOX, VR mall</option>
                                            <option value={'Rahul raj'}>Rahul raj</option>
                                            <option value={'Vaishali'}>Vaishali</option>
                                            <option value={'Valentine'}>Valentine</option>
                                            <option value={'City plus multiplex'}>City plus multiplex</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="sm:col-span-3">
                                    <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                                        Show time
                                    </label>
                                    <div className="mt-2">
                                        <select
                                            id="country"
                                            name="country"
                                            autoComplete="country-name"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                            value={selectedTime}
                                            onChange={changeTime}
                                            required
                                        >
                                            <option value={''} disabled selected>Select time</option>
                                            <option value={'09:15 AM'}>09:15 AM</option>
                                            <option value={'10:00 AM'}>10:00 AM</option>
                                            <option value={'11:30 AM'}>11:30 AM</option>
                                            <option value={'12:15 PM'}>12:15 PM</option>
                                            <option value={'01:00 PM'}>01:00 PM</option>
                                            <option value={'02:30 PM'}>02:30 PM</option>
                                            <option value={'03:20 PM'}>03:20 PM</option>
                                            <option value={'05:00 PM'}>05:00 PM</option>
                                            <option value={'08:00 PM'}>08:00 PM</option>
                                            <option value={'09:30 PM'}>09:30 PM</option>
                                            <option value={'10:00 PM'}>10:00 PM</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="sm:col-span-3">
                                    <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                                        How many seat
                                    </label>
                                    <div className="mt-2">
                                        <select
                                            id="country"
                                            name="country"
                                            autoComplete="country-name"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                            value={selectedSeat}
                                            onChange={handleChange}
                                            required
                                        >
                                            <option value={''} disabled selected>Select seat</option>
                                            <option value={1}>1</option>
                                            <option value={2}>2</option>
                                            <option value={3}>3</option>
                                            <option value={4}>4</option>
                                            <option value={5}>5</option>
                                            <option value={6}>6</option>
                                            <option value={7}>7</option>
                                            <option value={8}>8</option>
                                            <option value={9}>9</option>
                                            <option value={10}>10</option>
                                            <option value={11}>11</option>
                                            <option value={12}>12</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="sm:col-span-3">
                                    <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                                        Movie name
                                    </label>
                                    <div className="mt-2">
                                        <select
                                            id="country"
                                            name="country"
                                            autoComplete="country-name"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                            value={selectedMovie}
                                            onChange={changeMovie}
                                            required
                                        >
                                            <option value={''} disabled selected>No movie selected</option>
                                            <option value={'Kalki'}>Kalki</option>
                                            <option value={'PK'}>PK</option>
                                            <option value={'Jawan'}>Jawan</option>
                                            <option value={'War'}>War</option>
                                            <option value={'Stree 2'}>Stree 2</option>
                                            <option value={'Bahubali 2'}>Bahubali 2</option>
                                            <option value={'Brahmastra'}>Brahmastra</option>
                                            <option value={'Bhool bhulaiyaa'}>Bhool bhulaiyaa</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="sm:col-span-3">
                                    <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                                        Seat type (select only one time)
                                    </label>
                                    <div className="mt-2">
                                        <select
                                            id="country"
                                            name="country"
                                            autoComplete="country-name"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                            value={selectedSeatType}
                                            onChange={changeSeatType}
                                            required
                                        >
                                            <option value={''} disabled selected>No Seat type selected</option>
                                            <option value={'Gold (+30)'}>Gold (+30)</option>
                                            <option value={'Silver (+20)'}>Silver (+20)</option>
                                            <option value={'Executive (+10)'}>Executive (+10)</option>
                                            <option value={'Platinum (+50)'}>Platinum (+50)</option>
                                            <option value={'Royal sofa (+100)'}>Royal sofa (+100)</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="col-span-full">
                                    <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">
                                        Street address
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="street-address"
                                            name="street-address"
                                            type="text"
                                            autoComplete="street-address"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="sm:col-span-3">
                                    <label htmlFor="region" className="block text-sm font-medium leading-6 text-gray-900">
                                        State / Province
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="region"
                                            name="region"
                                            type="text"
                                            autoComplete="address-level1"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="sm:col-span-3">
                                    <label htmlFor="postal-code" className="block text-sm font-medium leading-6 text-gray-900">
                                        ZIP / Postal code
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="postal-code"
                                            name="postal-code"
                                            type="text"
                                            autoComplete="postal-code"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            required
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-full mt-4 align-center brd max-w-80 shadow-2xl mx-auto rounded-3xl bg-sky-100">
                            <p className='text-center text-3xl font-semibold text-amber-600 my-7'>Ticket</p>
                            <p className="font-semibold text-lg text-center text-xl my-2 text-amber-900">
                                Ticket no.: {Math.floor(1000000000 + Math.random() * 9000000000)}
                            </p>
                            <p className="font-semibold text-lg text-center text-xl my-2 text-amber-900">
                                Movie Name : {selectedMovie}
                            </p>
                            <p className="font-semibold text-lg text-center text-xl my-2 text-amber-900">
                                Theatre Name : {selectedTheatre}
                            </p>
                            <p className="font-semibold text-lg text-center text-xl my-2 text-amber-900">
                                Show Time : {selectedTime}
                            </p>
                            <p className="font-semibold text-lg text-center text-xl my-2 text-amber-900">
                                Seats : {selectedSeat}
                            </p>
                            <p className="font-semibold text-lg text-center text-xl my-2 text-amber-900">
                                Seat type : {selectedSeatType}
                            </p>
                            <hr />
                            <p className="font-semibold text-lg text-center text-4xl my-5 text-amber-900">
                                Total Price : ₹{totalPrice}
                            </p>
                        </div>
                        <div className="mt-6 flex items-center justify-end gap-x-6">
                            <button type="reset" className="text-sm font-semibold leading-6 text-gray-900">
                                Cancel
                            </button>
                            <button
                                type="submit"
                                className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 m-10"
                            >
                                Book Ticket
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Booking