import { VStack, Button } from "@chakra-ui/react";

const Sidebar = () => {
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <VStack spacing={4} position="fixed" right={4} top={8}>
      <Button onClick={() => scrollToSection("background")}>Background</Button>
      <Button onClick={() => scrollToSection("childhood")}>Childhood</Button>
      <Button onClick={() => scrollToSection("marriage")}>Marriage</Button>
      <Button onClick={() => scrollToSection("death")}>Death</Button>
    </VStack>
  );
};

export default Sidebar;
