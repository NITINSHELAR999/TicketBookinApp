export const initialState = {
    film_data: [{ id: 1, image: "https://cdn.kalingatv.com/wp-content/uploads/2021/01/kgf-chapter-2-Youtube.jpg" },
    { id: 2, image: "https://www.theindianwire.com/wp-content/uploads/2022/02/BACHCHAN-PANDEY.jpg" },
    { id: 3, image: "https://static-koimoi.akamaized.net/wp-content/new-galleries/2022/03/rrr-box-office-overseas-ss-rajamoulis-magnum-opus-starring-ram-charan-jr-ntr-roars-as-it-grosses-rs-122-crore-in-just-3-days-001.jpg" }
    ],

    RecommendedMovi: [{
        id: 1,
        title: "RRR",
        release_date: "24 March 2022 ",
        image: "https://nextbigwhat.com/wp-content/uploads/2022/03/cropped-rrr-poster-1.jpg",
        Director: " S. S. Rajamouli ",
        rating: 4.7,
        subtitle: "Hindi",
        actor: "N. T. Rama Rao Jr.,Ram Charan,Ajay Devgn,Alia Bhatt,Shriya Saran,Samuthirakan, Ray Stevenson,Alison Doody,Olivia Morris",
        Theater: [{
            tid: 1, filmid: 1, tname: "Yashodeep Theater", address: "ghulewadi,sangamner", food: "food & Bevrage Available", rating: 4.5, like: 1000,
            show: [{ theterid: 1, filmid: 1, time: "12.00 PM", seat: [{ seatNo: "A1", seatStatus: false, select: false, price: 120 }, { seatNo: "A2", seatStatus: false, select: false, price: 120 }, { seatNo: "A3", seatStatus: false, select: false, price: 120 }, { seatNo: "A4", seatStatus: false, select: false, price: 120 }, { seatNo: "A5", seatStatus: false, select: false, price: 120 }, { seatNo: "A6", seatStatus: false, select: false, price: 120 }, { seatNo: "A7", seatStatus: false, select: false, price: 120 }, { seatNo: "A8", seatStatus: false, select: false, price: 120 }, { seatNo: "A9", seatStatus: false, select: false, price: 120 }, { seatNo: "A10", seatStatus: false, select: false, price: 120 }, { seatNo: "A11", seatStatus: false, select: false, price: 120 }, { seatNo: "A12", seatStatus: false, select: false, price: 120 }, { seatNo: "A13", seatStatus: false, select: false, price: 120 }, { seatNo: "A14", seatStatus: false, select: false, price: 120 }, { seatNo: "A15", seatStatus: false, select: false, price: 120 }, { seatNo: "A16", seatStatus: false, select: false, price: 120 }, { seatNo: "A17", seatStatus: false, select: false, price: 120 }, { seatNo: "A18", seatStatus: false, select: false, price: 120 }] },
            { theterid: 1, filmid: 1, time: "03.00 PM", seat: [{ seatNo: "A1", seatStatus: false, select: false, price: 120 }, { seatNo: "A2", seatStatus: false, select: false, price: 120 }, { seatNo: "A3", seatStatus: false, select: false, price: 120 }, { seatNo: "A4", seatStatus: false, select: false, price: 120 }, { seatNo: "A5", seatStatus: false, select: false, price: 120 }, { seatNo: "A6", seatStatus: false, select: false, price: 120 }, { seatNo: "A7", seatStatus: false, select: false, price: 120 }, { seatNo: "A8", seatStatus: false, select: false, price: 120 }, { seatNo: "A9", seatStatus: false, select: false, price: 120 }, { seatNo: "A10", seatStatus: false, select: false, price: 120 }, { seatNo: "A11", seatStatus: false, select: false, price: 120 }, { seatNo: "A12", seatStatus: false, select: false, price: 120 }, { seatNo: "A13", seatStatus: false, select: false, price: 120 }, { seatNo: "A14", seatStatus: false, select: false, price: 120 }, { seatNo: "A15", seatStatus: false, select: false, price: 120 }, { seatNo: "A16", seatStatus: false, select: false, price: 120 }, { seatNo: "A17", seatStatus: false, select: false, price: 120 }, { seatNo: "A18", seatStatus: false, select: false, price: 120 }] },
            { theterid: 1, filmid: 1, time: "09.00 PM ", seat: [{ seatNo: "A1", seatStatus: false, select: false, price: 120 }, { seatNo: "A2", seatStatus: false, select: false, price: 120 }, { seatNo: "A3", seatStatus: false, select: false, price: 120 }, { seatNo: "A4", seatStatus: false, select: false, price: 120 }, { seatNo: "A5", seatStatus: false, select: false, price: 120 }, { seatNo: "A6", seatStatus: false, select: false, price: 120 }, { seatNo: "A7", seatStatus: false, select: false, price: 120 }, { seatNo: "A8", seatStatus: false, select: false, price: 120 }, { seatNo: "A9", seatStatus: false, select: false, price: 120 }, { seatNo: "A10", seatStatus: false, select: false, price: 120 }, { seatNo: "A11", seatStatus: false, select: false, price: 120 }, { seatNo: "A12", seatStatus: false, select: false, price: 120 }, { seatNo: "A13", seatStatus: false, select: false, price: 120 }, { seatNo: "A14", seatStatus: false, select: false, price: 120 }, { seatNo: "A15", seatStatus: false, select: false, price: 120 }, { seatNo: "A16", seatStatus: false, select: false, price: 120 }, { seatNo: "A17", seatStatus: false, select: false, price: 120 }, { seatNo: "A18", seatStatus: false, select: false, price: 120 }] }]
        },

        {
            tid: 2, filmid: 1, tname: "Gangadhar", address: "sinnar", food: "food & Bevrage Available", rating: 4.4, like: 800,
            show: [{ theterid: 1, filmid: 1, time: "12.00 PM", seat: [{ seatNo: "A1", seatStatus: false, select: false, price: 120 }, { seatNo: "A2", seatStatus: false, select: false, price: 120 }, { seatNo: "A3", seatStatus: false, select: false, price: 120 }, { seatNo: "A4", seatStatus: false, select: false, price: 120 }, { seatNo: "A5", seatStatus: false, select: false, price: 120 }, { seatNo: "A6", seatStatus: false, select: false, price: 120 }, { seatNo: "A7", seatStatus: false, select: false, price: 120 }, { seatNo: "A8", seatStatus: false, select: false, price: 120 }, { seatNo: "A9", seatStatus: false, select: false, price: 120 }, { seatNo: "A10", seatStatus: false, select: false, price: 120 }, { seatNo: "A11", seatStatus: false, select: false, price: 120 }, { seatNo: "A12", seatStatus: false, select: false, price: 120 }, { seatNo: "A13", seatStatus: false, select: false, price: 120 }, { seatNo: "A14", seatStatus: false, select: false, price: 120 }, { seatNo: "A15", seatStatus: false, select: false, price: 120 }, { seatNo: "A16", seatStatus: false, select: false, price: 120 }, { seatNo: "A17", seatStatus: false, select: false, price: 120 }, { seatNo: "A18", seatStatus: false, select: false, price: 120 }] },
            { theterid: 1, filmid: 1, time: "03.00 PM", seat: [{ seatNo: "A1", seatStatus: false, select: false, price: 120 }, { seatNo: "A2", seatStatus: false, select: false, price: 120 }, { seatNo: "A3", seatStatus: false, select: false, price: 120 }, { seatNo: "A4", seatStatus: false, select: false, price: 120 }, { seatNo: "A5", seatStatus: false, select: false, price: 120 }, { seatNo: "A6", seatStatus: false, select: false, price: 120 }, { seatNo: "A7", seatStatus: false, select: false, price: 120 }, { seatNo: "A8", seatStatus: false, select: false, price: 120 }, { seatNo: "A9", seatStatus: false, select: false, price: 120 }, { seatNo: "A10", seatStatus: false, select: false, price: 120 }, { seatNo: "A11", seatStatus: false, select: false, price: 120 }, { seatNo: "A12", seatStatus: false, select: false, price: 120 }, { seatNo: "A13", seatStatus: false, select: false, price: 120 }, { seatNo: "A14", seatStatus: false, select: false, price: 120 }, { seatNo: "A15", seatStatus: false, select: false, price: 120 }, { seatNo: "A16", seatStatus: false, select: false, price: 120 }, { seatNo: "A17", seatStatus: false, select: false, price: 120 }, { seatNo: "A18", seatStatus: false, select: false, price: 120 }] },
            { theterid: 1, filmid: 1, time: "09.00 PM ", seat: [{ seatNo: "A1", seatStatus: false, select: false, price: 120 }, { seatNo: "A2", seatStatus: false, select: false, price: 120 }, { seatNo: "A3", seatStatus: false, select: false, price: 120 }, { seatNo: "A4", seatStatus: false, select: false, price: 120 }, { seatNo: "A5", seatStatus: false, select: false, price: 120 }, { seatNo: "A6", seatStatus: false, select: false, price: 120 }, { seatNo: "A7", seatStatus: false, select: false, price: 120 }, { seatNo: "A8", seatStatus: false, select: false, price: 120 }, { seatNo: "A9", seatStatus: false, select: false, price: 120 }, { seatNo: "A10", seatStatus: false, select: false, price: 120 }, { seatNo: "A11", seatStatus: false, select: false, price: 120 }, { seatNo: "A12", seatStatus: false, select: false, price: 120 }, { seatNo: "A13", seatStatus: false, select: false, price: 120 }, { seatNo: "A14", seatStatus: false, select: false, price: 120 }, { seatNo: "A15", seatStatus: false, select: false, price: 120 }, { seatNo: "A16", seatStatus: false, select: false, price: 120 }, { seatNo: "A17", seatStatus: false, select: false, price: 120 }, { seatNo: "A18", seatStatus: false, select: false, price: 120 }] }]
        }]
    }, {
        theterid: 1,
        id: 2,
        title: "Bachchan Pandey",
        release_date: "18 Mar 2022 ",
        image: "https://m.media-amazon.com/images/M/MV5BOWE5ZjljZDEtYTZmNy00MGVlLWJjNjEtMWUwMzUyMDc5NTA3XkEyXkFqcGdeQXVyODgzMDMwODI@._V1_.jpg",
        Director: "Farhad Samji",
        rating: 3.5,
        subtitle: "Hindi",
        actor: "Akshay Kumar, Jacqueline Fernandez",
        Theater: [{
            tid: 1, tname: "Yashodeep Theater", address: "ghulewadi,sangamner", food: "food & Bevrage Available", rating: 4.5, like: 1000,
            show: [{ theterid: 1, filmid: 2, time: "12.00PM", seat: [{ seatNo: "A1", seatStatus: false, select: false, price: 120 }, { seatNo: "A2", seatStatus: false, select: false, price: 120 }, { seatNo: "A3", seatStatus: false, select: false, price: 120 }, { seatNo: "A4", seatStatus: false, select: false, price: 120 }, { seatNo: "A5", seatStatus: false, select: false, price: 120 }, { seatNo: "A6", seatStatus: false, select: false, price: 120 }, { seatNo: "A7", seatStatus: false, select: false, price: 120 }, { seatNo: "A8", seatStatus: false, select: false, price: 120 }, { seatNo: "A9", seatStatus: false, select: false, price: 120 }, { seatNo: "A10", seatStatus: false, select: false, price: 120 }, { seatNo: "A11", seatStatus: false, select: false, price: 120 }, { seatNo: "A12", seatStatus: false, select: false, price: 120 }, { seatNo: "A13", seatStatus: false, select: false, price: 120 }, { seatNo: "A14", seatStatus: false, select: false, price: 120 }, { seatNo: "A15", seatStatus: false, select: false, price: 120 }, { seatNo: "A16", seatStatus: false, select: false, price: 120 }, { seatNo: "A17", seatStatus: false, select: false, price: 120 }, { seatNo: "A18", seatStatus: false, select: false, price: 120 }] },
            { theterid: 1, filmid: 2, time: "03.00PM", seat: [{ seatNo: "A1", seatStatus: false, select: false, price: 120 }, { seatNo: "A2", seatStatus: false, select: false, price: 120 }, { seatNo: "A3", seatStatus: false, select: false, price: 120 }, { seatNo: "A4", seatStatus: false, select: false, price: 120 }, { seatNo: "A5", seatStatus: false, select: false, price: 120 }, { seatNo: "A6", seatStatus: false, select: false, price: 120 }, { seatNo: "A7", seatStatus: false, select: false, price: 120 }, { seatNo: "A8", seatStatus: false, select: false, price: 120 }, { seatNo: "A9", seatStatus: false, select: false, price: 120 }, { seatNo: "A10", seatStatus: false, select: false, price: 120 }, { seatNo: "A11", seatStatus: false, select: false, price: 120 }, { seatNo: "A12", seatStatus: false, select: false, price: 120 }, { seatNo: "A13", seatStatus: false, select: false, price: 120 }, { seatNo: "A14", seatStatus: false, select: false, price: 120 }, { seatNo: "A15", seatStatus: false, select: false, price: 120 }, { seatNo: "A16", seatStatus: false, select: false, price: 120 }, { seatNo: "A17", seatStatus: false, select: false, price: 120 }, { seatNo: "A18", seatStatus: false, select: false, price: 120 }] },
            { theterid: 1, filmid: 2, time: "09.00 PM ", seat: [{ seatNo: "A1", seatStatus: false, select: false, price: 120 }, { seatNo: "A2", seatStatus: false, select: false, price: 120 }, { seatNo: "A3", seatStatus: false, select: false, price: 120 }, { seatNo: "A4", seatStatus: false, select: false, price: 120 }, { seatNo: "A5", seatStatus: false, select: false, price: 120 }, { seatNo: "A6", seatStatus: false, select: false, price: 120 }, { seatNo: "A7", seatStatus: false, select: false, price: 120 }, { seatNo: "A8", seatStatus: false, select: false, price: 120 }, { seatNo: "A9", seatStatus: false, select: false, price: 120 }, { seatNo: "A10", seatStatus: false, select: false, price: 120 }, { seatNo: "A11", seatStatus: false, select: false, price: 120 }, { seatNo: "A12", seatStatus: false, select: false, price: 120 }, { seatNo: "A13", seatStatus: false, select: false, price: 120 }, { seatNo: "A14", seatStatus: false, select: false, price: 120 }, { seatNo: "A15", seatStatus: false, select: false, price: 120 }, { seatNo: "A16", seatStatus: false, select: false, price: 120 }, { seatNo: "A17", seatStatus: false, select: false, price: 120 }, { seatNo: "A18", seatStatus: false, select: false, price: 120 }] }]
        },

        {
            tid: 2, tname: "Gangadhar", address: "sinnar", food: "food & Bevrage Available", rating: 4.4, like: 800,
            show: [{ theterid: 1, filmid: 2, time: "12.00PM", seat: [{ seatNo: "A1", seatStatus: false, select: false, price: 120 }, { seatNo: "A2", seatStatus: false, select: false, price: 120 }, { seatNo: "A3", seatStatus: false, select: false, price: 120 }, { seatNo: "A4", seatStatus: false, select: false, price: 120 }, { seatNo: "A5", seatStatus: false, select: false, price: 120 }, { seatNo: "A6", seatStatus: false, select: false, price: 120 }, { seatNo: "A7", seatStatus: false, select: false, price: 120 }, { seatNo: "A8", seatStatus: false, select: false, price: 120 }, { seatNo: "A9", seatStatus: false, select: false, price: 120 }, { seatNo: "A10", seatStatus: false, select: false, price: 120 }, { seatNo: "A11", seatStatus: false, select: false, price: 120 }, { seatNo: "A12", seatStatus: false, select: false, price: 120 }, { seatNo: "A13", seatStatus: false, select: false, price: 120 }, { seatNo: "A14", seatStatus: false, select: false, price: 120 }, { seatNo: "A15", seatStatus: false, select: false, price: 120 }, { seatNo: "A16", seatStatus: false, select: false, price: 120 }, { seatNo: "A17", seatStatus: false, select: false, price: 120 }, { seatNo: "A18", seatStatus: false, select: false, price: 120 }] },
            { theterid: 1, filmid: 2, time: "03.00PM", seat: [{ seatNo: "A1", seatStatus: false, select: false, price: 120 }, { seatNo: "A2", seatStatus: false, select: false, price: 120 }, { seatNo: "A3", seatStatus: false, select: false, price: 120 }, { seatNo: "A4", seatStatus: false, select: false, price: 120 }, { seatNo: "A5", seatStatus: false, select: false, price: 120 }, { seatNo: "A6", seatStatus: false, select: false, price: 120 }, { seatNo: "A7", seatStatus: false, select: false, price: 120 }, { seatNo: "A8", seatStatus: false, select: false, price: 120 }, { seatNo: "A9", seatStatus: false, select: false, price: 120 }, { seatNo: "A10", seatStatus: false, select: false, price: 120 }, { seatNo: "A11", seatStatus: false, select: false, price: 120 }, { seatNo: "A12", seatStatus: false, select: false, price: 120 }, { seatNo: "A13", seatStatus: false, select: false, price: 120 }, { seatNo: "A14", seatStatus: false, select: false, price: 120 }, { seatNo: "A15", seatStatus: false, select: false, price: 120 }, { seatNo: "A16", seatStatus: false, select: false, price: 120 }, { seatNo: "A17", seatStatus: false, select: false, price: 120 }, { seatNo: "A18", seatStatus: false, select: false, price: 120 }] },
            { theterid: 1, filmid: 2, time: "09.00 PM ", seat: [{ seatNo: "A1", seatStatus: false, select: false, price: 120 }, { seatNo: "A2", seatStatus: false, select: false, price: 120 }, { seatNo: "A3", seatStatus: false, select: false, price: 120 }, { seatNo: "A4", seatStatus: false, select: false, price: 120 }, { seatNo: "A5", seatStatus: false, select: false, price: 120 }, { seatNo: "A6", seatStatus: false, select: false, price: 120 }, { seatNo: "A7", seatStatus: false, select: false, price: 120 }, { seatNo: "A8", seatStatus: false, select: false, price: 120 }, { seatNo: "A9", seatStatus: false, select: false, price: 120 }, { seatNo: "A10", seatStatus: false, select: false, price: 120 }, { seatNo: "A11", seatStatus: false, select: false, price: 120 }, { seatNo: "A12", seatStatus: false, select: false, price: 120 }, { seatNo: "A13", seatStatus: false, select: false, price: 120 }, { seatNo: "A14", seatStatus: false, select: false, price: 120 }, { seatNo: "A15", seatStatus: false, select: false, price: 120 }, { seatNo: "A16", seatStatus: false, select: false, price: 120 }, { seatNo: "A17", seatStatus: false, select: false, price: 120 }, { seatNo: "A18", seatStatus: false, select: false, price: 120 }] }]
        }]
    },

    {
        id: 3,
        title: "K.G.F: Chapter 2",
        release_date: "14 April 2022",
        image: "https://cdn.bollywoodmdb.com/movies/largethumb/2019/k-g-f-chapter-2/k-g-f-chapter-2-poster-8.jpg",
        Director: "Prashanth Neel",
        rating: 4.8,
        subtitle: "Hindi",
        actor: "Yash,Sanjay Dutt, Raveena Tandon,Srinidhi Shetty,Prakash Raj",
        Theater: [{
            tid: 1, filmid: 3, tname: "Yashodeep Theater", address: "ghulewadi,sangamner", food: "food & Bevrage Available", rating: 4.5, like: 1000,
            show: [{ theterid: 1, filmid: 3, time: "12.00 PM", seat: [{ seatNo: "A1", seatStatus: false, select: false, price: 120 }, { seatNo: "A2", seatStatus: false, select: false, price: 120 }, { seatNo: "A3", seatStatus: false, select: false, price: 120 }, { seatNo: "A4", seatStatus: false, select: false, price: 120 }, { seatNo: "A5", seatStatus: false, select: false, price: 120 }, { seatNo: "A6", seatStatus: false, select: false, price: 120 }, { seatNo: "A7", seatStatus: false, select: false, price: 120 }, { seatNo: "A8", seatStatus: false, select: false, price: 120 }, { seatNo: "A9", seatStatus: false, select: false, price: 120 }, { seatNo: "A10", seatStatus: false, select: false, price: 120 }, { seatNo: "A11", seatStatus: false, select: false, price: 120 }, { seatNo: "A12", seatStatus: false, select: false, price: 120 }, { seatNo: "A13", seatStatus: false, select: false, price: 120 }, { seatNo: "A14", seatStatus: false, select: false, price: 120 }, { seatNo: "A15", seatStatus: false, select: false, price: 120 }, { seatNo: "A16", seatStatus: false, select: false, price: 120 }, { seatNo: "A17", seatStatus: false, select: false, price: 120 }, { seatNo: "A18", seatStatus: false, select: false, price: 120 }] },
            { theterid: 1, filmid: 3, time: "03.00 PM", seat: [{ seatNo: "A1", seatStatus: false, select: false, price: 120 }, { seatNo: "A2", seatStatus: false, select: false, price: 120 }, { seatNo: "A3", seatStatus: false, select: false, price: 120 }, { seatNo: "A4", seatStatus: false, select: false, price: 120 }, { seatNo: "A5", seatStatus: false, select: false, price: 120 }, { seatNo: "A6", seatStatus: false, select: false, price: 120 }, { seatNo: "A7", seatStatus: false, select: false, price: 120 }, { seatNo: "A8", seatStatus: false, select: false, price: 120 }, { seatNo: "A9", seatStatus: false, select: false, price: 120 }, { seatNo: "A10", seatStatus: false, select: false, price: 120 }, { seatNo: "A11", seatStatus: false, select: false, price: 120 }, { seatNo: "A12", seatStatus: false, select: false, price: 120 }, { seatNo: "A13", seatStatus: false, select: false, price: 120 }, { seatNo: "A14", seatStatus: false, select: false, price: 120 }, { seatNo: "A15", seatStatus: false, select: false, price: 120 }, { seatNo: "A16", seatStatus: false, select: false, price: 120 }, { seatNo: "A17", seatStatus: false, select: false, price: 120 }, { seatNo: "A18", seatStatus: false, select: false, price: 120 }] },
            { theterid: 1, filmid: 3, time: "09.00 PM ", seat: [{ seatNo: "A1", seatStatus: false, select: false, price: 120 }, { seatNo: "A2", seatStatus: false, select: false, price: 120 }, { seatNo: "A3", seatStatus: false, select: false, price: 120 }, { seatNo: "A4", seatStatus: false, select: false, price: 120 }, { seatNo: "A5", seatStatus: false, select: false, price: 120 }, { seatNo: "A6", seatStatus: false, select: false, price: 120 }, { seatNo: "A7", seatStatus: false, select: false, price: 120 }, { seatNo: "A8", seatStatus: false, select: false, price: 120 }, { seatNo: "A9", seatStatus: false, select: false, price: 120 }, { seatNo: "A10", seatStatus: false, select: false, price: 120 }, { seatNo: "A11", seatStatus: false, select: false, price: 120 }, { seatNo: "A12", seatStatus: false, select: false, price: 120 }, { seatNo: "A13", seatStatus: false, select: false, price: 120 }, { seatNo: "A14", seatStatus: false, select: false, price: 120 }, { seatNo: "A15", seatStatus: false, select: false, price: 120 }, { seatNo: "A16", seatStatus: false, select: false, price: 120 }, { seatNo: "A17", seatStatus: false, select: false, price: 120 }, { seatNo: "A18", seatStatus: false, select: false, price: 120 }] }]
        },

        {
            tid: 2, filmid: 3, tname: "Gangadhar", address: "sinnar", food: "food & Bevrage Available", rating: 4.4, like: 800,
            show: [{ theterid: 1, filmid: 3, time: "12.00 PM", seat: [{ seatNo: "A1", seatStatus: false, select: false, price: 120 }, { seatNo: "A2", seatStatus: false, select: false, price: 120 }, { seatNo: "A3", seatStatus: false, select: false, price: 120 }, { seatNo: "A4", seatStatus: false, select: false, price: 120 }, { seatNo: "A5", seatStatus: false, select: false, price: 120 }, { seatNo: "A6", seatStatus: false, select: false, price: 120 }, { seatNo: "A7", seatStatus: false, select: false, price: 120 }, { seatNo: "A8", seatStatus: false, select: false, price: 120 }, { seatNo: "A9", seatStatus: false, select: false, price: 120 }, { seatNo: "A10", seatStatus: false, select: false, price: 120 }, { seatNo: "A11", seatStatus: false, select: false, price: 120 }, { seatNo: "A12", seatStatus: false, select: false, price: 120 }, { seatNo: "A13", seatStatus: false, select: false, price: 120 }, { seatNo: "A14", seatStatus: false, select: false, price: 120 }, { seatNo: "A15", seatStatus: false, select: false, price: 120 }, { seatNo: "A16", seatStatus: false, select: false, price: 120 }, { seatNo: "A17", seatStatus: false, select: false, price: 120 }, { seatNo: "A18", seatStatus: false, select: false, price: 120 }] },
            { theterid: 1, filmid: 3, time: "03.00 PM", seat: [{ seatNo: "A1", seatStatus: false, select: false, price: 120 }, { seatNo: "A2", seatStatus: false, select: false, price: 120 }, { seatNo: "A3", seatStatus: false, select: false, price: 120 }, { seatNo: "A4", seatStatus: false, select: false, price: 120 }, { seatNo: "A5", seatStatus: false, select: false, price: 120 }, { seatNo: "A6", seatStatus: false, select: false, price: 120 }, { seatNo: "A7", seatStatus: false, select: false, price: 120 }, { seatNo: "A8", seatStatus: false, select: false, price: 120 }, { seatNo: "A9", seatStatus: false, select: false, price: 120 }, { seatNo: "A10", seatStatus: false, select: false, price: 120 }, { seatNo: "A11", seatStatus: false, select: false, price: 120 }, { seatNo: "A12", seatStatus: false, select: false, price: 120 }, { seatNo: "A13", seatStatus: false, select: false, price: 120 }, { seatNo: "A14", seatStatus: false, select: false, price: 120 }, { seatNo: "A15", seatStatus: false, select: false, price: 120 }, { seatNo: "A16", seatStatus: false, select: false, price: 120 }, { seatNo: "A17", seatStatus: false, select: false, price: 120 }, { seatNo: "A18", seatStatus: false, select: false, price: 120 }] },
            { theterid: 1, filmid: 3, time: "09.00 PM ", seat: [{ seatNo: "A1", seatStatus: false, select: false, price: 120 }, { seatNo: "A2", seatStatus: false, select: false, price: 120 }, { seatNo: "A3", seatStatus: false, select: false, price: 120 }, { seatNo: "A4", seatStatus: false, select: false, price: 120 }, { seatNo: "A5", seatStatus: false, select: false, price: 120 }, { seatNo: "A6", seatStatus: false, select: false, price: 120 }, { seatNo: "A7", seatStatus: false, select: false, price: 120 }, { seatNo: "A8", seatStatus: false, select: false, price: 120 }, { seatNo: "A9", seatStatus: false, select: false, price: 120 }, { seatNo: "A10", seatStatus: false, select: false, price: 120 }, { seatNo: "A11", seatStatus: false, select: false, price: 120 }, { seatNo: "A12", seatStatus: false, select: false, price: 120 }, { seatNo: "A13", seatStatus: false, select: false, price: 120 }, { seatNo: "A14", seatStatus: false, select: false, price: 120 }, { seatNo: "A15", seatStatus: false, select: false, price: 120 }, { seatNo: "A16", seatStatus: false, select: false, price: 120 }, { seatNo: "A17", seatStatus: false, select: false, price: 120 }, { seatNo: "A18", seatStatus: false, select: false, price: 120 }] }]
        }]
    }]

    ,
    tikitInformation: null,
    showtime: null,
    user: [{ name: "pravin", password: "1234", seatQuntity: 0, totalprice: 0, seatNumber: [] }]


};


// export  const getbasketTotal=(basket)=>
// basket?.reduce((amount,item)=>item.price+amount,0)


function reducer(state, action) {

    console.log(action, "action")

    switch (action.type) {
        case "ADD_SELECT_TIME_AND_THETER":
            //LOGIC
            return { ...state, showtime: action.Showdetais };
            break;

        case "TIKIT_INFORMATION":
            //LOGIC
            return { ...state, tikitInformation: action.Tinfo };
            break;


        case "SEAT_COMFORM":

            let Film = state.RecommendedMovi.filter((ele) => {
                if (ele.id == action.Moviedetail.filmid) {
                    return ele
                }
            })
            let Theter = Film[0].Theater.filter((ele) => {
                if (ele.tid == action.Moviedetail.theterid) {
                    return (ele)
                }

            }

            )
            let showseat = Theter[0].show.filter((ele) => {
                if (ele.time == action.Moviedetail.time) {

                    return ele.seat  

                }

            }
            )
            return { ...state, showseat: action.seatUpdat };
            break;
           
    

        default:
            return state;
    }
}
export default reducer;