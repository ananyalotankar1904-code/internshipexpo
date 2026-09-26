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
  "GradGuide (Your Study Abroad Mentor by Computrain)": { mode: "Hybrid (1st round online - Then offline)", type: "On-Site" },
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
  "Yogi Software": { mode: "Offline", type: "Onsite" },
  "Choira Musictech Pvt. Ltd.": { mode: "Offline", type: "Onsite" }
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

export const COMPANY_JD_LINKS = {
  // CSV 1: Individual JDs
  "Creatify": null,
  "CAD CAM GALAXY": null,
  "DATEN&WISSEN": "https://drive.google.com/file/d/116Mzi54Jtj9gSS5KcExWke6rIK59x0Tj/view?usp=drive_link",
  "AdHive & Rundown Creative": "https://drive.google.com/file/d/1bbLv4IuUkcss1-OiW3wgDz0xWO_8FzqO/view?usp=drive_web",
  "AVPSTACK TECHNOLOGIES": "https://drive.google.com/file/d/1RjR1G7k0MhnW642VOwxHGt45Hv9aeGjF/view?usp=drive_web",
  "Axentra": "https://drive.google.com/file/d/1S5zNTnK-mQksXWWMFm3hPWbsEcEcAcVc/view?usp=drive_web",
  "Beeyond": "https://drive.google.com/file/d/1_987hcy7SnzoJfDerUsGXBYpoVYLHb5v/view?usp=drive_web",
  "Cognify Solutions": "https://drive.google.com/file/d/1bLOwopGmxu2HA-f5hRCehZC8XidmOWQJ/view?usp=drive_web",
  "Decagon Software Pvt. Ltd.": "https://drive.google.com/file/d/1H1Xabdm-joAf7i9Qof4Aui0x0Jk_H89B/view?usp=drive_web",
  "Digital Dose": "https://drive.google.com/file/d/1DV3LI9LqMBZcuHuixAzVPJ5W1fL89ijm/view?usp=drive_web",
  "GDA Games": "https://drive.google.com/file/d/1bAMNQr85RkV5S8nubQWKGMQvOBXpRqM_/view?usp=drive_web",
  "GradGuide (Your Study Abroad Mentor by Computrain)": "https://drive.google.com/file/d/1MJcgNdwDq53iP0zfA301b87nuDqiYfSQ/view?usp=sharing",
  "HNT FOODS": "https://drive.google.com/file/d/1UIZiHbCnpnTPX8Vi3aaOuTM4oc0sCX6W/view?usp=drive_web",
  "Search India": "https://drive.google.com/file/d/1fLOzHJv0VsQ_hsVbHM-GqFIM47e-VsEg/view?usp=drive_web",
  "Immibook Pty Ltd": "https://drive.google.com/file/d/1CnAr4JQ0g7Vrgxd8wgVK0ElAGlS0cgfD/view?usp=drive_web",
  "Insiverse Media": "https://drive.google.com/file/d/1UjnALHRDYfyBHefH5IJ9jAVYYa9DZo_f/view?usp=drive_web",
  "Kreare": "https://drive.google.com/file/d/1onUyDPQ8gspXazF3PjgFYI4r-y-WzEKi/view?usp=drive_web",
  "LiveTech India": "https://drive.google.com/file/d/1qWnNlClVLpLle0bxTbb8D5630PbLp92_/view?usp=drive_web",
  "Nagarkot Forwarders Pvt Ltd": "https://drive.google.com/file/d/1-7QEZr4jjIWiTCl4phXmJqzzOF1FAM5C/view?usp=drive_web",
  "Pratishna Engineers Limited": "https://drive.google.com/file/d/1P2DtYgiUta5ooLANmA9P8RJNpLiwEfM_/view?usp=drive_web",
  "Pro CADCAM Services": "https://drive.google.com/file/d/1vRAPhwVUR1o0VdaTcqZvnkgdJA7K-i7T/view?usp=drive_web",
  "Scad Technologies": "https://drive.google.com/file/d/1o_9K4Pq7lPx4WYWkXsnbmVTW_xDBSEYi/view?usp=drive_web",
  "Scoreazy": "https://drive.google.com/file/d/1Nqqvppyz0j61fb7c3NR0ffJfGcArnkw4/view?usp=drive_web",
  "STARCAD Design Solutions": "https://drive.google.com/file/d/1KVlf4i4J8VjCVBhRapUr4TEl515WwY5T/view?usp=drive_web",
  "The Kaash Store": "https://drive.google.com/file/d/1VxEzqowWREc-iRF4RgbRAXNnRB-DgyJD/view?usp=drive_web",
  "THE xDEVS": "https://drive.google.com/file/d/1R_pYWvL_I0MzA-xt4OSzxoteqIdXE7sK/view?usp=drive_web",
  "Virtue Crennovative Solutions (VCS)": "https://drive.google.com/file/d/1he9EEKHks7x8umK0AZROErr3y7U4sdIs/view?usp=drive_web",
  "Yogi Software": "https://drive.google.com/file/d/1XL2fjHNhPq4ax-jaiyfxdiyE7tELuHlX/view?usp=drive_web",
  
  // CSV 2: Folders
  "1Accord": "https://drive.google.com/drive/folders/1T_hyhMBYSaxv_opZrdyl0mlkTvUQO4P0?usp=drive_link",
  "Choira Musictech Pvt. Ltd.": "https://drive.google.com/drive/folders/1T7WFpSaPGIxoqYUV8dfZHseUmIGk6U20",
  "Gyansthan Education Services LLP": "https://drive.google.com/drive/folders/1T7WFpSaPGIxoqYUV8dfZHseUmIGk6U20",
  "Ideafactor Design": "https://drive.google.com/drive/folders/1T7WFpSaPGIxoqYUV8dfZHseUmIGk6U20",
  "MIDASX": "https://drive.google.com/drive/folders/1T7WFpSaPGIxoqYUV8dfZHseUmIGk6U20",
  "STECHGROW INTELLIGENCE AI": "https://drive.google.com/drive/folders/1T7WFpSaPGIxoqYUV8dfZHseUmIGk6U20",
  "Thermolabs": "https://drive.google.com/drive/folders/1T7WFpSaPGIxoqYUV8dfZHseUmIGk6U20",
  "TrafficHQ Digital Media LLP": "https://drive.google.com/drive/folders/1T7WFpSaPGIxoqYUV8dfZHseUmIGk6U20"
};

export const getJdLinkForCompany = (companyName, originalLink) => {
  if (COMPANY_JD_LINKS[companyName] === null) return null;
  return COMPANY_JD_LINKS[companyName] || originalLink;
};
