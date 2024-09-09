import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, MapPin, Star } from "lucide-react";
import Logo from "../../assets/logo.png";
import Smile from "../../assets/smile.jpg";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col min-h-screen">
      <section className="w-full h-screen  animated-gradient">
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
                care with a gentle touch.
              </p>
            </div>
            <div className="space-x-4">
              <Button onClick={() => navigate("/login")}>
                Book Appointment
              </Button>
            </div>
          </div>
        </div>
      </section>

      <main className="flex-1">
        <section
          id="services"
          className="w-full py-12 md:py-24 lg:py-32 bg-white"
        >
          <div className="container px-4 md:px-6">
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
        <section
          id="about"
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-100"
        >
          <div className="container px-4 md:px-6">
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
                  About Our Clinic
                </h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  At Lily Dental Clinic, we're committed to providing the
                  highest quality dental care in a comfortable and welcoming
                  environment. Our team of experienced professionals uses the
                  latest technology to ensure you receive the best treatment
                  possible.
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
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
              What Our Patients Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "John Doe",
                  comment:
                    "The team at Lily is amazing! They made my dental visit stress-free and comfortable.",
                },
                {
                  name: "Jane Doe",
                  comment:
                    "I'm thrilled with my new smile after getting veneers. The results exceeded my expectations!",
                },
                {
                  name: "The Rock",
                  comment:
                    "The pediatric dentist was so patient with my kids. They actually look forward to their check-ups now!",
                },
              ].map((testimonial, index) => (
                <Card key={index}>
                  <CardContent className="flex flex-col items-center space-y-4 p-6">
                    <Star className="h-8 w-8 text-yellow-400" />
                    <p className="text-center italic">
                      "{testimonial.comment}"
                    </p>
                    <p className="font-semibold">{testimonial.name}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section
          id="contact"
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-100"
        >
          <div className="container px-4 md:px-6">
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
                <h3 className="text-2xl font-bold">Book an Appointment</h3>
                <p className="text-gray-500">
                  Ready to schedule your visit? Use our online booking system or
                  give us a call.
                </p>
                <Button
                  className="w-full sm:w-auto"
                  onClick={() => {
                    navigate("/login");
                  }}
                >
                  Book Online
                </Button>
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

function MolarIcon(props: any) {
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
