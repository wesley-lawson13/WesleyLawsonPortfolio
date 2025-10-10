import { MdOutlineEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const contactInfo = [
  { type: "Email", value: "wesleylawson13@gmail.com", icon: MdOutlineEmail },
  { type: "Phone Number", value: "+1 (781) 956-0375", icon: FaPhone },
  { type: "Location", value: "Boston, MA", icon: FaLocationDot },
];

export const ContactSection = () => {
  return (
    <section
      id="contact"
      className="py-15 px-4 relative flex flex-col items-center justify-center bg-background"
    >
      <div className="max-w-3xl w-full text-center z-10">
        <h2 className="text-4xl font-bold text-dark mb-4">
          Get In <span className="text-blue">Touch</span>
        </h2>
        <p className="text-lg text-dark font-normal mb-12">
          Feel Free to Reach Out via Email, Phone, or Connect in Person.
        </p>

        <div className="flex flex-col gap-8 items-center mb-15">
          {contactInfo.map((info, key) => (
            <div
              key={key}
              className="flex items-center gap-6 bg-muted/30 border border-blue/20 rounded-2xl px-6 py-4 shadow-sm hover:scale-101 hover:shadow-md transition-shadow duration-300 w-full max-w-md"
            >
              <div className="flex items-center justify-center bg-blue/10 h-14 w-14 rounded-xl">
                <info.icon size={28} className="text-dark" />
              </div>
              <div className="text-left">
                <h5 className="text-lg font-semibold text-dark">
                  {info.type}
                </h5>
                <p className="text-blue text-base font-light">{info.value}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mx-auto">
          <p className="text-dark font-normal"><i>Thank you for checking out my portfolio website! Be on the lookout for more projects coming soon.</i></p>
        </div>
      </div>
    </section>
  );
};
