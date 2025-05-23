"use client"

import React from "react";

const banner_2 = () => {
  return (
    <div className="p-6 py-12 border bg-primary text-primary-foreground dark:bg-primary dark:text-primary-foreground">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <h2 className="text-center text-6xl tracking-tighter font-bold">
            Up to <br className="sm:hidden" /> 50% Off
          </h2>
          <div className="space-x-2 text-center py-2 lg:py-0">
            <span>Plus free shipping! Use code:</span>
            <span className="font-bold text-lg text-secondary-foreground">
              SRUMMANF
            </span>
          </div>
          <a
            href="#"
            className="px-5 mt-4 lg:mt-0 py-3 rounded-md border border-border block bg-card text-card-foreground hover:bg-secondary hover:text-secondary-foreground"
          >
            Shop Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default banner_2;
