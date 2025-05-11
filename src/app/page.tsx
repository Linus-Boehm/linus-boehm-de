import Image from "next/image";



export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center p-4 ">
      <div className="max-w-3xl w-full">
        {/* Profile Section */}
        <div className="flex flex-col items-center mb-16">
          <div className="relative w-48 h-48 mb-6">
            <Image
              src="/images/Linus.jpg"
              alt="Linus Boehm"
              fill
              className="rounded-full object-cover"
              priority
            />
          </div>
          <h1 className="text-3xl font-bold mb-2 dark:text-white ">
            Linus Boehm
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 ">
            Software Engineer based in Munich
          </p>
        </div>

        {/* Experience Section */}
        <section className="w-full">
          <h2 className="text-2xl font-bold mb-8 text-center dark:text-white ">
            Experience
          </h2>
          <div className="space-y-6">
            {/* Stealth Startup Experience */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="16" cy="16" r="16" fill="#64748b" />
                    <path
                      d="M10 16c0-3.314 2.686-6 6-6s6 2.686 6 6-2.686 6-6 6-6-2.686-6-6z"
                      fill="#fff"
                    />
                  </svg>
                </div>
                <div className="flex-grow">
                  <span className="inline-flex items-center gap-1 text-xl font-semibold dark:text-white">
                    Building in Stealth
                  </span>
                  <p className="text-gray-600 dark:text-gray-300">
                    Apr 2025 - Present
                  </p>
                </div>
              </div>
              <div className="space-y-6 pl-16">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-2 h-2 relative">
                      <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                      <div className="absolute inset-0 rounded-full bg-blue-500 opacity-75 animate-ping"></div>
                    </div>
                    <div className="flex justify-between items-center flex-grow">
                      <h4 className="text-lg font-semibold dark:text-white">
                        CTO
                      </h4>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        Apr 2025 - Present
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 pl-5">
                    Revolutionzing Accounting for the industrial backbone of
                    Europe
                  </p>
                </div>
              </div>
            </div>

            {/* Tacto Combined Experience */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 dark:bg-background bg-gray-100">
                  <Image
                    src="/images/tacto_icon.svg"
                    alt="Tacto"
                    width={32}
                    height={32}
                    className="object-contain"
                  />
                </div>
                <div className="flex-grow">
                  {/* Tacto Heading as Link */}
                  <a
                    href="https://www.tacto.ai/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-1 text-xl font-semibold dark:text-white hover:text-primary dark:hover:text-primary hover:underline transition-colors "
                  >
                    Tacto
                    <span className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      <svg
                        width="16"
                        height="16"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M18 13v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6m5-3h3m0 0v3m0-3L10 14"
                        />
                      </svg>
                    </span>
                  </a>
                  <p className="text-gray-600 dark:text-gray-300 ">
                    May 2021 - May 2025
                  </p>
                </div>
              </div>

              <div className="space-y-6 pl-16">
                {/* Engineering Lead */}
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                    <div className="flex justify-between items-center flex-grow">
                      <h4 className="text-lg font-semibold dark:text-white ">
                        Engineering Lead
                      </h4>
                      <span className="text-sm text-gray-500 dark:text-gray-400 ">
                        Mar 2024 - May 2025
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 pl-5 ">
                    Leading the Supply Chain Compliance Team to help industrial
                    procurement teams navigate article level compliance.
                  </p>
                </div>

                {/* Product Engineer */}
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                    <div className="flex justify-between items-center flex-grow">
                      <h4 className="text-lg font-semibold dark:text-white ">
                        Product Engineer
                      </h4>
                      <span className="text-sm text-gray-500 dark:text-gray-400 ">
                        Oct 2022 - Mar 2024
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 pl-5 ">
                    Supporting the CTO by leading a own small feature team
                    making our product ready for a Series A - building the first
                    supply chain compliance offering in our product for LKSG
                    which accelerated our growth.
                  </p>
                </div>

                {/* Software Engineer */}
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                    <div className="flex justify-between items-center flex-grow">
                      <h4 className="text-lg font-semibold dark:text-white ">
                        Software Engineer
                      </h4>
                      <span className="text-sm text-gray-500 dark:text-gray-400 ">
                        May 2021 - Oct 2022
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 pl-5 ">
                    Quitted my master to join tacto as a Fullstack Software
                    Engineer. Joined as one of the first full time hires. The
                    vision of the three CDTM founders convinced me to put full
                    focus on this mission.
                  </p>
                </div>
              </div>
            </div>

            {/* Syncier Product Engineer */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Image
                    src="/images/syncier_symbol.png"
                    alt="Syncier"
                    width={32}
                    height={32}
                    className="object-contain"
                  />
                </div>
                <div className="flex-grow">
                  {/* Syncier Heading as Link */}
                  <a
                    href="https://www.syncier.com/en/services"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-1 text-xl font-semibold dark:text-white hover:text-primary dark:hover:text-primary hover:underline transition-colors "
                  >
                    Syncier
                    <span className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      <svg
                        width="16"
                        height="16"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M18 13v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6m5-3h3m0 0v3m0-3L10 14"
                        />
                      </svg>
                    </span>
                  </a>
                  <p className="text-gray-600 dark:text-gray-300 ">
                    Nov 2019 - May 2021
                  </p>
                </div>
              </div>
              <div className="space-y-6 pl-16">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                    <div className="flex justify-between items-center flex-grow">
                      <h4 className="text-lg font-semibold dark:text-white ">
                        Product Engineer
                      </h4>
                      <span className="text-sm text-gray-500 dark:text-gray-400 ">
                        Nov 2019 - May 2021
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 pl-5 ">
                    Joined Syncier as a Working Student to support the cloud
                    team. We developed a SaaS tool to help highly regulated
                    businesses like insurances to adopt Kubernetes using GitOps.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
