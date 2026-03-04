import RelatedPost from "@/components/Blog/RelatedPost";
import SharePost from "@/components/Blog/SharePost";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Article | NovaFlow",

  // other metadata
  description:
    "Detailed insights and practical guidance from the NovaFlow team.",
};

const SingleBlogPage = async () => {
  return (
    <>
      <section className="pt-35 pb-20 lg:pt-45 lg:pb-25 xl:pt-50 xl:pb-30">
        <div className="max-w-c-1390 mx-auto px-4 md:px-8 2xl:px-0">
          <div className="flex flex-col-reverse gap-7.5 lg:flex-row xl:gap-12.5">
            <div className="md:w-1/2 lg:w-[32%]">
              <div className="animate_top border-stroke shadow-solid-13 dark:border-strokedark dark:bg-blacksection mb-10 rounded-md border bg-white p-3.5">
                <form
                  action="https://formbold.com/s/unique_form_id"
                  method="POST"
                >
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search Here..."
                      className="border-stroke shadow-solid-12 focus:border-primary dark:border-strokedark dark:focus:border-primary w-full rounded-lg border px-6 py-4 focus:outline-hidden dark:bg-black dark:shadow-none"
                    />

                    <button
                      className="absolute top-0 right-0 p-5"
                      aria-label="search-icon"
                    >
                      <svg
                        className="hover:fill-primary dark:hover:fill-primary fill-black transition-all duration-300 dark:fill-white"
                        width="21"
                        height="21"
                        viewBox="0 0 21 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M16.031 14.617L20.314 18.899L18.899 20.314L14.617 16.031C13.0237 17.3082 11.042 18.0029 9 18C4.032 18 0 13.968 0 9C0 4.032 4.032 0 9 0C13.968 0 18 4.032 18 9C18.0029 11.042 17.3082 13.0237 16.031 14.617ZM14.025 13.875C15.2941 12.5699 16.0029 10.8204 16 9C16 5.132 12.867 2 9 2C5.132 2 2 5.132 2 9C2 12.867 5.132 16 9 16C10.8204 16.0029 12.5699 15.2941 13.875 14.025L14.025 13.875Z" />
                      </svg>
                    </button>
                  </div>
                </form>
              </div>

              <div className="animate_top border-stroke shadow-solid-13 dark:border-strokedark dark:bg-blacksection mb-10 rounded-md border bg-white p-9">
                <h4 className="mb-7.5 text-2xl font-semibold text-black dark:text-white">
                  Categories
                </h4>

                <ul>
                  <li className="hover:text-primary mb-3 transition-all duration-300 last:mb-0">
                    <a href="#">Blog</a>
                  </li>
                  <li className="hover:text-primary mb-3 transition-all duration-300 last:mb-0">
                    <a href="#">Events</a>
                  </li>
                  <li className="hover:text-primary mb-3 transition-all duration-300 last:mb-0">
                    <a href="#">Grids</a>
                  </li>
                  <li className="hover:text-primary mb-3 transition-all duration-300 last:mb-0">
                    <a href="#">News</a>
                  </li>
                  <li className="hover:text-primary mb-3 transition-all duration-300 last:mb-0">
                    <a href="#">Rounded</a>
                  </li>
                </ul>
              </div>

              <RelatedPost />
            </div>

            <div className="lg:w-2/3">
              <div className="animate_top border-stroke shadow-solid-13 dark:border-strokedark dark:bg-blacksection rounded-md border bg-white p-7.5 md:p-10">
                <div className="mb-10 w-full overflow-hidden">
                  <div className="relative aspect-97/60 w-full sm:aspect-97/44">
                    <Image
                      src={"/images/blog/blog-01.png"}
                      alt="Kobe Steel plant that supplied"
                      fill
                      className="rounded-md object-cover object-center"
                    />
                  </div>
                </div>

                <h2 className="2xl:text-sectiontitle2 mt-11 mb-5 text-3xl font-semibold text-black dark:text-white">
                  Kobe Steel plant that supplied
                </h2>

                <ul className="mb-9 flex flex-wrap gap-5 2xl:gap-7.5">
                  <li>
                    <span className="text-black dark:text-white">Author: </span>{" "}
                    Jhon Doe
                  </li>
                  <li>
                    <span className="text-black dark:text-white">
                      Published On: July 30, 2023
                    </span>{" "}
                  </li>
                  <li>
                    <span className="text-black dark:text-white">
                      Category:
                    </span>
                    Events
                  </li>
                </ul>

                <div className="blog-details">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc quis nibh lorem. Duis sed odio lorem. In a efficitur
                    leo. Ut venenatis rhoncus quam sed condimentum. Curabitur
                    vel turpis in dolor volutpat imperdiet in ut mi. Integer non
                    volutpat nulla. Nunc elementum elit viverra, tempus quam
                    non, interdum ipsum.
                  </p>

                  <p>
                    Aenean augue ex, condimentum vel metus vitae, aliquam porta
                    elit. Quisque non metus ac orci mollis posuere. Mauris vel
                    ipsum a diam interdum ultricies sed vitae neque. Nulla
                    porttitor quam vitae pulvinar placerat. Nulla fringilla elit
                    sit amet justo feugiat sodales. Morbi eleifend, enim non
                    eleifend laoreet, odio libero lobortis lectus, non porttitor
                    sem urna sit amet metus. In sollicitudin quam est,
                    pellentesque consectetur felis fermentum vitae.
                  </p>

                  <div className="flex flex-wrap gap-5">
                    <Image
                      src={"/images/blog/blog-01.png"}
                      width={350}
                      height={200}
                      alt="image"
                    />
                    <Image
                      src={"/images/blog/blog-02.png"}
                      width={350}
                      height={200}
                      alt="image"
                    />
                  </div>

                  <h3 className="pt-8">
                    Nunc elementum elit viverra, tempus quam non
                  </h3>

                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc quis nibh lorem. Duis sed odio lorem. In a efficitur
                    leo. Ut venenatis rhoncus quam sed condimentum. Curabitur
                    vel turpis in dolor volutpat imperdiet in ut mi. Integer non
                    volutpat nulla. Nunc elementum elit viverra, tempus quam
                    non, interdum ipsum.
                  </p>
                </div>

                <SharePost />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleBlogPage;
