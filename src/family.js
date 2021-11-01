export const ROOT_UID = "spm-19xx";
export const FAMILY = [
  {
    uid: ROOT_UID,
    name: "Somti Prakash Mehta",
    sex: "M",
    status: "dead",
    DOB: "17 Jan, 19xx",
    DOD: "DD MMM, YYYY",
    marriedTo: "bm-19xx",
  },
  {
    uid: "bm-19xx",
    name: "Bimla Mehta",
    sex: "F",
    status: "active",
    DOB: "DD MMM, YYYY",
    marriedTo: "spm-19xx",
  },
  {
    uid: "nm-19xx",
    name: "Neeraj Mehta",
    childOf: "spm-19xx",
    sex: "M",
    status: "active",
    DOB: "DD MMM, 19xx",
    marriedTo: "rm-19xx",
  },
  {
    uid: "skm-19xx",
    name: "Sanjeev Kumar Mehta",
    childOf: "spm-19xx",
    sex: "M",
    status: "active",
    DOB: "18 Aug, 19xx",
    marriedTo: "mm-19xx",
    nickname: "Sanju",
  },
  {
    uid: "mm-19xx",
    name: "Manisha Mehta",
    sex: "F",
    status: "active",
    DOB: "15 Nov, 19xx",
    marriedTo: "skm-19xx",
    nickname: "Shubhra",
  },
  {
    uid: "um-1996",
    name: "Utkarsh Mehta",
    childOf: "skm-19xx",
    sex: "M",
    status: "active",
    DOB: "5 Oct, 1996",
    nickname: "Kush",
  },
  {
    uid: "km-1991",
    name: "Kanika Mehta",
    childOf: "skm-19xx",
    sex: "F",
    status: "active",
    DOB: "12 May, 1991",
    nickname: "Kanu",
  },
  {
    uid: "ntm-19xx",
    name: "Neeta Mehta",
    childOf: "spm-19xx",
    sex: "F",
    status: "active",
    DOB: "DD MMM, 19xx",
    marriedTo: "sm-19xx",
    nickname: "Neetu",
  },
];

export const FindFamily = (uid) => FAMILY.find((mem) => mem.uid === uid);

export const FindChildren = (parentuid) => {
  let parent = FAMILY.find((mem) => mem.uid === parentuid);
  if (parent["sex"] === "F") {
    return FAMILY.filter((mem) => mem.childOf === parent["marriedTo"]);
  } else {
    return FAMILY.filter((mem) => mem.childOf === parentuid);
  }
};

export const FindCoupleChildren = (uid1, uid2) => {
  let children = [];
  children = [...FAMILY.filter((mem) => mem.childOf === uid1)];
  FAMILY.filter((mem) => mem.childOf === uid2).forEach((child) => {
    if (!children.includes(child)) {
      children.push(child);
    }
  });
  return children;
};
