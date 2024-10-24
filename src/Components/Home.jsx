import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import background from '../../public/Background.png'
import { CheckIcon } from '@heroicons/react/20/solid'

const images = [
    "https://www.boxofficemovies.in/now/wp-content/uploads/Horizontal-poster-of-Tiger-Zinda-Hai.jpg",
    "https://goggler.my/wp-content/uploads/2019/12/JM2_INTL_30Sht_BRIDGE_03-e1575889045252.jpg",
    "https://mb.cision.com/Public/14247/2902071/856b720fb81856ec_800x800ar.jpg",
    "https://i.pinimg.com/736x/6f/79/e6/6f79e64f42563f5134d7b90a73739c6f.jpg",
    "https://i.pinimg.com/736x/d0/ce/bf/d0cebfb2b63d84c3e4b34f2a5f30a0d5.jpg",
    "https://i.pinimg.com/736x/f5/84/22/f5842240e8cf322d7fb74e2da63b056b.jpg",
    'https://i.pinimg.com/736x/74/6a/3a/746a3ab26a12c9c49c4782a80ab06fe3.jpg',
    'https://img-mm.manoramaonline.com/content/dam/mm/mo/movies/movie-reviews/images/2023/1/25/pathaan-review.jpg?w=1120&h=583',
    'https://akm-img-a-in.tosshub.com/indiatoday/images/media_bank/202308/shah-rukh-khan--jawan--srk-films-295651-16x9.jpg?VersionId=x7rYP1QALLAfBkYuHhBH4zm6u25TA_cr&size=690:388'
];

const products = [
    {
        id: 1,
        name: 'Kalki (2024)',
        href: '/booking',
        imageSrc: 'https://c7.alamy.com/comp/2XF3M4C/kalki-2898-ad-2024-directed-by-nag-ashwin-and-starring-prabhas-amitabh-bachchan-and-kamal-haasan-the-most-expensive-indian-film-to-date-an-epic-sci-fi-adventure-about-a-modern-day-avatar-of-vishnu-a-hindu-god-who-is-believed-to-have-descended-to-earth-to-protect-the-world-from-evil-forces-indian-one-sheet-poster-editorial-use-only-credit-bfa-vyjayanthi-movies-2XF3M4C.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '350 ₹',
        time: '02:50:45',
    },
    {
        id: 2,
        name: 'PK (2024)',
        href: '/booking',
        imageSrc: 'https://i.pinimg.com/736x/f8/b2/c4/f8b2c434ccea75a8e018bc882152040d.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '150 ₹',
        time: '01:50:25',
    },
    {
        id: 3,
        name: 'Jawan (2024)',
        href: '/booking',
        imageSrc: 'https://i.pinimg.com/736x/89/c6/38/89c638a7bba10db0704c5dd32f0c48d3.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '250 ₹',
        time: '03:02:45',
    },
    {
        id: 4,
        name: 'War (2023)',
        href: '/booking',
        imageSrc: 'https://i.pinimg.com/736x/3b/5d/17/3b5d17da4f8d207beb8e4db08fbb3a31.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '200 ₹',
        time: '02:25:20',
    },
    {
        id: 5,
        name: 'Stree 2 (2024)',
        href: '/booking',
        imageSrc: 'https://i.pinimg.com/736x/7c/ad/45/7cad45919e7262e35ff639885f26f4c6.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '450 ₹',
        time: '02:49:49',
    },
    {
        id: 6,
        name: 'Bahubali 2 (2022)',
        href: '/booking',
        imageSrc: 'https://i.pinimg.com/736x/40/aa/4e/40aa4e597b0fb5c7d00bb54b1b2a0362.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '280 ₹',
        time: '02:15:15',
    },
    {
        id: 7,
        name: 'Brahmastra (2023)',
        href: '/booking',
        imageSrc: 'https://i.pinimg.com/736x/4e/63/50/4e635047df9135e23fbf7ace960b47ec.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '320 ₹',
        time: '02:13:45',
    },
    {
        id: 8,
        name: 'Bhool bhulaiyaa (2024)',
        href: '/booking',
        imageSrc: 'https://i.pinimg.com/736x/d5/01/12/d50112517b6891c39b315bb72a06908b.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '230 ₹',
        time: '01:59:55',
    },
]

