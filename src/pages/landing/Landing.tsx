import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, MapPin } from "lucide-react";
import Logo from "../../assets/logo.png";
import Smile from "../../assets/smile.jpg";
import { useNavigate } from "react-router-dom";
import AnimatedFeatures from "@/components/landing/FeatureSection";

const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col min-h-screen">
      <section className="w-full h-screen  bg-gradient-to-r from-blue-100 to-green-100">
        <header className="px-4 lg:px-6 h-20 flex items-center">
          <Link className="flex items-center justify-center" href="#">
            <img src={Logo} height={180} width={180} className="object-cover" />
            <span className="sr-only">Lily Dental Clinic</span>
          </Link>
          <nav className="ml-auto flex gap-4 sm:gap-6">
            <button
              className="text-sm font-medium hover:underline underline-offset-4"
              onClick={() => navigate("/login")}
            >
              Login / Signup
            </button>
            <Link
              className="text-sm font-medium hover:underline underline-offset-4"
              href="#services"
            >
              Services
            </Link>
            <Link
              className="text-sm font-medium hover:underline underline-offset-4"
              href="#about"
            >
              About
            </Link>
            <Link
              className="text-sm font-medium hover:underline underline-offset-4"
              href="#contact"
            >
              Contact
            </Link>
          </nav>
        </header>
        <div className="flex items-center justify-center h-[80%]">
          <div className="flex flex-col  items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none py-3 0">
                Welcome to Lily Dental Clinic
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Your journey to a healthier, brighter smile starts here. Expert
                care with a gentle touch. Making easy for you to book
                appointments and keep track of your dental health
              </p>
            </div>
            <div className="space-x-4">
              <Button onClick={() => navigate("/login")} className="py-6">
                Book Appointment
              </Button>
            </div>
          </div>
        </div>
      </section>

      <main className="flex-1 justify-center items-center w-full">
        <section
          id="services"
          className="w-full mx-auto py-12 md:py-24 lg:py-32 bg-white"
        >
          <div className=" px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
              Our Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "General Dentistry",
                  description: "Comprehensive dental care for all ages",
                  icon: ToothIcon,
                },
                {
                  title: "Cosmetic Dentistry",
                  description:
                    "Enhance your smile with our cosmetic treatments",
                  icon: SparklesIcon,
                },
                {
                  title: "Orthodontics",
                  description: "Straighten your teeth for a perfect smile",
                  icon: BraceIcon,
                },
                {
                  title: "Oral Surgery",
                  description:
                    "Expert surgical procedures for complex dental issues",
                  icon: ScalpelIcon,
                },
                {
                  title: "Pediatric Dentistry",
                  description: "Specialized care for children's dental health",
                  icon: BabyIcon,
                },
                {
                  title: "Periodontics",
                  description:
                    "Gum care and treatments for periodontal diseases",
                  icon: GumIcon,
                },
              ].map((service, index) => (
                <Card key={index}>
                  <CardContent className="flex flex-col items-center space-y-4 p-6 hover:shadow-md duration-150 ">
                    <service.icon className="h-12 w-12 text-blue-500" />
                    <h3 className="text-xl font-bold">{service.title}</h3>
                    <p className="text-center text-gray-500">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section>
          <AnimatedFeatures />
        </section>
        <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className=" px-4 md:px-6">
            <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <img
                alt="Dental clinic interior"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                height="310"
                src={Smile}
                width="550"
              />
              <div className="flex flex-col justify-center space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  About Us
                </h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  The Dental clinic Management System was born from the need to
                  improve the efficiency of dental clinic operations. Scheduling
                  appointments, managing patient records, and tracking doctors'
                  availability are essential for providing a high-quality
                  patient experience. This system helps dental clinics automate
                  these processes and offers a simple, user-friendly interface
                  for both patients and staff. This project is also a portfolio
                  piece for Holberton School, where I applied my full-stack
                  development skills to create a real-world solution for
                  clinics.
                </p>
                <ul className="grid gap-6 md:grid-cols-2">
                  <li className="flex items-center space-x-2">
                    <CheckCircleIcon className="h-5 w-5 text-green-500" />
                    <span>State-of-the-art equipment</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircleIcon className="h-5 w-5 text-green-500" />
                    <span>Experienced dental team</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircleIcon className="h-5 w-5 text-green-500" />
                    <span>Comfortable atmosphere</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircleIcon className="h-5 w-5 text-green-500" />
                    <span>Personalized care plans</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-100"
        >
          <div className=" px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
              Contact Us
            </h2>
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col space-y-4">
                <h3 className="text-2xl font-bold">Get in Touch</h3>
                <p className="text-gray-500">
                  We're here to answer any questions you may have about our
                  services.
                </p>
                <div className="flex items-center space-x-2">
                  <Phone className="h-5 w-5 text-blue-500" />
                  <span>(123) 456-7890</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5 text-blue-500" />
                  <span>Addis Ababa, Ethiopia</span>
                </div>
              </div>
              <div className="flex flex-col space-y-4">
                <h3 className="text-2xl font-bold">Developer contact</h3>
                <a
                  href="https://www.linkedin.com/in/naol-mitiku-0a48a423b"
                  className="flex gap-2 items-center"
                  target="_blank"
                >
                  <Linkedin className="size-8" />
                  <h1>Naol Mitiku</h1>
                </a>
                <a
                  href="https://github.com/Naola1"
                  target="_blank"
                  className="flex gap-2 items-center"
                >
                  <Github className="size-6" />
                  <h1>Naol Mitiku</h1>
                </a>
                <a
                  href="https://github.com/Naola1/dental_clinic_frontend"
                  target="_blank"
                  className="flex gap-2 items-center"
                >
                  <Github className="size-6" />
                  <h1>Front-end source code</h1>
                </a>
                <a
                  href="https://github.com/Naola1/dental_clinic-backend"
                  target="_blank"
                  className="flex gap-2 items-center"
                >
                  <Github className="size-6" />
                  <h1>Back-end source code</h1>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500">
          © 2024 Lily Dental Clinic. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
};

export default LandingPage;

function Github(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="100"
      height="100"
      viewBox="0 0 50 50"
    >
      <path d="M17.791,46.836C18.502,46.53,19,45.823,19,45v-5.4c0-0.197,0.016-0.402,0.041-0.61C19.027,38.994,19.014,38.997,19,39 c0,0-3,0-3.6,0c-1.5,0-2.8-0.6-3.4-1.8c-0.7-1.3-1-3.5-2.8-4.7C8.9,32.3,9.1,32,9.7,32c0.6,0.1,1.9,0.9,2.7,2c0.9,1.1,1.8,2,3.4,2 c2.487,0,3.82-0.125,4.622-0.555C21.356,34.056,22.649,33,24,33v-0.025c-5.668-0.182-9.289-2.066-10.975-4.975 c-3.665,0.042-6.856,0.405-8.677,0.707c-0.058-0.327-0.108-0.656-0.151-0.987c1.797-0.296,4.843-0.647,8.345-0.714 c-0.112-0.276-0.209-0.559-0.291-0.849c-3.511-0.178-6.541-0.039-8.187,0.097c-0.02-0.332-0.047-0.663-0.051-0.999 c1.649-0.135,4.597-0.27,8.018-0.111c-0.079-0.5-0.13-1.011-0.13-1.543c0-1.7,0.6-3.5,1.7-5c-0.5-1.7-1.2-5.3,0.2-6.6 c2.7,0,4.6,1.3,5.5,2.1C21,13.4,22.9,13,25,13s4,0.4,5.6,1.1c0.9-0.8,2.8-2.1,5.5-2.1c1.5,1.4,0.7,5,0.2,6.6c1.1,1.5,1.7,3.2,1.6,5 c0,0.484-0.045,0.951-0.11,1.409c3.499-0.172,6.527-0.034,8.204,0.102c-0.002,0.337-0.033,0.666-0.051,0.999 c-1.671-0.138-4.775-0.28-8.359-0.089c-0.089,0.336-0.197,0.663-0.325,0.98c3.546,0.046,6.665,0.389,8.548,0.689 c-0.043,0.332-0.093,0.661-0.151,0.987c-1.912-0.306-5.171-0.664-8.879-0.682C35.112,30.873,31.557,32.75,26,32.969V33 c2.6,0,5,3.9,5,6.6V45c0,0.823,0.498,1.53,1.209,1.836C41.37,43.804,48,35.164,48,25C48,12.318,37.683,2,25,2S2,12.318,2,25 C2,35.164,8.63,43.804,17.791,46.836z"></path>
    </svg>
  );
}

