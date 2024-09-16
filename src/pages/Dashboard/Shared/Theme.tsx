"use client";
import Link from "next/link";
import React from "react";

const Theme = ({
  name,
  description,
  query,
  children,
  buttonName,
  isCenter,
  buttonLink,
}: {
  name: string;
  description?: string;
  query?: string;
  children?: React.ReactNode;
  buttonName?: string;
  buttonLink?: string;
  isCenter?: boolean;
}) => {
  return (
    <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6 min-h-screen">
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">{name}</h1>
      </div>
      <div
        className={`flex flex-1 ${
          isCenter ? "justify-center items-center" : ""
        } rounded-lg border border-dashed shadow-sm p-4`}
        x-chunk="dashboard-02-chunk-1"
      >
        {children ? (
          children
        ) : (
          <div className="flex flex-col items-center gap-1 text-center">
            {query && (
              <h3 className="text-2xl font-bold tracking-tight">
                You have no products
              </h3>
            )}
            {description && (
              <p className="text-sm text-muted-foreground">
                You can start selling as soon as you add a product.
              </p>
            )}
            {buttonLink && (
              <Link
                href={buttonLink as string}
                className="mt-4 bg-accent px-4 text-base py-2 rounded-md text-black font-medium border hover:border-accent hover:bg-primary hover:text-white delay-75 duration-200 transition-all"
              >
                {buttonName}
              </Link>
            )}
          </div>
        )}
      </div>
    </main>
  );
};

export default Theme;
