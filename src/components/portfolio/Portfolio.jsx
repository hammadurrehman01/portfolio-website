import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Grand Auto Parts",
    img: "/grandautoparts.png",
    desc: "Developed a SaaS platform connecting aftermarket parts sellers with customers through a comprehensive product directory. Implemented product mapping features to streamline the association between customers, vendors, and products. Enabled users to generate invoices and bills, improving transactional efficiency Integrated functionality for managing and tracking customer-vendor-product relationships effectively. Utilized modern web technologies for scalability and responsiveness",
    url: "https://www.grandautoparts.net/",
  },
  {
    id: 2,
    title: "Global Salah Forum",
    img: "/forum.png",
    desc: "A modern Q&A platform built to help users ask questions and receive answers related to Islamic knowledge, with a focus on daily practices like prayer, spirituality, and religious guidance. The platform creates a community-driven space where users can seek clarity and engage in meaningful discussions with others. Designed for ease of use and accessibility, GlobalSalah allows both general users and knowledgeable contributors to interact in a respectful and structured environment.",
    url: "https://globalsalah.com/en/forum",
  },
  {
    id: 3,
    title: "Taking Online Classes",
    img: "/taking-online-classes.png",
    desc: "Developed and deployed a comprehensive online learning platform, enabling students to access education seamlessly. User-friendly interface that facilitates easy navigation and intuitive access to courses and resources. Dynamic class management system, allowing instructors to schedule and deliver virtual classes efficiently. Secure user authentication and role-based access controls for students, teachers, and administrators",
    url: "https://takingmyclassesonline.com/",
  },
  {
    id: 4,
    title: "Ticket Wala",
    img: "/ticketwala.png",
    desc: "Developed a SaaS platform connecting bus owners with customers seeking ticket bookings for their services.Implemented features for managing vendor information, customer bookings, and ticket generation. Streamlined the travel experience by providing a centralized system for booking and managing trips. Enhanced efficiency by automating ticket generation and customer-vendor interactions. Utilized modern web technologies to ensure a responsive and scalable platform for both users and vendors.",
    url: "https://ticketwala.pk/",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
