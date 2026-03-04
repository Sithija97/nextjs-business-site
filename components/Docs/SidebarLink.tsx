"use client";
import Link from "next/link";

const SidebarLink = () => {
  return (
    <>
      <li className="block">
        <Link
          href={`/docs`}
          className={`bg-stroke dark:bg-blackho flex w-full rounded-xs px-3 py-2 text-base text-black dark:text-white`}
        >
          Introduction
        </Link>
        <Link
          href={`/docs`}
          className={`flex w-full rounded-xs px-3 py-2 text-base text-black dark:text-white`}
        >
          Setup Guide
        </Link>
        <Link
          href={`/docs`}
          className={`flex w-full rounded-xs px-3 py-2 text-base text-black dark:text-white`}
        >
          Platform Standards
        </Link>
        <Link
          href={`/docs`}
          className={`flex w-full rounded-xs px-3 py-2 text-base text-black dark:text-white`}
        >
          Components & Workflows
        </Link>
      </li>
    </>
  );
};

export default SidebarLink;
