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