const funActivity = [
    {
        id: 1,
        name: 'IPL (2024)',
        href: '/booking',
        imageSrc: 'https://i.pinimg.com/736x/5a/5c/e4/5a5ce4e042a058fb35aa3c1c755af2e4.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '3499 ₹',
        booking: 'Booking starts at 15 Aug',
    },
    {
        id: 2,
        name: 'International Vollyball (2024)',
        href: '/booking',
        imageSrc: 'https://img.freepik.com/free-vector/volleyball-championship-match-advertisement-realistic-vertical-poster-with-ball-blue-white-red-colors-vector-illustration_1284-76721.jpg?t=st=1728186511~exp=1728190111~hmac=11924b64961a6fe6de88ae626ec053cd57a7957384a14df14e6d584062a40081&w=740',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '2499 ₹',
        booking: 'Booking starts at 10 Sep',
    },
    {
        id: 3,
        name: 'International Hockey (2025)',
        href: '/booking',
        imageSrc: 'https://i.pinimg.com/736x/f3/0a/ef/f30aef16259d54bac1f0e9e617bfefc5.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '1999 ₹',
        booking: 'Booking starts at 05 Feb',
    },
    {
        id: 4,
        name: 'Woman IPL (2024)',
        href: '/booking',
        imageSrc: 'https://pbs.twimg.com/media/D50JvlgUEAAj-Sz?format=jpg&name=small',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '4999 ₹',
        booking: 'Booking starts at 12 Dec',
    },
]

