export interface LinkTypes {
  label: string;
  link: string;
}

export interface ContactDetailsType {
  country: string;
  address: string[];
  phone: string;
}

export const companyDetails: ContactDetailsType[] = [
  {
    country: "Nepal",
    address: ["Lal Colony Marga"],
    phone: "+977 9801-879-217",
  },
  {
    country: "Japan",
    address: [
      "Nishi ShinjukuK-1 Bld 4F, 7-2-6, Nishi-Shinjuku",
      "Shinjuku-Ku, Tokyo, 160-0023",
    ],
    phone: " +81 25 788 0665",
  },
];

export const footerServiceLinks: LinkTypes[] = [
  { label: "Developers", link: "/developers" },
  { label: "Expertise", link: "/expertise" },
  { label: "Why Hire Us?", link: "/reasons" },
  { label: "Strenghts", link: "/strengths" },
  { label: "Our Services", link: "/services" },
];
