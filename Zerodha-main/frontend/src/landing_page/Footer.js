import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa"; // install with: npm install react-icons

function Footer() {
  return (
    <div className="container border-top mt-5 p-5">
      <div className="row ">
        <div className="col">
          <img src="media/logo.svg" style={{ width: "50%" }} alt="Logo" />
          <p className="mt-3 p-2">
            © 2010 - 2025, Zerodha Broking Ltd. All rights reserved.
          </p>
        </div>

        {/* Company Links */}
        <div className="col ">
          <p>Company </p>
          <a href="" className="text-muted" style={{ textDecoration: "none", lineHeight: "1.8" }}>
            About
          </a>
          <br />
          <a href="" className="text-muted" style={{ textDecoration: "none", lineHeight: "1.8" }}>
            Products
          </a>
          <br />
          <a href="" className="text-muted" style={{ textDecoration: "none", lineHeight: "1.8" }}>
            Pricing
          </a>
          <br />
          <a href="" className="text-muted" style={{ textDecoration: "none", lineHeight: "1.8" }}>
            Referral programme
          </a>
          <br />
          <a href="" className="text-muted" style={{ textDecoration: "none", lineHeight: "1.8" }}>
            Careers
          </a>
          <br />
          <a href="" className="text-muted" style={{ textDecoration: "none", lineHeight: "1.8" }}>
            Zerodha.tech
          </a>
          <br />
          <a href="" className="text-muted" style={{ textDecoration: "none", lineHeight: "1.8" }}>
            Open source
          </a>
          <br />
          <a href="" className="text-muted" style={{ textDecoration: "none", lineHeight: "1.8" }}>
            Press & media
          </a>
          <br />
          <a href="" className="text-muted" style={{ textDecoration: "none", lineHeight: "1.8" }}>
            Zerodha Cares (CSR)
          </a>
          <br />
        </div>

        {/* Support Links */}
        <div className="col">
          <p>Support</p>
          <a href="" className="text-muted" style={{ textDecoration: "none", lineHeight: "1.8" }}>
            Contact us
          </a>
          <br />
          <a href="" className="text-muted" style={{ textDecoration: "none", lineHeight: "1.8" }}>
            Support portal
          </a>
          <br />
          <a href="" className="text-muted" style={{ textDecoration: "none", lineHeight: "1.8" }}>
            Z-Connecct blog
          </a>
          <br />
          <a href="" className="text-muted" style={{ textDecoration: "none", lineHeight: "1.8" }}>
            List of charges
          </a>
          <br />
          <a href="" className="text-muted" style={{ textDecoration: "none", lineHeight: "1.8" }}>
            Downloads & resources
          </a>
          <br />
          <a href="" className="text-muted" style={{ textDecoration: "none", lineHeight: "1.8" }}>
            Videos
          </a>
          <br />
          <a href="" className="text-muted" style={{ textDecoration: "none", lineHeight: "1.8" }}>
            Market overview
          </a>
          <br />
          <a href="" className="text-muted" style={{ textDecoration: "none", lineHeight: "1.8" }}>
            How to file a complaint?
          </a>
          <br />
          <a href="" className="text-muted" style={{ textDecoration: "none", lineHeight: "1.8" }}>
            Status of your complaints
          </a>
          <br />
        </div>

        {/* Account Links */}
        <div className="col">
          <p>Account</p>
          <a href="" className="text-muted" style={{ textDecoration: "none", lineHeight: "1.8" }}>
            Open an account
          </a>
          <br />
          <a href="" className="text-muted" style={{ textDecoration: "none", lineHeight: "1.8" }}>
            Fund transfer
          </a>
          <br />
        </div>
      </div>

      {/* Legal Info */}
      <div
        className="mt-5 fs-8 p-5 text-muted"
        style={{ fontSize: "12px", color: "GrayText" }}
      >
        <p>
          Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration
          no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha
          Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity Trading
          through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001 – SEBI
          Registration no.: INZ000038238 Registered Address: Zerodha Broking
          Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public
          School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For
          any complaints pertaining to securities broking please write to
          complaints@zerodha.com, for DP related to dp@zerodha.com. Please
          ensure you carefully read the Risk Disclosure Document as prescribed
          by SEBI | ICF{" "}
        </p>
        <p>
          Procedure to file a complaint on SEBI SCORES: Register on SCORES
          portal. Mandatory details for filing complaints on SCORES: Name, PAN,
          Address, Mobile Number, E-mail ID. Benefits: Effective Communication,
          Speedy redressal of the grievances{" "}
        </p>
        <p>Smart Online Dispute Resolution | Grievances Redressal Mechanism</p>
        <p>
          Investments in securities market are subject to market risks; read all
          the related documents carefully before investing.{" "}
        </p>
        <p>
          Attention investors: 1) Stock brokers can accept securities as margins
          from clients only by way of pledge in the depository system w.e.f
          September 01, 2020. 2) Update your e-mail and phone number with your
          stock broker / depository participant and receive OTP directly from
          depository on your e-mail and/or mobile number to create pledge. 3)
          Check your securities / MF / bonds in the consolidated account
          statement issued by NSDL/CDSL every month.{" "}
        </p>
        <p className="mb-5 ">
          "Prevent unauthorised transactions in your account. Update your mobile
          numbers/email IDs with your stock brokers. Receive information of your
          transactions directly from Exchange on your mobile/email at the end of
          the day. Issued in the interest of investors. KYC is one time exercise
          while dealing in securities markets - once KYC is done through a SEBI
          registered intermediary (broker, DP, Mutual Fund etc.), you need not
          undergo the same process again when you approach another
          intermediary." Dear Investor, if you are subscribing to an IPO, there
          is no need to issue a cheque. Please write the Bank account number and
          sign the IPO application form to authorize your bank to make payment
          in case of allotment. In case of non allotment the funds will remain
          in your bank account. As a business we don't give stock tips, and have
          not authorized anyone to trade on behalf of others. If you find anyone
          claiming to be part of Zerodha and offering such services, please
          create a ticket here.{" "}
        </p>

        <div className="row mx-5 mt-5 mb-10">
          <div className="col">NSE </div>
          <div className="col">BSE</div>
          <div className="col">MCX </div>
          <div className="col">Terms & conditions </div>
          <div className="col">Policies & procedures </div>
          <div className="col">Privacy policy</div>
          <div className="col">Disclosure </div>
          <div className="col">For investor's attention </div>
          <div className="col">Investor charter </div>
        </div>
      </div>

      {/* Custom Name + Social Links */}
      <div className="text-center mt-4">
        <p className="mb-2">Developed by <strong>Gayatri Patil</strong></p>
        <a
          href="https://github.com/Gayatrip-26/Zerodha"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-2"
          style={{ color: "black", fontSize: "22px" }}
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/gayatri-patil-524620283/"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-2"
          style={{ color: "#0A66C2", fontSize: "22px" }}
        >
          <FaLinkedin />
        </a>
      </div>
    </div>
  );
}

export default Footer;
