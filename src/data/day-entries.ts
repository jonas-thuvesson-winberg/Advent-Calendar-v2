export const entries: {
  ytCode: string;
  start: number | null;
  end: number | null;
}[] = [
  // 1
  {
    // katter och kyckling
    ytCode: "7yLxxyzGiko",
    start: null,
    end: null,
  },
  // 2
  {
    // kompisbandet, imse vimse spindel
    ytCode: "CIEQJStNdko",
    start: 5,
    end: null,
  },
  // 3
  {
    // Arne Alligator
    ytCode: "B-RR9wsa12Q",
    start: 4,
    end: null,
  },
  // 4
  {
    // Spindel
    ytCode: "Jle0NdI1PDc",
    start: 5,
    end: null,
  },

  // 5
  {
    // Kompisbandet, hjul på bussen
    ytCode: "YVukNZzzoIo",
    start: 5,
    end: null,
  },
  // 6
  {
    // Snigel
    ytCode: "C1d_aq8Mh6k",
    start: null,
    end: null,
  },
  // 7
  {
    // Kompisbandet, lilla snigel
    ytCode: "gSXqsz0ls2o",
    start: 5,
    end: null,
  },
  // 8
  {
    // Tiptapp
    ytCode: "TCJHC4ojVEw",
    start: 5,
    end: null,
  },
  // 9
  {
    // Kompisbandet, karlsson
    ytCode: "4eB_F1tWNjI",
    start: 5,
    end: null,
  },
  // 10
  {
    // Kalle Anka
    ytCode: "5lDdJOjU92A",
    start: 4,
    end: null,
  },
  // 11
  {
    // Marsvin
    ytCode: "cotkdOCD1eY",
    start: 0,
    end: null,
  },
  // 12
  {
    // Miniröris, jorden runt
    ytCode: "RK_4Iu6C1D4",
    start: 5,
    end: 142,
  },
  // 13
  {
    // Lucia
    ytCode: "h_dOzss9ydk",
    start: 5,
    end: 112,
  },
  // 14
  {
    // pippi
    ytCode: "dCV6Kfde4V4",
    start: 0,
    end: null,
  },
  // 15
  {
    // Snowflake (snögubbe som sjunger)
    ytCode: "tbbKjDjMDok",
    start: 0,
    end: 130,
  },
  // 16
  {
    // Coco-melon, ice skating song
    ytCode: "GLAEX22F9_k",
    start: 0,
    end: 168,
  },
  // 17
  {
    // Babblarnas julvisa
    ytCode: "EOzMcgpQAbg",
    start: 7,
    end: null,
  },
  // 18
  {
    // Kompisbandet, God jul (hakor)
    ytCode: "PxIhUIafrLM",
    start: 182,
    end: 285,
  },
  // 19
  {
    // vi komma, hey kids
    ytCode: "0aYaoVjpegQ",
    start: 6,
    end: 92,
  },
  // 20
  {
    // Tipp tapp, barnplaneten
    ytCode: "IbNF51Uqfic",
    start: 4,
    end: 114,
  },
  // 21
  {
    // Julkula (animerad), ren(?)
    ytCode: "O1C9zOQpKG4",
    start: 12,
    end: 316,
  },
  // 22
  {
    // Olof, frost
    ytCode: "HJEud5DGXJo",
    start: 0,
    end: null,
  },
  // 23
  {
    // santas workshop
    ytCode: "Jm_HUhHKWC0",
    start: 0,
    end: null,
  },
  // 24 (julafton)
  {
    // babblarna, jul (teater)
    ytCode: "ucJq9Ut4YWQ",
    start: 0,
    end: null,
  },
];

export const getTodaysDate = () => {
  // const date = new Date(`2023-12-24`); // for testing
  const date = new Date();
  return date;
};

export const parseEntry = (
  data: {
    ytCode: string;
    start: number | null;
    end: number | null;
  } | null
) => {
  if (data) {
    return data;
  } else {
    return {
      ytCode: null,
      start: null,
      end: null,
    };
  }
};
