import { motion } from "framer-motion";

const Skills = () => {
  return (
    <div className="mt-20 px-10 lg:px-0" id="skill">
      <h1 className="title ">Skills</h1>
      <motion.hr
        className="  border-gradient"
        initial={{ width: 0 }}
        whileInView={{ width: "100%" }}
        transition={{ duration: 1.5 }}
      />
      <motion.div
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-10 gap-5"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, scale: 0.9 }}
        transition={{ duration: 1.5 }}>
        <motion.div
          className="flex border-gradient items-center justify-center py-2"
          animate={{ textShadow: " 0px 0px 3px rgb(255,255,255)" }}
          whileHover={{
            boxShadow: " 0px 0px 8px rgb(255,255,255",
            textShadow: " 0px 0px 8px rgb(255,255,255",
          }}
          transition={{ duration: 1.5 }}>
          <p>HTML</p>
        </motion.div>
        <motion.div
          className="flex border-gradient items-center justify-center py-2"
          animate={{ textShadow: " 0px 0px 3px rgb(255,255,255)" }}
          whileHover={{
            boxShadow: " 0px 0px 8px rgb(255,255,255",
            textShadow: " 0px 0px 8px rgb(255,255,255",
          }}
          transition={{ duration: 1 }}>
          <p>CSS</p>
        </motion.div>
        <motion.div
          className="flex border-gradient items-center justify-center py-2"
          animate={{ textShadow: " 0px 0px 3px rgb(255,255,255)" }}
          whileHover={{
            boxShadow: " 0px 0px 8px rgb(255,255,255",
            textShadow: " 0px 0px 8px rgb(255,255,255",
          }}
          transition={{ duration: 1 }}>
          <p>Bootstrap</p>
        </motion.div>
        <motion.div
          className="flex border-gradient items-center justify-center py-2"
          animate={{ textShadow: " 0px 0px 3px rgb(255,255,255)" }}
          whileHover={{
            boxShadow: " 0px 0px 8px rgb(255,255,255",
            textShadow: " 0px 0px 8px rgb(255,255,255",
          }}
          transition={{ duration: 1 }}>
          <p>Tailwind</p>
        </motion.div>
        <motion.div
          className="flex border-gradient items-center justify-center py-2"
          animate={{ textShadow: " 0px 0px 3px rgb(255,255,255)" }}
          whileHover={{
            boxShadow: " 0px 0px 8px rgb(255,255,255",
            textShadow: " 0px 0px 8px rgb(255,255,255",
          }}
          transition={{ duration: 1 }}>
          <p>Javascript</p>
        </motion.div>
        <motion.div
          className="flex border-gradient items-center justify-center py-2"
          animate={{ textShadow: " 0px 0px 3px rgb(255,255,255)" }}
          whileHover={{
            boxShadow: " 0px 0px 8px rgb(255,255,255",
            textShadow: " 0px 0px 8px rgb(255,255,255",
          }}
          transition={{ duration: 1 }}>
          <p>React Js</p>
        </motion.div>
        <motion.div
          className="flex border-gradient items-center justify-center py-2"
          animate={{ textShadow: " 0px 0px 3px rgb(255,255,255)" }}
          whileHover={{
            boxShadow: " 0px 0px 8px rgb(255,255,255",
            textShadow: " 0px 0px 8px rgb(255,255,255",
          }}
          transition={{ duration: 1 }}>
          <p>Node Js</p>
        </motion.div>
        <motion.div
          className="flex border-gradient items-center justify-center py-2"
          animate={{ textShadow: " 0px 0px 3px rgb(255,255,255)" }}
          whileHover={{
            boxShadow: " 0px 0px 8px rgb(255,255,255",
            textShadow: " 0px 0px 8px rgb(255,255,255",
          }}
          transition={{ duration: 1 }}>
          <p>Express Js</p>
        </motion.div>
        <motion.div
          className="flex border-gradient items-center justify-center py-2"
          animate={{ textShadow: " 0px 0px 3px rgb(255,255,255)" }}
          whileHover={{
            boxShadow: " 0px 0px 8px rgb(255,255,255",
            textShadow: " 0px 0px 8px rgb(255,255,255",
          }}
          transition={{ duration: 1 }}>
          <p>Firebase Authentication</p>
        </motion.div>
        <motion.div
          className="flex border-gradient items-center justify-center py-2"
          animate={{ textShadow: " 0px 0px 3px rgb(255,255,255)" }}
          whileHover={{
            boxShadow: " 0px 0px 8px rgb(255,255,255",
            textShadow: " 0px 0px 8px rgb(255,255,255",
          }}
          transition={{ duration: 1 }}>
          <p>MongoDB</p>
        </motion.div>
        <motion.div
          className="flex border-gradient items-center justify-center py-2"
          animate={{ textShadow: " 0px 0px 3px rgb(255,255,255)" }}
          whileHover={{
            boxShadow: " 0px 0px 8px rgb(255,255,255",
            textShadow: " 0px 0px 8px rgb(255,255,255",
          }}
          transition={{ duration: 1 }}>
          <p>Github</p>
        </motion.div>
        <motion.div
          className="flex border-gradient items-center justify-center py-2"
          animate={{ textShadow: " 0px 0px 3px rgb(255,255,255)" }}
          whileHover={{
            boxShadow: " 0px 0px 8px rgb(255,255,255",
            textShadow: " 0px 0px 8px rgb(255,255,255",
          }}
          transition={{ duration: 1 }}>
          <p>REST Api</p>
        </motion.div>
        <motion.div
          className="flex border-gradient items-center justify-center py-2"
          animate={{ textShadow: " 0px 0px 3px rgb(255,255,255)" }}
          whileHover={{
            boxShadow: " 0px 0px 8px rgb(255,255,255",
            textShadow: " 0px 0px 8px rgb(255,255,255",
          }}
          transition={{ duration: 1 }}>
          <p>JWT</p>
        </motion.div>
        <motion.div
          className="flex border-gradient items-center justify-center py-2"
          animate={{ textShadow: " 0px 0px 3px rgb(255,255,255)" }}
          whileHover={{
            boxShadow: " 0px 0px 8px rgb(255,255,255",
            textShadow: " 0px 0px 8px rgb(255,255,255",
          }}
          transition={{ duration: 1 }}>
          <p>Stripe</p>
        </motion.div>
        <motion.div
          className="flex border-gradient items-center justify-center py-2"
          animate={{ textShadow: " 0px 0px 3px rgb(255,255,255)" }}
          whileHover={{
            boxShadow: " 0px 0px 8px rgb(255,255,255",
            textShadow: " 0px 0px 8px rgb(255,255,255",
          }}
          transition={{ duration: 1 }}>
          <p>AXIOS</p>
        </motion.div>
        <motion.div
          className="flex border-gradient items-center justify-center py-2"
          animate={{ textShadow: " 0px 0px 3px rgb(255,255,255)" }}
          whileHover={{
            boxShadow: " 0px 0px 8px rgb(255,255,255",
            textShadow: " 0px 0px 8px rgb(255,255,255",
          }}
          transition={{ duration: 1 }}>
          <p>Netlify</p>
        </motion.div>
        <motion.div
          className="flex border-gradient items-center justify-center py-2"
          animate={{ textShadow: " 0px 0px 3px rgb(255,255,255)" }}
          whileHover={{
            boxShadow: " 0px 0px 8px rgb(255,255,255",
            textShadow: " 0px 0px 8px rgb(255,255,255",
          }}
          transition={{ duration: 1 }}>
          <p>Vercel</p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Skills;
