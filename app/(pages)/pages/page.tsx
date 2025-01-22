"use client";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import {
  componentPages,
  totalComponents,
} from "@/components/pages/FloatingMenu";

export default function ComponentListPage() {
  // const totalComponents = componentPages.reduce(
  //   (sum, page) => sum + page.count,
  //   0
  // );

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Component Pages
          <span className="ml-2 inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
            {totalComponents} components
          </span>
        </h1>
        <p className="mt-4 text-xl text-gray-500">
          Explore our collection of pre-built components to accelerate your web
          development process. Each category contains multiple variations to
          suit your needs.
        </p>
        <div className="mt-12 bg-white shadow overflow-hidden sm:rounded-md">
          <ul className="divide-y divide-gray-200">
            {componentPages
              .filter((item) => item.name !== "All")
              .map((page) => {
                return (
                  <li key={page.name}>
                    <Link
                      href={page.url}
                      className="block hover:bg-gray-50 transition duration-150 ease-in-out"
                    >
                      <div className="px-4 py-4 sm:px-6">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <p className="text-lg font-medium text-blue-600 truncate">
                              {page.name}
                            </p>
                            <div className="ml-2 flex-shrink-0 flex">
                              <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                {page.count}{" "}
                                {page.count === 1 ? "component" : "components"}
                              </p>
                            </div>
                          </div>
                          <div className="ml-2 flex-shrink-0 flex">
                            <ArrowRight className="h-5 w-5 text-gray-400" />
                          </div>
                        </div>
                      </div>
                    </Link>
                  </li>
                );
              })}
            <li>
              <Link
                href="https://reactui-templates.vercel.app/simple-ui"
                className="block hover:bg-gray-50 transition duration-150 ease-in-out"
              >
                <div className="px-4 py-4 sm:px-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <p className="text-lg font-medium text-blue-600 truncate">
                        Check Advanced Ones (at Simple UI)
                      </p>
                      <div className="ml-2 flex-shrink-0 flex">
                        <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          10+
                        </p>
                      </div>
                    </div>
                    <div className="ml-2 flex-shrink-0 flex">
                      <ExternalLink className="h-5 w-5 text-gray-400" />
                    </div>
                  </div>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
