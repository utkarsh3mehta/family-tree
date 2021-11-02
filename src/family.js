export const ROOT_UID = "spm-19xx";

const somtimehta = ROOT_UID,
  bimlamehta = "bm-19xx",
  sanjeevkumarmehta = "skm-19xx",
  manishashubhramehta = "mm-19xx",
  utkarshmehta = "um-1996",
  kanikamehta = "km-1991",
  neerajmehta = "nm-19xx",
  neetamehta = "ntm-19xx";

export const FAMILY = [
  {
    id: somtimehta,
    name: "Somti Prakash Mehta",
    sex: "M",
    status: "dead",
    DOB: "17 Jan, 19xx",
    DOD: "DD MMM, YYYY",
    marriedTo: bimlamehta,
  },
  {
    id: bimlamehta,
    name: "Bimla Mehta",
    sex: "F",
    status: "active",
    DOB: "DD MMM, YYYY",
    marriedTo: somtimehta,
  },
  {
    id: neerajmehta,
    name: "Neeraj Mehta",
    childOf: [somtimehta, bimlamehta],
    sex: "M",
    status: "active",
    DOB: "DD MMM, 19xx",
    marriedTo: "rm-19xx",
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
    id: utkarshmehta,
    name: "Utkarsh Mehta",
    childOf: [sanjeevkumarmehta, manishashubhramehta],
    sex: "M",
    status: "active",
    DOB: "5 Oct, 1996",
    nickname: "Kush",
  },
  {
    id: kanikamehta,
    name: "Kanika Mehta",
    childOf: [sanjeevkumarmehta, manishashubhramehta],
    sex: "F",
    status: "active",
    DOB: "12 May, 1991",
    nickname: "Kanu",
  },
  {
    id: neetamehta,
    name: "Neeta Mehta",
    childOf: [somtimehta, bimlamehta],
    sex: "F",
    status: "active",
    DOB: "DD MMM, 19xx",
    marriedTo: "sm-19xx",
    nickname: "Neetu",
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
  console.log("find children");
  try {
    return FAMILY.filter((mem) => "childOf" in mem).filter((mem) =>
      mem.childOf.includes(parentid)
    );
  } catch (err) {
    return [];
  }
};

export const FindCoupleChilder = (p1id, p2id) => {
  try {
    return FAMILY.filter((mem) => "childOf" in mem).filter((mem) =>
      mem.childOf.includes(p1id, p2id)
    );
  } catch {
    return [];
  }
};
