export const COMPANY_EXTRA_INFO = {
  "1Accord": { mode: "Online", type: "Hybrid / Onsite" },
  "AdHive & Rundown Creative": { mode: "Online", type: "Remote / Work from home" },
  "AVPSTACK TECHNOLOGIES": { mode: "Offline", type: "Onsite" },
  "Axentra": { mode: "Online", type: "Onsite / Remote / Work from home" },
  "Beeyond": { mode: "Offline", type: "Onsite" },
  "CAD CAM GALAXY": { mode: "Online", type: "Onsite" },
  "Cognify Solutions": { mode: "Offline", type: "Remote / Work from home" },
  "Creatify": { mode: "Offline", type: "Onsite" },
  "DATEN&WISSEN": { mode: "Hybrid (1st round online, then offline)", type: "Role Specific (See Details)" },
  "Decagon Software Pvt. Ltd.": { mode: "Offline", type: "Onsite" },
  "Digital Dose": { mode: "Online", type: "Remote / Work from home" },
  "GDA Games": { mode: "Online", type: "Remote / Work from home" },
  "GradGuide (Your Study Abroad Mentor by Computrain)": { mode: "Hybrid (1st round online, then offline)", type: "Onsite" },
  "Gyansthan Education Services LLP": { mode: "Offline", type: "Onsite" },
  "HNT FOODS": { mode: "Online", type: "Onsite" },
  "Ideafactor Design": { mode: "Offline", type: "Onsite" },
  "Immibook Pty Ltd": { mode: "Online", type: "Remote / Work from home" },
  "Insiverse Media": { mode: "Offline", type: "Onsite" },
  "Kreare": { mode: "Online", type: "Onsite" },
  "LiveTech India": { mode: "Online", type: "Onsite" },
  "MIDASX": { mode: "Online", type: "Onsite / Remote / Work from home / Hybrid" },
  "Nagarkot Forwarders Pvt Ltd": { mode: "Offline", type: "Onsite" },
  "Pratishna Engineers Limited": { mode: "Offline", type: "Onsite" },
  "Pro CADCAM Services": { mode: "Offline", type: "Onsite" },
  "Scad Technologies": { mode: "Offline", type: "Onsite" },
  "Scoreazy": { mode: "Offline", type: "Onsite" },
  "Search India": { mode: "Offline", type: "Onsite" },
  "STARCAD Design Solutions": { mode: "Offline", type: "Onsite" },
  "STECHGROW INTELLIGENCE AI": { mode: "Offline", type: "Remote / Work from home" },
  "The Kaash Store": { mode: "Online", type: "Remote / Work from home" },
  "Thermolabs": { mode: "Offline", type: "Role Specific (See Details)" },
  "TrafficHQ Digital Media LLP": { mode: "Online", type: "Onsite" },
  "Virtue Crennovative Solutions (VCS)": { mode: "Offline", type: "Remote / Work from home / Hybrid / Onsite" },
  "THE xDEVS": { mode: "Offline", type: "Remote / Work from home / Onsite / Hybrid" },
  "Yogi Software": { mode: "Offline", type: "Onsite" }
};

export const getExtraInfoForCompany = (companyName, positionTitle) => {
  const info = COMPANY_EXTRA_INFO[companyName] || { mode: "Not Specified", type: "Not Specified" };
  
  let finalType = info.type;

  // Handle Role Specific overrides
  if (companyName === "DATEN&WISSEN") {
    if (positionTitle.toLowerCase().includes("data science intern (students)")) finalType = "Hybrid";
    else finalType = "Onsite";
  }
  
  if (companyName === "Thermolabs") {
    if (positionTitle.toLowerCase().includes("marketing")) finalType = "Remote / Work from home";
    else finalType = "Onsite";
  }

  return { mode: info.mode, type: finalType };
};
