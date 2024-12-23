import { motion } from "framer-motion";
import omgkawaii from '@/assets/omgkawaii.jpg';
import limacharlieLogo from '@/assets/limacharlie-logo.jpg';
import namimlLogo from '@/assets/namiml-logo.jpg';
import steelperlotLogo from '@/assets/steelperlot-logo.jpg';
import hiltiLogo from '@/assets/hilti.jpg';
import bankofamericaLogo from '@/assets/bankofamerica.jpg';
import jpmorganLogo from '@/assets/jpmorgan.jpg';
import ibmLogo from '@/assets/ibm.jpg';
import capitaloneLogo from '@/assets/capitalone.jpg';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export function Companies() {
  return (
    <section className="py-16">
      <div className="container">
        {/* Current Companies */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-12">Currently Working at</h2>
          <div className="grid grid-cols-2 gap-8 max-w-2xl mx-auto">
            <motion.div
              whileHover={{ scale: 1.05 }}>
              <img
                src={omgkawaii}
                alt="OMG Kawaii"
                className="w-full aspect-square object-cover rounded-lg"
              />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}>
              <img
                src={limacharlieLogo}
                alt="LimaCharlie"
                className="w-full aspect-square object-cover rounded-lg"
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Previous Companies */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          className="text-center"
        >
          <h2 className="text-3xl font-bold mb-12">Companies I have worked for</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <motion.div
              variants={item}
              whileHover={{ scale: 1.05 }}>
              <img
                src={namimlLogo}
                alt="NAMI"
                className="w-full aspect-square object-cover rounded-lg"
              />
            </motion.div>
            <motion.div
              variants={item}
              whileHover={{ scale: 1.05 }}>
              <img
                src={steelperlotLogo}
                alt="SteelPerlot"
                className="w-full aspect-square object-cover rounded-lg"
              />
            </motion.div>
            <motion.div
              variants={item}
              whileHover={{ scale: 1.05 }}>
              <img
                src={hiltiLogo}
                alt="Hilti"
                className="w-full aspect-square object-cover rounded-lg"
              />
            </motion.div>
            <motion.div
              variants={item}
              whileHover={{ scale: 1.05 }}>
              <img
                src={bankofamericaLogo}
                alt="Bank of America"
                className="w-full aspect-square object-cover rounded-lg"
              />
            </motion.div>
            <motion.div
              variants={item}
              whileHover={{ scale: 1.05 }}>
              <img
                src={jpmorganLogo}
                alt="JP Morgan"
                className="w-full aspect-square object-cover rounded-lg"
              />
            </motion.div>
            <motion.div
              variants={item}
              whileHover={{ scale: 1.05 }}>
              <img
                src={ibmLogo}
                alt="IBM"
                className="w-full aspect-square object-cover rounded-lg"
              />
            </motion.div>
            <motion.div
              variants={item}
              whileHover={{ scale: 1.05 }}>
              <img
                src={capitaloneLogo}
                alt="Capital One"
                className="w-full aspect-square object-cover rounded-lg"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}