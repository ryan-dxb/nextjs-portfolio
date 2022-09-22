import React from "react";
import { motion } from "framer-motion";

function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>

      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2080&q=80"
        className="mt-10 -mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[600px]"
      />
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-2xl md:text-3xl lg:text-4xl  font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#F7AB0A]/50">little</span>{" "}
          background
        </h4>
        <p className="text-md md:text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error nisi
          libero eius quis, non qui deserunt iure expedita dolor commodi vero
          tenetur molestiae atque quibusdam quos accusamus deleniti, rem earum.
          Quisquam est expedita ipsum similique corrupti nam voluptatem, id quas
          optio quis sunt labore delectus veritatis corporis architecto.
          Quibusdam vel nam ab commodi ullam reprehenderit assumenda quae illum
          nesciunt quia! Ullam quis repellendus a cumque eos adipisci reiciendis
          quod illo ipsa eveniet, unde voluptatem error dolore neque harum, sint
          provident. Illum eligendi alias aspernatur modi sit, neque incidunt ad
          architecto. Dignissimos quaerat porro libero.
        </p>
      </div>
    </motion.div>
  );
}

export default About;
