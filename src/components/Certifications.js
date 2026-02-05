// // src/components/Certifications.js
import React from 'react';
import { FaReact , FaJs , FaNodeJs, FaCopyright   } from 'react-icons/fa';
import { VscAzure } from "react-icons/vsc";

const Certifications = () => {




  return (
    <section id="certifications" className="py-16 sm:py-20 lg:py-24 bg-foreground/[0.02]">
      <div className="container text-center">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Certifications</h2>
          <p className="mt-2 text-muted-foreground">Recognized achievements in the field of technology.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">

          {/* Full stack Certification */}
          {/* Item 1 */}
          <div>
            {/* Front Side */}
            <div className="rounded-md border border-border bg-card p-6 shadow-sm cursor-pointer">
              <FaReact   size={40} className="mx-auto mb-3 text-foreground" />
              <h3 className="text-lg font-semibold">Full Stack Developer</h3>
              <p className="text-sm text-muted-foreground">Issued By: Dev-evelopers</p>
              <p className="text-sm text-muted-foreground">October 2025 - January 2025</p>
              <a href="https://credsverse.com/credentials/e7560559-17a1-4e80-8c9b-c942a6c09089" target="_blank" rel="noopener noreferrer" className="inline-block mt-3 text-primary font-medium">View Certificate</a>
            </div>

          </div>

          {/* Js Certification */}

          {/* Item 2 */}
          <div>
            
            {/* Front Side */}
            <div className="rounded-md border border-border bg-card p-6 shadow-sm cursor-pointer">
              <FaJs size={40} className="mx-auto mb-3 text-[#FF9900]" />
              <h3 className="text-lg font-semibold">JavaScript Certificate</h3>
              <p className="text-sm text-muted-foreground">Issued By: Softpro India</p>
              <p className="text-sm text-muted-foreground">May 2024</p>
              <a href="https://drive.google.com/file/d/1FBcASpXPd7jM4VmGIAG3nkAp59Fw76At/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="inline-block mt-3 text-primary font-medium">View Certificate</a>
            </div>

          </div>


          {/* Problem Solving Certification */}

          {/* Item 3 */}
          <div>
            
            {/* Front Side */}
            <div className="rounded-md border border-border bg-card p-6 shadow-sm cursor-pointer">
              <FaCopyright  size={40} className="mx-auto mb-3 text-[#FF9900]" />
              <h3 className="text-lg font-semibold">Problem Solving Certificate</h3>
              <p className="text-sm text-muted-foreground">Issued By: Postmortem-Shala</p>
              <p className="text-sm text-muted-foreground">January 2025</p>
              <a href="https://drive.google.com/file/d/1OzQJYmRpoGq-M9Q1ht9a2_1t0JSMuZSK/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="inline-block mt-3 text-primary font-medium">View Certificate</a>
            </div>

          </div>

         

          {/* MERN Stack  Certification */}
          {/* Item 5 */}
          <div>
            {/* Front Side */}
            <div className="rounded-md border border-border bg-card p-6 shadow-sm cursor-pointer">
              <FaNodeJs  size={40} className="mx-auto mb-3 text-foreground" />
              <h3 className="text-lg font-semibold">Mern Stack Intern</h3>
              <p className="text-sm text-muted-foreground">Issued By: Softpro India</p>
              <p className="text-sm text-muted-foreground">July 2025 - September 2025</p>
              <a href="https://drive.google.com/file/d/1J1iG8a55IULcJIALRkJEPFy70wGGLYPh/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="inline-block mt-3 text-primary font-medium">View Certificate</a>
            </div>

          </div>




        </div>
      </div>
    </section>
  );
};

export default Certifications;
