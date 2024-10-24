import React from 'react'
import logo from '../../public/Logo1.png'

const people = [
  {
    name: 'Judith Black',
    role: 'Co-Founder / CEO',
    imageUrl:
      'https://images.unsplash.com/photo-1562788869-4ed32648eb72?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'Leslie Alexander',
    role: 'Manager',
    imageUrl:
      'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'Blutie Metalic',
    role: 'Manager / sales',
    imageUrl:
      'https://images.unsplash.com/photo-1559718062-361155fad299?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'Raghav Nautial',
    role: 'Accountant',
    imageUrl:
      'https://images.unsplash.com/photo-1559418162-0d309d8d10a3?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'Meet Jaswal',
    role: 'CA',
    imageUrl:
      'https://images.unsplash.com/photo-1559192823-e1d8e87def54?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'Lisbon Maiyaal',
    role: 'Company Secretary',
    imageUrl:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1288&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
]

const companies = [
  { logo: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg' },
  { logo: 'https://w7.pngwing.com/pngs/364/786/png-transparent-disney-logo-walt-disney-world-the-walt-disney-company-logo-walt-disney-s-disney-princess-cdr-text-monochrome.png' },
  { logo: 'https://i.gadgets360cdn.com/large/disney_plus_hotstar_logo_1583901149861.jpg?downsize=950:*' },
  { logo: 'https://upload.wikimedia.org/wikipedia/commons/1/11/Amazon_Prime_Video_logo.svg' },
  { logo: 'https://exchange4media.gumlet.io/news-photo/113497-big26.jpg' },
  { logo: 'https://tva.onscreenasia.com/wp-content/uploads/2023/08/JioCinema-Logo-1.png' },
  { logo: 'https://logos-world.net/wp-content/uploads/2021/11/ZEE5-Logo.png' },
  { logo: 'https://www.vhv.rs/dpng/d/417-4172864_mx-player-ifixit-logo-transparent-hd-png-download.png' },
  { logo: 'https://upload.wikimedia.org/wikipedia/en/a/ae/Apple_TV_%28logo%29.svg' },
];

const stats = [
  { id: 1, name: 'Satisfied User', value: '40 million+' },
  { id: 2, name: 'Downloader', value: '50 million+' },
  { id: 3, name: 'New users annually', value: '30,000+' },
]

const About = () => {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
        <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <img
            alt=""
            src={logo}
            className="mx-auto h-10"
          />
          <figure className="mt-10">
            <figcaption className="mt-10">
              <img
                alt=""
                src="https://images.unsplash.com/photo-1562788869-4ed32648eb72?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="mx-auto h-20 w-20 rounded-full"
              />
              <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                <div className="font-semibold text-gray-900">Judith Black</div>
                <svg width={3} height={3} viewBox="0 0 2 2" aria-hidden="true" className="fill-gray-900">
                  <circle r={1} cx={1} cy={1} />
                </svg>
                <div className="text-gray-600">CEO of Book my movie</div>
              </div>
              <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9 my-3">
                <p>
                  “Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias
                  molestiae. Numquam corrupti in laborum sed rerum et corporis.”
                </p>
              </blockquote>
            </figcaption>
          </figure>
        </div>
      </section>
      <div className="bg-white py-24 sm:py-1">
        <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meet our team</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Libero fames augue nisl porttitor nisi, quis. Id ac elit odio vitae elementum enim vitae ullamcorper
              suspendisse.
            </p>
          </div>
          <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
            {people.map((person) => (
              <li key={person.name}>
                <div className="flex items-center gap-x-6">
                  <img alt="" src={person.imageUrl} className="h-16 w-16 rounded-full" />
                  <div>
                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                    <p className="text-sm font-semibold leading-6 text-indigo-600">{person.role}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <p className="text-center text-3xl font-semibold my-8 text-amber-700">Streaming Partner</p>
      <div className="overflow-x-auto whitespace-nowrap p-4">
        <div className="flex space-x-6 md:space-x-10 lg:space-x-14">
          {companies.map((company, index) => (
            <div key={index} className="flex-shrink-0">
              <img
                src={company.logo}
                alt="Streaming Service"
                className="h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20 lg:h-24 lg:w-24 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
                <dt className="text-base leading-7 text-gray-600">{stat.name}</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </>
  )
}

export default About