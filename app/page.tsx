import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link href="/" className="flex items-center">
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              EPTIGO
            </span>
          </Link>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <Image src="/menu.svg" alt="menu" width={24} height={24} />
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link
                  href="/"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="#product_n_client"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Products & Clients
                </Link>
              </li>
              <li>
                <Link
                  href="#contact_us"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            Eptigo
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">
            EptiGo has a significant concern in providing top-notch software
            solution services and products. We are specialized in creating
            innovative software solutions that meet clients' unique business
            needs and exceed their expectations. Our team of experienced
            professionals is passionate about using the latest technology to
            develop custom software solutions that are tailored to our clients'
            specific business requirements. Whether you need a simple or a
            complex software solution, we have the expertise to deliver the
            perfect solution on time and within budget. We are excited to work
            with you and help you to achieve your business goals through
            innovative software solutions. Contact us (Click on this contact us,
            user will be directed to contact us segment) to learn more about how
            we can help you to bring your ideas to reality. Along with providing
            software solutions we have our own products like EptiCode, which is
            an online platform for tech savvy freshers to prepare them for the
            technical interview and find a lot of job circulars.
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <Link
              href="#services"
              className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
            >
              Get started
            </Link>
            <Link
              href="#contact_us"
              className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            >
              Learn more
            </Link>
          </div>
        </div>
      </section>
      <section>
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
          <h1
            className="text-4xl font-extrabold dark:text-white mb-8"
            id="services"
          >
            Services
          </h1>
          <div className="grid grid-cols  lg:grid-cols-4 gap-4">
            {[
              { title: "Web development", src: "/assets/images/web.jpg" },
              { title: "App development", src: "/assets/images/mobile.jpg" },
              {
                title: "Enterprise software solution",
                src: "/assets/images/enterprise.jpg",
              },
              {
                title: "Software solution with ML/AI",
                src: "/assets/images/ai.jpg",
              },
            ].map((s: { title: string; src: string }, key) => (
              <div key={key} className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div className="flex flex-col items-center pb-10">
                  <Image
                    className="w-24 h-24 my-3 rounded-full shadow-lg"
                    src={s.src}
                    alt={s.title}
                    width={96}
                    height={96}
                  />
                  <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                    {s.title}
                  </h5>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section>
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
          <h1
            className="text-4xl font-extrabold dark:text-white mb-8"
            id="product_n_client"
          >
            Products
          </h1>
          <span>Epticode (coming soon...)</span>
        </div>
      </section>
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 grid lg:grid-cols-2 gap-8 lg:gap-16">
          <div className="flex flex-col justify-center">
            <h1
              className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white"
              id="contact_us"
            >
              Contact Us
            </h1>
            <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
              To join our team e-mail your resume to our official mail address
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
