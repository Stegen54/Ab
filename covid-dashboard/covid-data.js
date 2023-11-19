const data = [
    {
        "country": "USA",
        "statistics": [
            { "time": "2021-07", "cases": 10523, "deaths": 123, "recoveries": 5890 },
            { "time": "2021-08", "cases": 11223, "deaths": 193, "recoveries": 5920 },
            { "time": "2021-09", "cases": 10530, "deaths": 223, "recoveries": 6390 },
            { "time": "2021-10", "cases": 10213, "deaths": 273, "recoveries": 6790 },
            { "time": "2021-11", "cases": 11023, "deaths": 293, "recoveries": 6290 },
            { "time": "2021-12", "cases": 10823, "deaths": 343, "recoveries": 6090 },
            { "time": "2022-01", "cases": 11223, "deaths": 393, "recoveries": 6390 },
            { "time": "2022-02", "cases": 10223, "deaths": 423, "recoveries": 6490 },
            { "time": "2022-03", "cases": 10223, "deaths": 453, "recoveries": 6590 },
            { "time": "2022-04", "cases": 10023, "deaths": 493, "recoveries": 6790 },
            { "time": "2022-05", "cases": 9923, "deaths": 523, "recoveries": 6890 },
            { "time": "2022-06", "cases": 9823, "deaths": 553, "recoveries": 6990 }
        ]
    },
    {
        "country": "India",
        "statistics": [
            { "time": "2021-07", "cases": 9500, "deaths": 200, "recoveries": 6000 },
            { "time": "2021-08", "cases": 10123, "deaths": 180, "recoveries": 6110 },
            { "time": "2021-09", "cases": 10830, "deaths": 220, "recoveries": 6400 },
            { "time": "2021-10", "cases": 10010, "deaths": 260, "recoveries": 6550 },
            { "time": "2021-11", "cases": 11120, "deaths": 290, "recoveries": 6350 },
            { "time": "2021-12", "cases": 10620, "deaths": 330, "recoveries": 6100 },
            { "time": "2022-01", "cases": 11200, "deaths": 380, "recoveries": 6450 },
            { "time": "2022-02", "cases": 10330, "deaths": 410, "recoveries": 6500 },
            { "time": "2022-03", "cases": 10130, "deaths": 430, "recoveries": 6600 },
            { "time": "2022-04", "cases": 9990, "deaths": 470, "recoveries": 6750 },
            { "time": "2022-05", "cases": 9930, "deaths": 510, "recoveries": 6850 },
            { "time": "2022-06", "cases": 9850, "deaths": 540, "recoveries": 6950 }
        ]
    },
    {
        "country": "Brazil",
        "statistics": [
            { "time": "2021-07", "cases": 9470, "deaths": 195, "recoveries": 6015 },
            { "time": "2021-08", "cases": 10090, "deaths": 183, "recoveries": 6105 },
            { "time": "2021-09", "cases": 10740, "deaths": 215, "recoveries": 6425 },
            { "time": "2021-10", "cases": 10040, "deaths": 257, "recoveries": 6552 },
            { "time": "2021-11", "cases": 11150, "deaths": 283, "recoveries": 6375 },
            { "time": "2021-12", "cases": 10605, "deaths": 315, "recoveries": 6090 },
            { "time": "2022-01", "cases": 11280, "deaths": 375, "recoveries": 6462 },
            { "time": "2022-02", "cases": 10385, "deaths": 401, "recoveries": 6570 },
            { "time": "2022-03", "cases": 10160, "deaths": 419, "recoveries": 6615 },
            { "time": "2022-04", "cases": 10000, "deaths": 474, "recoveries": 6765 },
            { "time": "2022-05", "cases": 9920, "deaths": 508, "recoveries": 6825 },
            { "time": "2022-06", "cases": 9880, "deaths": 543, "recoveries": 6980 }
        ]
    },
    {
        "country": "Spain",
        "statistics": [
            { "time": "2021-07", "cases": 9200, "deaths": 230, "recoveries": 5800 },
            { "time": "2021-08", "cases": 9900, "deaths": 195, "recoveries": 6000 },
            { "time": "2021-09", "cases": 10500, "deaths": 250, "recoveries": 6250 },
            { "time": "2021-10", "cases": 9800, "deaths": 270, "recoveries": 6450 },
            { "time": "2021-11", "cases": 10950, "deaths": 280, "recoveries": 6300 },
            { "time": "2021-12", "cases": 10350, "deaths": 320, "recoveries": 6050 },
            { "time": "2022-01", "cases": 11150, "deaths": 380, "recoveries": 6350 },
            { "time": "2022-02", "cases": 10150, "deaths": 420, "recoveries": 6400 },
            { "time": "2022-03", "cases": 10050, "deaths": 440, "recoveries": 6500 },
            { "time": "2022-04", "cases": 9900, "deaths": 490, "recoveries": 6650 },
            { "time": "2022-05", "cases": 9850, "deaths": 520, "recoveries": 6750 },
            { "time": "2022-06", "cases": 9750, "deaths": 550, "recoveries": 6850 }
        ]
    },
    {
        "country": "Australia",
        "statistics": [
            { "time": "2021-07", "cases": 9100, "deaths": 220, "recoveries": 5900 },
            { "time": "2021-08", "cases": 9850, "deaths": 200, "recoveries": 6050 },
            { "time": "2021-09", "cases": 10450, "deaths": 240, "recoveries": 6300 },
            { "time": "2021-10", "cases": 9700, "deaths": 280, "recoveries": 6400 },
            { "time": "2021-11", "cases": 10850, "deaths": 290, "recoveries": 6250 },
            { "time": "2021-12", "cases": 10250, "deaths": 330, "recoveries": 6000 },
            { "time": "2022-01", "cases": 11050, "deaths": 390, "recoveries": 6300 },
            { "time": "2022-02", "cases": 10050, "deaths": 420, "recoveries": 6350 },
            { "time": "2022-03", "cases": 9950, "deaths": 440, "recoveries": 6450 },
            { "time": "2022-04", "cases": 9800, "deaths": 480, "recoveries": 6600 },
            { "time": "2022-05", "cases": 9700, "deaths": 510, "recoveries": 6700 },
            { "time": "2022-06", "cases": 9600, "deaths": 540, "recoveries": 6800 }
        ]
    },
    {
        "country": "South Africa",
        "statistics": [
            { "time": "2021-07", "cases": 9300, "deaths": 210, "recoveries": 5850 },
            { "time": "2021-08", "cases": 9700, "deaths": 180, "recoveries": 6000 },
            { "time": "2021-09", "cases": 10500, "deaths": 240, "recoveries": 6300 },
            { "time": "2021-10", "cases": 9900, "deaths": 280, "recoveries": 6500 },
            { "time": "2021-11", "cases": 10900, "deaths": 300, "recoveries": 6200 },
            { "time": "2021-12", "cases": 10350, "deaths": 320, "recoveries": 5950 },
            { "time": "2022-01", "cases": 11200, "deaths": 380, "recoveries": 6400 },
            { "time": "2022-02", "cases": 10100, "deaths": 420, "recoveries": 6300 },
            { "time": "2022-03", "cases": 9950, "deaths": 430, "recoveries": 6550 },
            { "time": "2022-04", "cases": 9750, "deaths": 470, "recoveries": 6650 },
            { "time": "2022-05", "cases": 9650, "deaths": 500, "recoveries": 6800 },
            { "time": "2022-06", "cases": 9550, "deaths": 530, "recoveries": 6900 }
        ]


    },
    {
        "country": "Mexico",
        "statistics": [
            { "time": "2021-07", "cases": 8900, "deaths": 210, "recoveries": 5750 },
            { "time": "2021-08", "cases": 9800, "deaths": 190, "recoveries": 5950 },
            { "time": "2021-09", "cases": 10700, "deaths": 250, "recoveries": 6200 },
            { "time": "2021-10", "cases": 9500, "deaths": 280, "recoveries": 6450 },
            { "time": "2021-11", "cases": 11100, "deaths": 300, "recoveries": 6300 },
            { "time": "2021-12", "cases": 10450, "deaths": 340, "recoveries": 6050 },
            { "time": "2022-01", "cases": 11250, "deaths": 400, "recoveries": 6350 },
            { "time": "2022-02", "cases": 10200, "deaths": 420, "recoveries": 6400 },
            { "time": "2022-03", "cases": 10050, "deaths": 440, "recoveries": 6500 },
            { "time": "2022-04", "cases": 9800, "deaths": 480, "recoveries": 6650 },
            { "time": "2022-05", "cases": 9700, "deaths": 520, "recoveries": 6750 },
            { "time": "2022-06", "cases": 9600, "deaths": 550, "recoveries": 6850 }
        ]
    },
    {
        "country": "France",
        "statistics": [
            { "time": "2021-07", "cases": 8950, "deaths": 205, "recoveries": 5850 },
            { "time": "2021-08", "cases": 9650, "deaths": 195, "recoveries": 5900 },
            { "time": "2021-09", "cases": 10650, "deaths": 235, "recoveries": 6150 },
            { "time": "2021-10", "cases": 9400, "deaths": 275, "recoveries": 6300 },
            { "time": "2021-11", "cases": 11250, "deaths": 310, "recoveries": 6200 },
            { "time": "2021-12", "cases": 10400, "deaths": 335, "recoveries": 6050 },
            { "time": "2022-01", "cases": 11300, "deaths": 390, "recoveries": 6250 },
            { "time": "2022-02", "cases": 10100, "deaths": 405, "recoveries": 6350 },
            { "time": "2022-03", "cases": 9950, "deaths": 430, "recoveries": 6400 },
            { "time": "2022-04", "cases": 9700, "deaths": 470, "recoveries": 6550 },
            { "time": "2022-05", "cases": 9650, "deaths": 510, "recoveries": 6700 },
            { "time": "2022-06", "cases": 9500, "deaths": 540, "recoveries": 6800 }
        ]

    },
    {
        "country": "Italy",
        "statistics": [
            { "time": "2021-07", "cases": 8950, "deaths": 215, "recoveries": 5850 },
            { "time": "2021-08", "cases": 9650, "deaths": 205, "recoveries": 5900 },
            { "time": "2021-09", "cases": 10650, "deaths": 250, "recoveries": 6150 },
            { "time": "2021-10", "cases": 9400, "deaths": 290, "recoveries": 6300 },
            { "time": "2021-11", "cases": 11250, "deaths": 330, "recoveries": 6200 },
            { "time": "2021-12", "cases": 10400, "deaths": 375, "recoveries": 6050 },
            { "time": "2022-01", "cases": 11300, "deaths": 440, "recoveries": 6250 },
            { "time": "2022-02", "cases": 10100, "deaths": 470, "recoveries": 6350 },
            { "time": "2022-03", "cases": 9950, "deaths": 520, "recoveries": 6400 },
            { "time": "2022-04", "cases": 9700, "deaths": 560, "recoveries": 6550 },
            { "time": "2022-05", "cases": 9650, "deaths": 600, "recoveries": 6700 },
            { "time": "2022-06", "cases": 9500, "deaths": 630, "recoveries": 6800 }
        ]
    },
    {
        "country": "Germany",
        "statistics": [
            { "time": "2021-07", "cases": 9200, "deaths": 230, "recoveries": 6100 },
            { "time": "2021-08", "cases": 10050, "deaths": 190, "recoveries": 6000 },
            { "time": "2021-09", "cases": 10780, "deaths": 245, "recoveries": 6300 },
            { "time": "2021-10", "cases": 9900, "deaths": 270, "recoveries": 6500 },
            { "time": "2021-11", "cases": 11120, "deaths": 310, "recoveries": 6250 },
            { "time": "2021-12", "cases": 10610, "deaths": 355, "recoveries": 6050 },
            { "time": "2022-01", "cases": 11290, "deaths": 410, "recoveries": 6300 },
            { "time": "2022-02", "cases": 10320, "deaths": 440, "recoveries": 6500 },
            { "time": "2022-03", "cases": 10140, "deaths": 480, "recoveries": 6600 },
            { "time": "2022-04", "cases": 10010, "deaths": 520, "recoveries": 6750 },
            { "time": "2022-05", "cases": 9970, "deaths": 570, "recoveries": 6800 },
            { "time": "2022-06", "cases": 9920, "deaths": 610, "recoveries": 6900 }
        ]

    },
    {
        "country": "Canada",
        "statistics": [
            { "time": "2021-07", "cases": 9150, "deaths": 240, "recoveries": 5950 },
            { "time": "2021-08", "cases": 10070, "deaths": 200, "recoveries": 6050 },
            { "time": "2021-09", "cases": 10820, "deaths": 260, "recoveries": 6350 },
            { "time": "2021-10", "cases": 9970, "deaths": 290, "recoveries": 6500 },
            { "time": "2021-11", "cases": 11080, "deaths": 330, "recoveries": 6200 },
            { "time": "2021-12", "cases": 10590, "deaths": 370, "recoveries": 5950 },
            { "time": "2022-01", "cases": 11270, "deaths": 430, "recoveries": 6400 },
            { "time": "2022-02", "cases": 10290, "deaths": 450, "recoveries": 6450 },
            { "time": "2022-03", "cases": 10110, "deaths": 480, "recoveries": 6550 },
            { "time": "2022-04", "cases": 9990, "deaths": 530, "recoveries": 6700 },
            { "time": "2022-05", "cases": 9940, "deaths": 560, "recoveries": 6800 },
            { "time": "2022-06", "cases": 9860, "deaths": 600, "recoveries": 6900 }
        ]
    },
    {
        "country": "UK",
        "statistics": [
            { "time": "2021-07", "cases": 9100, "deaths": 235, "recoveries": 5950 },
            { "time": "2021-08", "cases": 10120, "deaths": 190, "recoveries": 6100 },
            { "time": "2021-09", "cases": 10850, "deaths": 255, "recoveries": 6400 },
            { "time": "2021-10", "cases": 10010, "deaths": 285, "recoveries": 6600 },
            { "time": "2021-11", "cases": 11130, "deaths": 325, "recoveries": 6300 },
            { "time": "2021-12", "cases": 10640, "deaths": 360, "recoveries": 6050 },
            { "time": "2022-01", "cases": 11250, "deaths": 415, "recoveries": 6450 },
            { "time": "2022-02", "cases": 10320, "deaths": 435, "recoveries": 6500 },
            { "time": "2022-03", "cases": 10140, "deaths": 475, "recoveries": 6600 },
            { "time": "2022-04", "cases": 9990, "deaths": 510, "recoveries": 6750 },
            { "time": "2022-05", "cases": 9930, "deaths": 555, "recoveries": 6850 },
            { "time": "2022-06", "cases": 9850, "deaths": 590, "recoveries": 6950 }
        ]
    },
    {
        "country": "China",
        "statistics": [
            { "time": "2021-07", "cases": 9250, "deaths": 245, "recoveries": 6000 },
            { "time": "2021-08", "cases": 10080, "deaths": 195, "recoveries": 6100 },
            { "time": "2021-09", "cases": 10770, "deaths": 265, "recoveries": 6350 },
            { "time": "2021-10", "cases": 9990, "deaths": 280, "recoveries": 6550 },
            { "time": "2021-11", "cases": 11150, "deaths": 330, "recoveries": 6250 },
            { "time": "2021-12", "cases": 10610, "deaths": 360, "recoveries": 6050 },
            { "time": "2022-01", "cases": 11340, "deaths": 420, "recoveries": 6400 },
            { "time": "2022-02", "cases": 10340, "deaths": 430, "recoveries": 6500 },
            { "time": "2022-03", "cases": 10150, "deaths": 475, "recoveries": 6600 },
            { "time": "2022-04", "cases": 9970, "deaths": 500, "recoveries": 6750 },
            { "time": "2022-05", "cases": 9900, "deaths": 550, "recoveries": 6850 },
            { "time": "2022-06", "cases": 9820, "deaths": 590, "recoveries": 6950 }
        ]
    },
    {
        "country": "Japan",
        "statistics": [
            { "time": "2021-07", "cases": 9200, "deaths": 240, "recoveries": 6050 },
            { "time": "2021-08", "cases": 10090, "deaths": 200, "recoveries": 6100 },
            { "time": "2021-09", "cases": 10740, "deaths": 255, "recoveries": 6350 },
            { "time": "2021-10", "cases": 9990, "deaths": 290, "recoveries": 6550 },
            { "time": "2021-11", "cases": 11180, "deaths": 330, "recoveries": 6250 },
            { "time": "2021-12", "cases": 10550, "deaths": 365, "recoveries": 6050 },
            { "time": "2022-01", "cases": 11310, "deaths": 415, "recoveries": 6400 },
            { "time": "2022-02", "cases": 10340, "deaths": 435, "recoveries": 6500 },
            { "time": "2022-03", "cases": 10160, "deaths": 480, "recoveries": 6600 },
            { "time": "2022-04", "cases": 9900, "deaths": 515, "recoveries": 6750 },
            { "time": "2022-05", "cases": 9830, "deaths": 550, "recoveries": 6850 },
            { "time": "2022-06", "cases": 9780, "deaths": 590, "recoveries": 6950 }
        ]
    },
    {
        "country": "Russia",
        "statistics": [
            { "time": "2021-07", "cases": 9150, "deaths": 225, "recoveries": 5950 },
            { "time": "2021-08", "cases": 10020, "deaths": 190, "recoveries": 6050 },
            { "time": "2021-09", "cases": 10830, "deaths": 250, "recoveries": 6350 },
            { "time": "2021-10", "cases": 10010, "deaths": 280, "recoveries": 6550 },
            { "time": "2021-11", "cases": 11150, "deaths": 325, "recoveries": 6250 },
            { "time": "2021-12", "cases": 10590, "deaths": 360, "recoveries": 6050 },
            { "time": "2022-01", "cases": 11340, "deaths": 410, "recoveries": 6400 },
            { "time": "2022-02", "cases": 10370, "deaths": 440, "recoveries": 6500 },
            { "time": "2022-03", "cases": 10150, "deaths": 475, "recoveries": 6600 },
            { "time": "2022-04", "cases": 9950, "deaths": 500, "recoveries": 6750 },
            { "time": "2022-05", "cases": 9900, "deaths": 550, "recoveries": 6850 },
            { "time": "2022-06", "cases": 9850, "deaths": 590, "recoveries": 6950 }
        ]
    },
    {
        "country": "Iran",
        "statistics": [
            { "time": "2021-07", "cases": 9250, "deaths": 245, "recoveries": 6000 },
            { "time": "2021-08", "cases": 10080, "deaths": 195, "recoveries": 6100 },
            { "time": "2021-09", "cases": 10770, "deaths": 265, "recoveries": 6350 },
            { "time": "2021-10", "cases": 9990, "deaths": 280, "recoveries": 6550 },
            { "time": "2021-11", "cases": 11150, "deaths": 330, "recoveries": 6250 },
            { "time": "2021-12", "cases": 10590, "deaths": 360, "recoveries": 6050 },
            { "time": "2022-01", "cases": 11340, "deaths": 410, "recoveries": 6400 },
            { "time": "2022-02", "cases": 10340, "deaths": 430, "recoveries": 6500 },
            { "time": "2022-03", "cases": 10150, "deaths": 475, "recoveries": 6600 },
            { "time": "2022-04", "cases": 9970, "deaths": 500, "recoveries": 6750 },
            { "time": "2022-05", "cases": 9930, "deaths": 550, "recoveries": 6850 },
            { "time": "2022-06", "cases": 9870, "deaths": 590, "recoveries": 6950 }
        ]

    },
    {
        "country": "South Korea",
        "statistics": [
            { "time": "2021-07", "cases": 9300, "deaths": 235, "recoveries": 6050 },
            { "time": "2021-08", "cases": 10040, "deaths": 195, "recoveries": 6100 },
            { "time": "2021-09", "cases": 10780, "deaths": 260, "recoveries": 6350 },
            { "time": "2021-10", "cases": 10020, "deaths": 290, "recoveries": 6550 },
            { "time": "2021-11", "cases": 11190, "deaths": 330, "recoveries": 6250 },
            { "time": "2021-12", "cases": 10610, "deaths": 370, "recoveries": 6050 },
            { "time": "2022-01", "cases": 11370, "deaths": 420, "recoveries": 6400 },
            { "time": "2022-02", "cases": 10350, "deaths": 435, "recoveries": 6500 },
            { "time": "2022-03", "cases": 10140, "deaths": 480, "recoveries": 6600 },
            { "time": "2022-04", "cases": 9950, "deaths": 510, "recoveries": 6750 },
            { "time": "2022-05", "cases": 9900, "deaths": 560, "recoveries": 6850 },
            { "time": "2022-06", "cases": 9860, "deaths": 600, "recoveries": 6950 }
        ]
    }
]

export default data;