import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { FloatingParticles } from "@/components/FloatingParticles";
import { EnvelopeOpening } from "@/components/EnvelopeOpening";
import { InvitationPopup } from "@/components/InvitationPopup";
import { MainLetter } from "@/components/MainLetter";
import { ScrapbookPages } from "@/components/ScrapbookPages";
import { EventDetailsCard } from "@/components/EventDetailsCard";
import { PolaroidGallery } from "@/components/PolaroidGallery";

import { SurpriseButton } from "@/components/SurpriseButton";
import { CopyLinkButton } from "@/components/CopyLinkButton";
import { Footer } from "@/components/Footer";
import { MusicToggle } from "@/components/MusicToggle";

const Index = () => {
  const [envelopeOpened, setEnvelopeOpened] = useState(false);
  const [showInvitationPopup, setShowInvitationPopup] = useState(false);
  const [showScrapbook, setShowScrapbook] = useState(false);
  const [showEventDetails, setShowEventDetails] = useState(false);

  const handleEnvelopeOpen = () => {
    setEnvelopeOpened(true);
    // Show invitation popup after envelope opens
    setTimeout(() => {
      setShowInvitationPopup(true);
    }, 600);
  };

  return (
    <div className="min-h-screen paper-texture relative overflow-x-hidden">
      {/* Music toggle */}
      <MusicToggle />

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
            />


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
    </div>
  );
};

export default Index;
