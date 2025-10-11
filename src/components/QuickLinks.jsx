// components/QuickLinks.jsx
const QuickLinks = () => {
  const links = [
    { icon: "graduation-cap", text: "CASERP", link: "http://mgmerp.ac.in/", target: "_blank" },
    { icon: "book-open", text: "OBE", link: "https://www.vmedulife.com/public/auth/#/login/mgm-cen-nanded", target: "_blank" },
    { icon: "envelope", text: "Mail", link: "https://accounts.google.com/ServiceLogin?service=mail&continue=https://mail.google.com/mail/", target: "_blank" },
    { icon: "university", text: "DBATU", link: "https://dbatu.ac.in/", target: "_blank" },
    { icon: "file-alt", text: "IEEE", link: "http://www.ieeexplore.ieee.org/xpl/periodicals.jsp", target: "_blank" },
    { icon: "video", text: "NPTEL", link: "http://nptel.ac.in/", target: "_blank" },
    { icon: "brain", text: "Skill Test", link: "https://www.youth4work.com/onlinetalenttest", target: "_blank" },
    { icon: "newspaper", text: "News", link: "viewnews.html" },
    { icon: "file-contract", text: "Tender", link: "download/tender-notice.html" },
    { icon: "hand-holding-usd", text: "Vidyalaxmi", link: "https://mgmcen.ac.in/pdf/Vidyalaxmi_website%20(2).pdf", target: "_blank" },
    { icon: "flag", text: "Azadi Ka Amrit Mahotsav", link: "#", target: "_blank" } 
  ];

  return (
    <section className="py-10 bg-blue-900 text-white">
      <div className="mx-auto max-w-6xl"> 
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 relative px-4"> 
          Quick Links
          <span className="absolute bottom-[-0.75rem] left-1/2 transform -translate-x-1/2 w-20 h-1 bg-yellow-500 rounded"></span>
        </h2>
        
        {/* 6 columns on first row, 5 columns on second row */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2 px-4">
          {links.slice(0, 6).map((link, index) => (
            <a 
              key={index}
              href={link.link} 
              target={link.target || "_self"}
              rel={link.target ? "noopener noreferrer" : ""}
              className="bg-white text-blue-900 p-3 rounded-lg text-center transition-all hover:bg-yellow-500 hover:-translate-y-1 hover:shadow-lg group min-h-[80px] flex flex-col items-center justify-center"
            >
              <i className={`fas fa-${link.icon} text-xl mb-1 group-hover:text-white`}></i>
              <span className="text-xs font-semibold group-hover:text-white leading-tight">{link.text}</span>
            </a>
          ))}
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-2 px-4 mt-3">
          {links.slice(6).map((link, index) => (
            <a 
              key={index + 6}
              href={link.link} 
              target={link.target || "_self"}
              rel={link.target ? "noopener noreferrer" : ""}
              className="bg-white text-blue-900 p-3 rounded-lg text-center transition-all hover:bg-yellow-500 hover:-translate-y-1 hover:shadow-lg group min-h-[80px] flex flex-col items-center justify-center"
            >
              <i className={`fas fa-${link.icon} text-xl mb-1 group-hover:text-white`}></i>
              <span className="text-xs font-semibold group-hover:text-white leading-tight">{link.text}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickLinks;