import { VStack, Button, useColorModeValue } from "@chakra-ui/react";
import { useState, useEffect } from "react";

const Sidebar = () => {
  const [activeSection, setActiveSection] = useState(null);

  const scrollToSection = (id) => {
    setActiveSection(id);
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["background", "childhood", "marriage", "death"];
      let currentSection = null;

      for (let section of sections) {
        const element = document.getElementById(section);
        if (element && element.getBoundingClientRect().top <= 100) {
          currentSection = section;
        }
      }

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const activeBg = useColorModeValue("blue.500", "blue.200");
  const inactiveBg = useColorModeValue("gray.200", "gray.700");

  return (
    <VStack spacing={4} position="fixed" right={4} top={8}>
      <Button onClick={() => scrollToSection("background")} bg={activeSection === "background" ? activeBg : inactiveBg}>
        Background
      </Button>
      <Button onClick={() => scrollToSection("childhood")} bg={activeSection === "childhood" ? activeBg : inactiveBg}>
        Childhood
      </Button>
      <Button onClick={() => scrollToSection("marriage")} bg={activeSection === "marriage" ? activeBg : inactiveBg}>
        Marriage
      </Button>
      <Button onClick={() => scrollToSection("death")} bg={activeSection === "death" ? activeBg : inactiveBg}>
        Death
      </Button>
    </VStack>
  );
};

export default Sidebar;
