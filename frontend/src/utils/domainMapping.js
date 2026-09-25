export const DOMAIN_MAP = {
  "Information Technology & Software Engineering": ["Yogi Software", "THE xDEVS", "Decagon Software Pvt. Ltd.", "AVPSTACK TECHNOLOGIES", "Virtue Crennovative Solutions", "1Accord", "Axentra"],
  "Artificial Intelligence & Data Science": ["DATEN&WISSEN", "STECHGROW INTELLIGENCE AI", "Cognify Solutions"],
  "Engineering, Manufacturing & CAD/CAM": ["Pratishna Engineers Limited", "Thermolabs", "Pro CADCAM Services", "STARCAD Design Solutions", "Scad Technologies"],
  "Digital Marketing, Media & Advertising": ["TrafficHQ Digital Media LLP", "Digital Dose", "Search India", "AdHive & Rundown Creative", "Insiverse Media", "Beeyond"],
  "EdTech & Education Consultancy": ["Gyansthan Education Services LLP", "Immibook Pty Ltd", "Scoreazy", "GradGuide"],
  "Creative Design & UI/UX": ["Ideafactor Design", "Creatify", "Kreare"],
  "E-Commerce, Retail & FMCG": ["HNT FOODS", "The Kaash Store"],
  "Specialized Tech (Gaming & MusicTech)": ["GDA Games", "Choira Musictech Pvt. Ltd."],
  "Logistics & Supply Chain": ["Nagarkot Forwarders Pvt Ltd"]
};

export const getDomainForCompany = (companyName, fallbackDomain = "") => {
  const foundDomain = Object.keys(DOMAIN_MAP).find(domain => 
    DOMAIN_MAP[domain].includes(companyName)
  );
  return foundDomain || fallbackDomain;
};
