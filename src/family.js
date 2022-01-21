export const ROOT_UID = "spm-19xx";

const somtimehta = ROOT_UID,
  bimlamehta = "bm-19xx",
  neerajmehta = "nm-19xx",
  sangeetamehta = "sg-19xx",
  rumamehta = "rm-198x",
  anoopramachandran = "an-198x",
  pranavramachandran = "pr-201x",
  devanshmehta = "dv-1989",
  rakshitamehta = "rk-199x",
  sanjeevkumarmehta = "skm-19xx",
  manishashubhramehta = "mm-19xx",
  kanikamehta = "km-1991",
  adityapushkarna = "ad-198x",
  adikapushkarna = "ad-2021",
  utkarshmehta = "um-1996",
  bhoorimehta = "bh-2020",
  damrumehta = "dm-2021",
  pradeepmehta = "pr-19xx",
  chandrikamehta = "ch-19xx",
  irikamehta = "ir-199x",
  ishitmehta = "is-1999",
  neetamehta = "ntm-19xx",
  ashoksharma = "as-19xx",
  akshaysharma = "ak-1992",
  niharikasharma = "nh-199x",
  arlosharma = "ar-201x",
  udishasharma = "ud-1997",
  manojmehta = "mn-19xx",
  manishamehta = "ma-19xx",
  gaurangmehta = "gu-2000",
  gaurimehta = "gu-200x",
  zaramehta = "zr-200x";

export const FAMILY = [
  {
    id: somtimehta,
    name: "Somti Prakash Mehta",
    sex: "M",
    status: "expired",
    DOB: "17 Jan, 19xx",
    DOD: "DD MMM, YYYY",
    marriedTo: bimlamehta,
  },
  {
    id: bimlamehta,
    name: "Bimla Mehta",
    sex: "F",
    status: "active",
    DOB: "02 Feb, YYYY",
    marriedTo: somtimehta,
  },
  {
    id: neerajmehta,
    name: "Neeraj Mehta",
    childOf: [somtimehta, bimlamehta],
    sex: "M",
    status: "active",
    DOB: "10 Nov, 19xx",
    marriedTo: sangeetamehta
  },
  {
    id: sangeetamehta,
    name: 'Sangeeta Mehta',
    sex: 'F',
    status: 'active',
    DOB: "16 Nov",
    marriedTo: neerajmehta,
  },
  {
    id: rumamehta,
    name: 'Ruma Mehta',
    sex: 'F',
    status: 'active',
    DOB: "13 Sep",
    marriedTo: anoopramachandran,
    childOf: [neerajmehta, sangeetamehta],
  },
  {
    id: anoopramachandran,
    name: 'Anoop Ramachandran',
    sex: 'M',
    status: 'active',
    DOB: "23 Nov",
    marriedTo: rumamehta,
  },
  {
    id: pranavramachandran,
    name: 'Pranav Ramachandran',
    sex: 'M',
    status: 'active',
    DOB: "5 May",
    childOf: [rumamehta, anoopramachandran],
  },
  {
    id: devanshmehta,
    name: 'Devansha Mehta',
    sex: 'M',
    status: 'active',
    DOB: "9 Dec",
    marriedTo: rakshitamehta,
    childOf: [neerajmehta, sangeetamehta],
    nickname: "Subhi"
  },
  {
    id: rakshitamehta,
    name: 'Rakshita Mehta',
    sex: 'F',
    status: 'active',
    DOB: "29 Sep",
    marriedTo: devanshmehta,
  },
  {
    id: sanjeevkumarmehta,
    name: "Sanjeev Kumar Mehta",
    childOf: [somtimehta, bimlamehta],
    sex: "M",
    status: "active",
    DOB: "18 Aug, 19xx",
    marriedTo: manishashubhramehta,
    nickname: "Sanju",
  },
  {
    id: manishashubhramehta,
    name: "Manisha Mehta",
    sex: "F",
    status: "active",
    DOB: "15 Nov, 19xx",
    marriedTo: sanjeevkumarmehta,
    nickname: "Shubhra",
  },
  {
    id: kanikamehta,
    name: "Kanika Mehta",
    childOf: [sanjeevkumarmehta, manishashubhramehta],
    sex: "F",
    status: "active",
    DOB: "12 May, 1991",
    nickname: "Kanu",
    marriedTo: adityapushkarna,
  },
  {
    id: adityapushkarna,
    name: 'Aditya Pushkarna',
    sex: 'M',
    status: 'active',
    DOB: "17 May",
    marriedTo: kanikamehta,
  },
  {
    id: adikapushkarna,
    name: "Adika Pushkarna",
    childOf: [kanikamehta, adityapushkarna],
    sex: "F",
    status: "active",
    DOB: "13 Aug",
    nickname: "Bantu",
  },
  {
    id: utkarshmehta,
    name: "Utkarsh Mehta",
    childOf: [sanjeevkumarmehta, manishashubhramehta],
    sex: "M",
    status: "active",
    DOB: "5 Oct, 1996",
    nickname: "Kush",
  },
  {
    id: bhoorimehta,
    name: "Bhoori Mehta",
    childOf: [utkarshmehta],
    sex: "F",
    status: "expired",
    DOB: "5 Sept, 2020",
    DOD: "11 Oct, 2021",
    nickname: "Bhuru"
  },
  {
    id: damrumehta,
    name: "Damru Mehta",
    childOf: [utkarshmehta],
    sex: "M",
    status: "active",
    DOB: "1 Aug, 2021",
    nickname: "Babi",
  },
  {
    id: pradeepmehta,
    name: "Pradeep Mehta",
    childOf: [somtimehta, bimlamehta],
    sex: "M",
    status: "active",
    DOB: "11 Oct",
    marriedTo: chandrikamehta,
  },
  {
    id: chandrikamehta,
    name: "Chandrika Mehta",
    sex: "F",
    status: "active",
    DOB: "23 Sep",
    nickname: "Chinu",
    marriedTo: pradeepmehta,
  },
  {
    id: irikamehta,
    name: "Irika Mehta",
    childOf: [pradeepmehta, chandrikamehta],
    sex: "F",
    status: "active",
    DOB: "7 May",
    nickname: "chinki",
  },
  {
    id: ishitmehta,
    name: "Ishit Mehta",
    childOf: [pradeepmehta, chandrikamehta],
    sex: "M",
    status: "active",
    DOB: "1 Mar",
    nickname: "Joey",
  },
  {
    id: neetamehta,
    name: "Neeta Sharma",
    childOf: [somtimehta, bimlamehta],
    sex: "F",
    status: "active",
    DOB: "DD MMM, 19xx",
    nickname: "Neetu",
    marriedTo: ashoksharma
  },
  {
    id: ashoksharma,
    name: "Ashok Sharma",
    sex: "M",
    status: "active",
    DOB: "18 Apr",
    marriedTo: neetamehta,
  },
  {
    id: akshaysharma,
    name: "Akshay Sharma",
    childOf: [neetamehta, ashoksharma],
    sex: "M",
    status: "active",
    DOB: "17 Mar",
    nickname: "Krishan",
    marriedTo: niharikasharma,
  },
  {
    id: niharikasharma,
    name: "Niharika Sharma",
    sex: "F",
    status: "active",
    DOB: "3 Sep",
    marriedTo: akshaysharma,
  },
  {
    id: arlosharma,
    name: "Arlo Shamra",
    childOf: [akshaysharma, niharikasharma],
    sex: "M",
    status: "active",
    DOB: "1 Sep",
  },
  {
    id: udishasharma,
    name: "Udisha Sharma",
    childOf: [neetamehta, ashoksharma],
    sex: "F",
    status: "active",
    DOB: "20 Oct",
  },
  {
    id: manojmehta,
    name: "Manoj Mehta",
    childOf: [somtimehta, bimlamehta],
    sex: "M",
    status: "active",
    DOB: "1 May",
    marriedTo: manishamehta,
  },
  {
    id: manishamehta,
    name: "Manisha Mehta",
    sex: "F",
    status: "active",
    DOB: "16 Sep",
    marriedTo: manojmehta,
  },
  {
    id: gaurangmehta,
    name: "Gaurang Mehta",
    childOf: [manojmehta, manishamehta],
    sex: "M",
    status: "active",
    DOB: "20 May",
    nickname: "Gaurangi",
  },
  {
    id: gaurimehta,
    name: "Gauri Mehta",
    childOf: [manojmehta, manishamehta],
    sex: "F",
    status: "active",
    DOB: "25 Oct",
    nickname: "Gauru",
  },
  {
    id: zaramehta,
    name: "Zara Mehta",
    childOf: [manojmehta, manishamehta],
    sex: "F",
    status: "active",
    DOB: "18 Jan",
    nickname: "Zorro",
  },
];

export const FindMember = (id) => {
  try {
    return FAMILY.find((mem) => mem.id === id);
  } catch {
    return {};
  }
};

export const FindParents = (id) => {
  try {
    return FAMILY.find((mem) => mem.id === id)["childOf"].map((parid) =>
      FAMILY.find((mem) => mem.id === parid)
    );
  } catch {
    return [];
  }
};

export const FindChildren = (parentid) => {
  try {
    return FAMILY.filter((mem) => "childOf" in mem).filter((mem) =>
      mem.childOf.includes(parentid)
    );
  } catch (err) {
    return [];
  }
};

export const FindCoupleChildren = (p1id, p2id) => {
  try {
    return FAMILY.filter((mem) => "childOf" in mem).filter((mem) =>
      mem.childOf.includes(p1id, p2id)
    );
  } catch {
    return [];
  }
};
