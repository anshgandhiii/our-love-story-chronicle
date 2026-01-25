import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { FloatingParticles } from "@/components/FloatingParticles";
import { EnvelopeOpening } from "@/components/EnvelopeOpening";
import { InvitationPopup } from "@/components/InvitationPopup";
import { MainLetter } from "@/components/MainLetter";
import { ScrapbookPages } from "@/components/ScrapbookPages";
import { EventDetailsCard } from "@/components/EventDetailsCard";
import { PolaroidGallery } from "@/components/PolaroidGallery";
import { RSVPForm } from "@/components/RSVPForm";
import { CountdownTimer } from "@/components/CountdownTimer";
import { SurpriseButton } from "@/components/SurpriseButton";
import { CopyLinkButton } from "@/components/CopyLinkButton";
import { Footer } from "@/components/Footer";

const Index = () => {
  const [envelopeOpened, setEnvelopeOpened] = useState(false);
  const [showInvitationPopup, setShowInvitationPopup] = useState(false);
  const [showScrapbook, setShowScrapbook] = useState(false);
  const [showEventDetails, setShowEventDetails] = useState(false);
  const [showRSVP, setShowRSVP] = useState(false);

  const handleEnvelopeOpen = () => {
    setEnvelopeOpened(true);
    // Show invitation popup after envelope opens
    setTimeout(() => {
      setShowInvitationPopup(true);
    }, 600);
  };

  return (
    <div className="min-h-screen paper-texture relative overflow-x-hidden">
      {/* Floating background particles */}
      <FloatingParticles />

      {/* Envelope opening scene */}
      <AnimatePresence>
        {!envelopeOpened && (
          <EnvelopeOpening onOpen={handleEnvelopeOpen} />
        )}
      </AnimatePresence>

      {/* Invitation popup */}
      <InvitationPopup
        isOpen={showInvitationPopup}
        onClose={() => setShowInvitationPopup(false)}
      />

      {/* Main content (visible after envelope opens) */}
      <AnimatePresence>
        {envelopeOpened && (
          <>
            {/* Main letter hero section */}
            <MainLetter
              onReadStory={() => setShowScrapbook(true)}
              onEventDetails={() => setShowEventDetails(true)}
              onRSVP={() => setShowRSVP(true)}
            />

            {/* Countdown timer section */}
            <CountdownTimer />

            {/* Polaroid gallery section */}
            <PolaroidGallery />

            {/* Footer */}
            <Footer />

            {/* Floating action buttons */}
            <SurpriseButton />
            <CopyLinkButton />
          </>
        )}
      </AnimatePresence>

      {/* Modals / Popups */}
      <ScrapbookPages
        isOpen={showScrapbook}
        onClose={() => setShowScrapbook(false)}
      />

      <EventDetailsCard
        isOpen={showEventDetails}
        onClose={() => setShowEventDetails(false)}
      />

      <RSVPForm
        isOpen={showRSVP}
        onClose={() => setShowRSVP(false)}
      />
    </div>
  );
};

export default Index;
