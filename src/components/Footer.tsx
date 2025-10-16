import { Code2, Mail } from "lucide-react";
import { Footer } from "./ui/footer";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import info from "@/app/constants/info";
import link from "@/app/constants/link";

const FooterSection = () => {
  return (
    <div className="w-full">
      <Footer
        logo={<Code2 className="h-10 w-10" />}
        brandName="Vishal Vishwakarma's Portfolio"
        socialLinks={[
          {
            icon: <Mail className="h-5 w-5" />,
            href: 'mailto:vishal.easy11@gmail.com',
            label: "Mail",
          },

          {
            icon: <FaGithub className="h-5 w-5" />,
            href: info.github,
            label: "GitHub",
          },
          {
            icon: <FaLinkedin className="h-5 w-5" />,
            href: info.linkedin,
            label: "Linkedin",
          },
        ]}
        mainLinks={link}
        copyright={{
          text: `© ${new Date().getFullYear()} Vishal Vishwakarma`,
          license: "All rights reserved",
        }}
      />
    </div>
  );
};
export default FooterSection;
