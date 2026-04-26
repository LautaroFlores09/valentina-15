import { useState } from "react";
import Header from "../components/Header";
import Body from "../components/Body";
import Footer from "../components/Footer";
import WaitingPage from "../components/WaitingPage";

export default function Invitacion() {
  const [isWaiting, setIsWaiting] = useState(true);

  const handleOpenInvitation = () => {
    setIsWaiting(false);
    // Scroll al inicio de la página cuando se abre la invitación
    window.scrollTo(0, 0);
  };

  return (
    <>
      <WaitingPage onOpen={handleOpenInvitation} isVisible={isWaiting} />
      {!isWaiting && (
        <>
          <Header />
          <Body />
          <Footer />
        </>
      )}
    </>
  );
}
