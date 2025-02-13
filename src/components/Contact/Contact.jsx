import React, { useState } from "react";
import styles from "./Contact.module.css";
import { socials } from "../constants";

export const Contact = () => {
  const [showLinks, setShowLinks] = useState(true);

  return (
    <section id="Contact" className="!px-0 !py-10 text-white">
      <div className="container justify-between items-center gap-6 sm:gap-10">
        <div className="flex items-center gap-6 justify-center mx-auto">
          <ul className="flex flex-col gap-4 items-start md:flex-col lg:flex-row sm:items-center">
            {socials.map((item) => (
              <div
                key={item.id}
                className="flex flex-col items-start gap-2 sm:flex-row sm:items-center"
              >
                <a
                  href={item.url}
                  className="flex items-center justify-center w-10 h-10 bg-n-7 rounded-full transition-all hover:bg-n-6"
                >
                  <item.iconUrl className="w-5 h-5 text-white" />
                </a>

                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline text-sm"
                >
                  {item.url}
                </a>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
