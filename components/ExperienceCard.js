import React from "react";
import { motion } from "framer-motion";

function ExperienceCard() {
  return (
    <article className="flex flex-col rounded-lg items-center mt-20 space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-7 opacity-40 hover:opacity-100 transition-all duration-200 cursor-pointer overflow-hidden">
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2080&q=80"
      />

      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">CEO of Smart Turn Digital</h4>
        <p className="font-bold text-2xl mt-1">Smart Turn Digital</p>
        <div className="flex space-x-2 my-2">
          <img
            src="https://fedojo.com/wp-content/uploads/2019/03/logo-javascript-png-html-code-allows-to-embed-javascript-logo-in-your-website-587.png"
            alt=""
            className="h-10  rounded-full"
          />
          <img
            src="https://fedojo.com/wp-content/uploads/2019/03/logo-javascript-png-html-code-allows-to-embed-javascript-logo-in-your-website-587.png"
            alt=""
            className="h-10  rounded-full"
          />
          <img
            src="https://fedojo.com/wp-content/uploads/2019/03/logo-javascript-png-html-code-allows-to-embed-javascript-logo-in-your-website-587.png"
            alt=""
            className="h-10  rounded-full"
          />
        </div>
        <p className="uppercase py-5 text-gray-300">
          Started Work.... Ended....
        </p>
        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>Summary Points</li>
          <li>Summary Points</li>
          <li>Summary Points</li>
          <li>Summary Points</li>
          <li>Summary Points</li>
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