function Linkedin(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="100"
      height="100"
      viewBox="0 0 48 48"
    >
      <path
        fill="#0078d4"
        d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5	V37z"
      ></path>
      <path
        d="M30,37V26.901c0-1.689-0.819-2.698-2.192-2.698c-0.815,0-1.414,0.459-1.779,1.364	c-0.017,0.064-0.041,0.325-0.031,1.114L26,37h-7V18h7v1.061C27.022,18.356,28.275,18,29.738,18c4.547,0,7.261,3.093,7.261,8.274	L37,37H30z M11,37V18h3.457C12.454,18,11,16.528,11,14.499C11,12.472,12.478,11,14.514,11c2.012,0,3.445,1.431,3.486,3.479	C18,16.523,16.521,18,14.485,18H18v19H11z"
        opacity=".05"
      ></path>
      <path
        d="M30.5,36.5v-9.599c0-1.973-1.031-3.198-2.692-3.198c-1.295,0-1.935,0.912-2.243,1.677	c-0.082,0.199-0.071,0.989-0.067,1.326L25.5,36.5h-6v-18h6v1.638c0.795-0.823,2.075-1.638,4.238-1.638	c4.233,0,6.761,2.906,6.761,7.774L36.5,36.5H30.5z M11.5,36.5v-18h6v18H11.5z M14.457,17.5c-1.713,0-2.957-1.262-2.957-3.001	c0-1.738,1.268-2.999,3.014-2.999c1.724,0,2.951,1.229,2.986,2.989c0,1.749-1.268,3.011-3.015,3.011H14.457z"
        opacity=".07"
      ></path>
      <path
        fill="#fff"
        d="M12,19h5v17h-5V19z M14.485,17h-0.028C12.965,17,12,15.888,12,14.499C12,13.08,12.995,12,14.514,12	c1.521,0,2.458,1.08,2.486,2.499C17,15.887,16.035,17,14.485,17z M36,36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698	c-1.501,0-2.313,1.012-2.707,1.99C24.957,25.543,25,26.511,25,27v9h-5V19h5v2.616C25.721,20.5,26.85,19,29.738,19	c3.578,0,6.261,2.25,6.261,7.274L36,36L36,36z"
      ></path>
    </svg>
  );
}

function BabyIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 12h.01" />
      <path d="M15 12h.01" />
      <path d="M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5" />
      <path d="M19 6.3a9 9 0 0 1 1.8 3.9 2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1" />
    </svg>
  );
}

function BraceIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 4v16" />
      <path d="M8 4v4" />
      <path d="M16 4v4" />
      <path d="M8 20v-4" />
      <path d="M16 20v-4" />
      <path d="M4 9h16" />
      <path d="M8 9v6" />
      <path d="M16 9v6" />
    </svg>
  );
}

function CheckCircleIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  );
}

function GumIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 5c-1.7-1-3.4-2-5-2-2.6 0-5 1.6-5 5 0 3.5 3 6 3 9 0 1.6 1.3 3 3 3 .6 0 1.2-.3 1.6-.8" />
      <path d="M12 5c1.7-1 3.4-2 5-2 2.6 0 5 1.6 5 5 0 3.5-3 6-3 9 0 1.6-1.3 3-3 3-.6 0-1.2-.3-1.6-.8" />
    </svg>
  );
}

function Link(props: any) {
  return <a {...props} rel="noopener noreferrer" />;
}

function ScalpelIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17 3c-2.22 0-3.67.35-5.22 1.4C10.23 5.48 8.47 7.24 7.39 8.33A2.44 2.44 0 0 0 7 10c0 1.1.9 2 2 2 1.45 0 2.39-1.03 3.49-2.13C13.19 9.17 14 7.41 14 5c0-1.1-.9-2-2-2" />
      <path d="m11.73 13.27-1.46 1.46c-.80.8-2 .80-2.80 0L2 9.27 5.27 6 12 12.73" />
      <path d="M22 22 6 6" />
    </svg>
  );
}

function SparklesIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
      <path d="M5 3v4" />
      <path d="M19 17v4" />
      <path d="M3 5h4" />
      <path d="M17 19h4" />
    </svg>
  );
}

function ToothIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 5.5c-1.5-1-2.5-2-3-3 .5 1.5 1 2 2 2.5s2.5.5 4 0c1 .5 2.5 1 3.5.5a5.5 5.5 0 0 1-2.5 3c.5 1.5 2 3.5 2 5.5s-1.5 3-3 3c-1 0-1.5-.5-2-1" />
      <path d="M12 5.5C10.5 4.5 9.5 3.5 9 2.5c.5 1.5 1 2 2 2.5s2.5.5 4 0c1 .5 2.5 1 3.5.5a5.5 5.5 0 0 1-2.5 3c.5 1.5 2 3.5 2 5.5s-1.5 3-3 3c-1 0-1.5-.5-2-1" />
      <path d="M6.5 13.5c0 1.5.5 3 2.5 3s2.5-1.5 2.5-3-1-1.5-2-1.5-3 .5-3 1.5" />
      <path d="M9.5 9c-.5-1-1.5-2-2-3" />
      <path d="M7 16c-1 1-1 3.5-2 5.5" />
    </svg>
  );
}
