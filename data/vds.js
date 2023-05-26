const volvoVDS = {
    first: {
        '-99': {
            a: '240',
            b: '260',
            d: '1983-85 700 sedan',
            e: '480',
            f: '740',
            g: '760',
            h: '780',
            j: '940',
            k: '440, 960',
            l: '460, 850'
        },
        '99-': {
            a: {
                'pre-15': 's80',
                'post-15': 'xc90'
            },
            b: 'v70/xc70',
            c: 'xc90',
            d: 'xc60',
            f: 's60/v60',
            g: 'v60 plug-in hybrid',
            k: 's90/v90',
            l: 's70/v70',
            m: {
                'pre-13': 's40/v50/c30/c70',
                '13-': 'v40'
            },
            n: 'c70 (1st gen)',
            r: 's60',
            s: 'v70/xc70',
            t: 's80',
            v: 's40/v40 (1st gen)'
        }
    },
    second: {
        '-92': {
            a: 'Air bag + 3-point safety harness(seat belt)',
            c: 'Air bag + 3-point safety harness(seat belt) + seat belt tensioners',
            x: '3-point safety harness(seat belt)',
            y: '3-point safety harness(seat belt) + seat belt tensioners'
        },
        '92-98': {
            s: 'Sedan(4-door) with Air Bag & 3-Point Safety Harness(Seat Belt)',
            w: 'Wagon(5-door) with Air Bag & 3-Point Safety Harness(Seat Belt)',
            t: 'Sedan(4-door) 3-Point Safety Harness(Seat Belt)-Canada',
            x: 'Wagon(5-door) 3-Point Safety Harness(Seat Belt)-Canada'
        },
        '99-13': {
            c: 'All-New C70',
            h: 'S40 AWD, S60 AWD, S80 AWD',
            j: 'V50 AWD, V70 AWD',
            k: 'C30 FWD',
            l: 'XC60 2WD',
            m: 'XC90 5-Seater AWD',
            n: 'XC90 5-Seater FWD',
            r: 'XC90 5-Seater AWD',
            s: 'S40 FWD, S60 FWD, S80 FWD',
            t: 'XC90 R-Design',
            v: 'V40 FWD',
            w: 'V50 FWD, V60 FWD, V60 AWD, V60 Plug-In Hybrid(AWD), V70 FWD, V70 AWD',
            y: 'XC90 7-Seater FWD',
            z: 'XC60 AWD, XC70 AWD, XC90 7-Seater AWD'
        },
        '13-': {
            m: 'V40 Cross Country AWD'
        }
    },
    third_fourth: {
        '11': 'B17A',
        '15': 'B20F',
        '16': 'B4204S',
        '20': 'B200G',
        '21': 'B19A, B200FT',
        '22': 'B200GT',
        '24': 'B19E / B200E',
        '25': 'B204FT',
        '26': 'B19ET',
        '27': 'B200F',
        '37': 'D20',
        '41': 'B21A',
        '44': 'B21E',
        '45': 'B21F(1976 - 81 US, 1976 - 80 CDN, 1976 - 84 JAPAN)',
        '46': 'B21ET',
        '47': 'B21FT',
        '48': 'B21F - LH(LH - Jet 1.0)',
        '49': 'B21F - MPG(1981 - 82)',
        '61': 'B27A',
        '62': 'B28A',
        '64': 'B27E',
        '65': 'B27F',
        '68': 'B28E, B280E',
        '69': 'B28F, B280F',
        '74': 'D24 TIC with EGR',
        '75': 'D24 TIC without EGR',
        '76': 'D24T',
        '77': 'D24(1980 - 1984)',
        '80': 'B230G',
        '81': 'B23A, B230A, B230FK',
        '82': 'B230GT, B230FD(LH 3.1)',
        '83': 'B230FD w/ pulsair(LH 2.4)',
        '84': 'B23E, B230E, B230GK',
        '85': 'B230FB',
        '86': 'B23ET, B230ET(1983- 88), B230FT - EGR(1994 - 98 ?)',
        '87': 'B23FT(LH 2.1), B230FT(LH 2.2, 2.4) - non EGR(1984 - 98)',
        '88': 'B23F(1983 - 1984 - LH 2.0), B230F(1985 - 95 - LH 2.2, 2.4)',
        '89': 'B234F',
        '92': 'B6244F',
        '93': 'B6254F',
        '95': 'B6304F / S 1992 - 94',
        '96': 'B6304S 1995 - 98',
        '98': 'N6304G',
        '99': 'B6254G',
        '11': '12 = B4164 1995 - 2004 105HK',
        '10': 'B4164S2 2000 - 2004 109HK',
        '13': 'B4184SM 1998 - 2000 125HK',
        '15': 'B4184S3',
        '12': 'B4184S 1, 8 1995 - 1999 115HK',
        '14': 'B4184S2 1, 8 2000 - 2004 122HK',
        '26': 'B4184SJ 1, 8i 1995 - 2004 125HK',
        '28': 'B4184S10',
        '30': 'B4184S9',
        '16': 'B4204S 2, 0 1995 - 2004 137HK',
        '17': 'B4204S2 2, 0 1995 - 2004 136HK',
        '19': 'B4204T 2, 0T 1998 160HK',
        '25': 'B4204T2 2, 0T 1999 - 2000 160HK',
        '29': 'B4204T3 2, 0T 2001 - 2004 160HK',
        '27': 'B4204T4',
        '18': 'B4194T T4 1998 - 1999 200HK',
        '24': 'B4194T2 2000 200HK',
        '37': 'B4194T5 2001 - 2004 200HK',
        '73': 'D4192T2 1, 9d 1999 - 2001 95HK',
        '78': 'D4192T4 D 2001 - 2004 102HK',
        '70': 'D4192T3 1, 9D 2001 - 2004 115HK',
        '04': 'B4204S4 C30 / S40 / V50 / V70 2.0 Flexifuel FWD',
        '08': 'B4184S8 C30 / S40 / V50 / V70 1.8 Flexifuel FWD',
        '17': 'B4204S2 V40 2.0l FWD',
        '18': 'B4194T V40 1.9l Turbo FWD',
        '20': 'B4164S3 C30 1.6 FWD',
        '21': 'B4184S11 V50 / S40 1.8',
        '30': 'D5244T18 XC90 2.4 AWD',
        '31': 'D5204T7 XC60',
        '38': 'B5244S4 C30 / S40 / V50 2.4i FWD',
        '39': 'B5244S7 S40 / V50 2.4i FWD',
        '40': 'B4204T11 S60 / V60 2.0 T5 FWD',
        '41': 'B5202S 850 / V70 2.0i FWD',
        '43': 'B5204T3 850 / V70 / S80 2.0 T5 FWD, or B4204S3 S80(2.0F 2007 - 2010)',
        '47': 'B5204T 850 / V70 2.0 T5 FWD',
        '50': 'B5234T4 V70 R AWD',
        '51': 'B5252S 850 / V70 2.5i FWD or D5204T6 V40 / V40CC D3 / D4',
        '52': 'B5254T4 S60 / V70 R AWD',
        '53': 'B5234T3 S60 / V70 T5 FWD',
        '54': 'B5244T5 S60 T5 FWD',
        '55': 'B5254S; B5254FS 850 / V70 / S70 FWD',
        '56': 'B5254T S70 / V70 GLT FWD V70 XC AWD - 1999',
        '56': 'B5244T 2000 -',
        '57': 'B5234T 850 / V70 2.3T FWD Turbo',
        '58': 'B5234T5 1995 - 1997 850 T - 5R / R; B5244T3 S60 / V70 / S80 / XC70 2000 -',
        '59': 'B5254T2 S80 / S60 / XC90 2.5T FWD / AWD, V70 2.5T FWD, XC70 AWD',
        '60': 'B5254T10 V70 / S80 2.5t FWD / AWD',
        '61': 'B5244S S60 / V70 2.4 FWD',
        '64': 'B5244S6 S60 / V70 2.4 FWD',
        '65': 'B5244S2 S80 / V70 / S60 2.4 FWD',
        '66': 'B5244S5 S40 / V50 2.4 FWD',
        '67': 'B5254T7 C30 / C70 / V50 T5 FWD / AWD',
        '68': 'B5254T3 S40 / V50 T5 FWD / AWD',
        '69': 'D5244T5 S80 / V70 2.4D FWD',
        '70': 'D4192T3 S40 / V40',
        '70': 'D5244T10 XC60 AWD D5(205)',
        '71': 'D5244T4 V70 AWD D5(185), XC90 AWD D5(185)',
        '72': 'D5252T S70 / S80 2.5TDi FWD',
        '73': 'D4204T5 S60 / V60',
        '73': 'D4192T2 S40 / V40',
        '74': 'D5244T2',
        '75': 'D4204T C30 2.0D',
        '76': 'D4164T V50, 1.6D(PSA - Ford Engine)',
        '77': 'D5244T8 S40 D5 AT',
        '78': 'D4192T4 S40 / V40',
        '79': 'D5244T D5(163)',
        '81': 'D5244T7 V70 2, 4 D5 93kW(2005 - 2007)',
        '82': 'D5244T15 XC60 / V60 AWD D5(215)',
        '84': 'D4162T C30, V50, V70, S60 1.6D / DRIVe(PSA - Ford Engine)',
        '85': 'B8444S XC90 / S80 V8 AWD',
        '88': 'D5204T3 XC60',
        '90': 'B6284T S80 2.8 T6',
        '91': 'B6294T S80 / XC90 2.9 T6',
        '94': 'B6294S S80 2.9 FWD',
        '97': 'B6304S S80 2.9 FWD',
        '98': 'B6324S XC90 / S80 / V70 3.2 FWD / XC70 AWD',
        '99': 'B6304T4 S80 3.0 T6 AWD',
        'A0': 'B4204T43 S60 / V60 Polestar 2.0L(362 hp)',
        'A2': 'B4204T27 S60 / V60, XC60, S90 / V90, XC90 2.0 T6(320 hp)',
        'A3': 'B4204T29 S60 / V60, XC60, S90 / V90, XC90 2.0 T6(310 hp)',
        'A4': 'D4204T11 S60 / V60, XC90 D5',
        'A5': 'D5244T21 V60 2.4 D4',
        'A6': 'D4204T12 XC40 D4',
        'A8': 'D4204T14 V40, V60, 2.0 D4',
        'A9': 'B6304T5 S60 / V60 Polestar 3.0L(350 hp)',
        'AA': 'D82PHEV V60 Plug - In Hybrid',
        'AC': 'B4204T47 XC40 T4'
    },
    fifth: {
        '1981-1991': {
            '2': '2 Door / 2 Door Coupe(US/ Canada Bertone)',
            '4': '4 Door',
            '5': '5 Door(Wagon)',
            '7': '2 Door Coupe(Bertone - European market)'
        },
        '92-': {
            '0': 'non - EGR / Engine codes 82, 83, 87, 88; SULEV + (Super Ultra Low Emissions Vehicle) / Engine Codes 39, 55, 64, 72',
            '1': 'EGR / Engine codes 82, 83, 86, 88',
            '2': 'ULEV2(Ultra Low Emissions Vehicle) / Engine Codes 38, 41, 51, 59, 61, 67, 68, 85, 98, 99',
            '4': 'Engine Codes 71',
            '7': 'LEV2(Low Emissions Vehicle) / Engine Codes 52, 54',
            '8': 'Engine Codes 70',
            'C': 'EURO 6',
            'D': 'L6'
        }
    },
    sixth: {
        // if USA/CDN this is check code
        /*
            700/900/90 series gearbox
    1 = M90 manual
    2 = M46 Manual
    3 = M47 Manual
    5 = ZF22
    6 = AW70/71/72 lock-up
    7 = AW70/71 no lock-up
    850/60/70/80 series
    1 = M59 manual
    2 = M56 Manual
    3 = M58 Manual
    4 = M66 Manual
    5 = AW55-51SN Auto
    6 = AW42 Auto
    7 = AW50AWD Auto
    8 = AW42AWD Auto
    9 = AW55-50SN Auto C30/V50, AW55-51 S40D5 AT
    2 = MTX75 Manual
        */
    },
    seventh: {
        // year model code
    },
    eight: {
        // assembly plant
        '0': '[Sweden] Kalmar Plant',
        '1': '[Sweden] Torslanda Plant VCT 21(Volvo Torslandaverken) (Gothenburg)',
        '2': '[Belgium] Ghent Plant VCG 22',
        '3': '[Canada] Halifax Plant',
        '4': '[Italy] - Bertone models 240(european market?)',
        '5': '[Malaysia]',
        '6': '[Australia]',
        '7': '[Indonesia]',
        'A': 'Sweden] Uddevalla Plant(Volvo Cars/ TWR(Tom Walkinshaw Racing))',
        'B': '[Italy] - Bertone Chongq 31',
        'D': '[Italy] - Bertone models 262C(US / CDN), 780',
        'E': '[Singapore]',
        'F': '[The Netherlands] Born Plant(NEDCAR)',
        'G': '[United States] Charleston Plant',
        'J': '[Sweden] Uddevalla Plant VCU 38(Volvo Cars / Pininfarina Sverige AB)',
        'M': 'PVÖ 53'
    }
}