import SidebarLink from "@/components/Docs/SidebarLink";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Documentation | NovaFlow",

  // other metadata
  description: "Guides and references for using the NovaFlow platform.",
};

export default function DocsPage() {
  return (
    <>
      <section className="pt-24 pb-16 md:pt-28 md:pb-20 lg:pt-32 lg:pb-24">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 lg:w-1/4">
              <div className="shadow-solid-4 dark:border-strokedark dark:bg-blacksection sticky top-[74px] rounded-lg border border-white p-4 transition-all">
                <ul className="space-y-2">
                  <SidebarLink />
                </ul>
              </div>
            </div>

            <div className="w-full px-4 lg:w-3/4">
              <div className="blog-details blog-details-docs shadow-three dark:bg-gray-dark rounded-xs bg-white px-8 py-11 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]">
                <h1>Welcome to NovaFlow Documentation</h1>

                <p className="text-body-color dark:text-body-color-dark text-base">
                  Find product guides, onboarding steps, and implementation
                  references to help your team get the most out of NovaFlow.
                </p>
                <p className="text-body-color dark:text-body-color-dark text-base">
                  Need help with setup or migration? Reach out to our support
                  team for implementation assistance and best-practice
                  recommendations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