const Home = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const tiers = [
        {
            name: 'Exclusive',
            id: 'tier-hobby',
            href: '#',
            priceMonthly: '199 ₹',
            description: "The perfect plan if you're just getting started with our services.",
            features: [
                '20 % Discount',
                'Unlimited booking',
                '24-hour support response time'
            ],
            featured: false,
        },
        {
            name: 'Premium',
            id: 'tier-enterprise',
            href: '#',
            priceMonthly: '299 ₹',
            description: 'Dedicated support and infrastructure for you.',
            features: [
                'Unlimited Movie',
                'First priority',
                'Advanced Payment option',
                '50 % Discount',
                'Anytime booking available',
                'Custom integrations',
            ],
            featured: true,
        },
    ]

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }

    return (
        <>
            <div className="container mx-auto">
                <Slider {...settings} className="overflow-hidden shadow-lg">
                    {images.map((image, index) => (
                        <div key={index} className="w-full h-64 md:h-96">
                            <img
                                src={image}
                                alt={`Slide ${index + 1}`}
                                className="w-full h-full object-fit"
                            />
                        </div>
                    ))}
                </Slider>
            </div>
            <div>
                <p className='text-center text-3xl font-bold my-4 text-blue-400'>Recommended Movies</p>
                <p className='text-center text-lg font-bold my-4 text-purple-500'>Get flat 10% off on morning show</p>
            </div>
            <div className="bg-white">
                <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900">Most popular movies</h2>

                    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                        {products.map((product) => (
                            <div key={product.id} className="group relative">
                                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                                    <img
                                        alt={product.imageAlt}
                                        src={product.imageSrc}
                                        className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                    />
                                </div>
                                <div className="mt-4 flex justify-between">
                                    <div>
                                        <h3 className="text-sm text-gray-700">
                                            <a href={product.href}>
                                                <span aria-hidden="true" className="absolute inset-0" />
                                                {product.name}
                                            </a>
                                        </h3>
                                        <p className="mt-1 text-sm text-gray-500">{product.time}</p>
                                    </div>
                                    <p className="text-sm font-medium text-gray-900">{product.price}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="container p-1">
                <img src={background} alt="Background image" />
                <p className='text-center text-3xl my-5 text-amber-600 font-semibold font-mono'>Explore fun activities</p>
            </div>
            <div className="bg-white">
                <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900">Most Popular fun activities</h2>

                    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                        {funActivity.map((funActivity) => (
                            <div key={funActivity.id} className="group relative">
                                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                                    <img
                                        alt={funActivity.imageAlt}
                                        src={funActivity.imageSrc}
                                        className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                    />
                                </div>
                                <div className="mt-4 flex justify-between">
                                    <div>
                                        <h3 className="text-sm text-gray-700">
                                            <a href={funActivity.href}>
                                                <span aria-hidden="true" className="absolute inset-0" />
                                                {funActivity.name}
                                            </a>
                                        </h3>
                                        <p className="mt-1 text-sm text-gray-500">{funActivity.booking}</p>
                                    </div>
                                    <p className="text-sm font-medium text-gray-900">{funActivity.price}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="relative isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
                <div aria-hidden="true" className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl">
                    <div
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                        className="mx-auto aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
                    />
                </div>
                <div className="mx-auto max-w-2xl text-center lg:max-w-4xl">
                    <h2 className="text-base font-semibold leading-7 text-indigo-600">Pricing</h2>
                    <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                        The right price for you, whoever you are
                    </p>
                </div>
                <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600">
                    Choose one of the best plan for you and your family.
                </p>
                <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-2">
                    {tiers.map((tier, tierIdx) => (
                        <div
                            key={tier.id}
                            className={classNames(
                                tier.featured ? 'relative bg-gray-900 shadow-2xl' : 'bg-white/60 sm:mx-8 lg:mx-0',
                                tier.featured
                                    ? ''
                                    : tierIdx === 0
                                        ? 'rounded-t-3xl sm:rounded-b-none lg:rounded-bl-3xl lg:rounded-tr-none'
                                        : 'sm:rounded-t-none lg:rounded-bl-none lg:rounded-tr-3xl',
                                'rounded-3xl p-8 ring-1 ring-gray-900/10 sm:p-10',
                            )}
                        >
                            <h3
                                id={tier.id}
                                className={classNames(
                                    tier.featured ? 'text-indigo-400' : 'text-indigo-600',
                                    'text-base font-semibold leading-7',
                                )}
                            >
                                {tier.name}
                            </h3>
                            <p className="mt-4 flex items-baseline gap-x-2">
                                <span
                                    className={classNames(
                                        tier.featured ? 'text-white' : 'text-gray-900',
                                        'text-5xl font-bold tracking-tight',
                                    )}
                                >
                                    {tier.priceMonthly}
                                </span>
                                <span className={classNames(tier.featured ? 'text-gray-400' : 'text-gray-500', 'text-base')}>/month</span>
                            </p>
                            <p className={classNames(tier.featured ? 'text-gray-300' : 'text-gray-600', 'mt-6 text-base leading-7')}>
                                {tier.description}
                            </p>
                            <ul
                                role="list"
                                className={classNames(
                                    tier.featured ? 'text-gray-300' : 'text-gray-600',
                                    'mt-8 space-y-3 text-sm leading-6 sm:mt-10',
                                )}
                            >
                                {tier.features.map((feature) => (
                                    <li key={feature} className="flex gap-x-3">
                                        <CheckIcon
                                            aria-hidden="true"
                                            className={classNames(tier.featured ? 'text-indigo-400' : 'text-indigo-600', 'h-6 w-5 flex-none')}
                                        />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            <a
                                href={tier.href}
                                aria-describedby={tier.id}
                                className={classNames(
                                    tier.featured
                                        ? 'bg-indigo-500 text-white shadow-sm hover:bg-indigo-400 focus-visible:outline-indigo-500'
                                        : 'text-indigo-600 ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300 focus-visible:outline-indigo-600',
                                    'mt-8 block rounded-md px-3.5 py-2.5 text-center text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 sm:mt-10',
                                )}
                            >
                                Get started today
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Home