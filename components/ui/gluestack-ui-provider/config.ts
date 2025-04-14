"use client";
import { vars } from "nativewind";

export const config = {
  light: vars({
    "--color-primary-0": "234 242 242",
    "--color-primary-50": "213 229 228",
    "--color-primary-100": "175 207 203",
    "--color-primary-200": "138 185 179",
    "--color-primary-300": "102 161 154",
    "--color-primary-400": "70 137 129",
    "--color-primary-500": "47 93 98", // Base: #2F5D62
    "--color-primary-600": "37 74 78",
    "--color-primary-700": "27 55 58",
    "--color-primary-800": "18 36 38",
    "--color-primary-900": "9 17 19",
    "--color-primary-950": "5 9 10",

    /* Secondary  */
    "--color-secondary-0": "250 248 245",
    "--color-secondary-50": "245 241 236",
    "--color-secondary-100": "239 232 222",
    "--color-secondary-200": "228 219 205",
    "--color-secondary-300": "217 206 188",
    "--color-secondary-400": "206 193 171",
    "--color-secondary-500": "195 180 154", // Base: #C3B896
    "--color-secondary-600": "176 162 139",
    "--color-secondary-700": "156 144 123",
    "--color-secondary-800": "137 126 108",
    "--color-secondary-900": "117 108 92",
    "--color-secondary-950": "98 90 77",

    /* Tertiary */
    "--color-tertiary-0": "255 243 240",
    "--color-tertiary-50": "255 231 224",
    "--color-tertiary-100": "255 212 198",
    "--color-tertiary-200": "255 190 168",
    "--color-tertiary-300": "255 161 130",
    "--color-tertiary-400": "255 140 105",
    "--color-tertiary-500": "255 123 84",
    "--color-tertiary-600": "230 111 76",
    "--color-tertiary-700": "204 98 67",
    "--color-tertiary-800": "179 86 59",
    "--color-tertiary-900": "153 74 50",
    "--color-tertiary-950": "128 62 42",

    /* Error */
    "--color-error-0": "253 240 239",
    "--color-error-50": "251 224 223",
    "--color-error-100": "248 198 196",
    "--color-error-200": "243 168 165",
    "--color-error-300": "236 131 127",
    "--color-error-400": "227 99 95",
    "--color-error-500": "217 83 79",
    "--color-error-600": "195 75 71",
    "--color-error-700": "173 66 63",
    "--color-error-800": "152 58 55",
    "--color-error-900": "130 50 47",
    "--color-error-950": "109 42 39",

    /* Success */
    "--color-success-0": "240 249 240",
    "--color-success-50": "225 241 225",
    "--color-success-100": "199 228 199",
    "--color-success-200": "169 214 169",
    "--color-success-300": "134 197 134",
    "--color-success-400": "105 184 105",
    "--color-success-500": "92 184 92",
    "--color-success-600": "83 166 83",
    "--color-success-700": "74 147 74",
    "--color-success-800": "65 129 65",
    "--color-success-900": "55 110 55",
    "--color-success-950": "46 92 46",

    /* Warning */
    "--color-warning-0": "254 248 239",
    "--color-warning-50": "253 241 223",
    "--color-warning-100": "251 229 196",
    "--color-warning-200": "248 215 164",
    "--color-warning-300": "245 197 126",
    "--color-warning-400": "242 183 97",
    "--color-warning-500": "240 173 78",
    "--color-warning-600": "216 156 70",
    "--color-warning-700": "192 138 62",
    "--color-warning-800": "168 121 54",
    "--color-warning-900": "144 104 47",
    "--color-warning-950": "120 86 39",

    /* Info */
    "--color-info-0": "240 249 252",
    "--color-info-50": "224 242 248",
    "--color-info-100": "197 231 241",
    "--color-info-200": "165 218 233",
    "--color-info-300": "127 202 223",
    "--color-info-400": "100 191 215",
    "--color-info-500": "91 192 222",
    "--color-info-600": "82 173 200",
    "--color-info-700": "73 154 178",
    "--color-info-800": "64 134 156",
    "--color-info-900": "54 115 133",
    "--color-info-950": "45 96 111",

    /* Typography */
    "--color-typography-0": "255 255 255",
    "--color-typography-50": "245 245 245",
    "--color-typography-100": "229 229 229",
    "--color-typography-200": "204 204 204",
    "--color-typography-300": "179 179 179",
    "--color-typography-400": "153 153 153",
    "--color-typography-500": "128 128 128",
    "--color-typography-600": "102 102 102", // Text Secondary Light
    "--color-typography-700": "77 77 77",
    "--color-typography-800": "51 51 51", // Text Primary Light
    "--color-typography-900": "26 26 26",
    "--color-typography-950": "10 10 10",

    /* Outline */
    "--color-outline-0": "250 250 250",
    "--color-outline-50": "240 240 240",
    "--color-outline-100": "230 230 230", // Border Light
    "--color-outline-200": "220 220 220",
    "--color-outline-300": "210 210 210",
    "--color-outline-400": "190 190 190",
    "--color-outline-500": "170 170 170",
    "--color-outline-600": "150 150 150",
    "--color-outline-700": "130 130 130",
    "--color-outline-800": "110 110 110",
    "--color-outline-900": "90 90 90",
    "--color-outline-950": "70 70 70",

    /* Background */
    "--color-background-0": "255 255 255", // Surface Light
    "--color-background-50": "250 250 250",
    "--color-background-100": "248 248 248", // Background Light
    "--color-background-200": "242 242 242",
    "--color-background-300": "237 237 237",
    "--color-background-400": "230 230 230",
    "--color-background-500": "224 224 224",
    "--color-background-600": "217 217 217",
    "--color-background-700": "209 209 209",
    "--color-background-800": "199 199 199",
    "--color-background-900": "189 189 189",
    "--color-background-950": "179 179 179",
    "--color-background-error": "253 240 239",
    "--color-background-warning": "254 248 239",
    "--color-background-success": "240 249 240",
    "--color-background-muted": "245 245 245",
    "--color-background-info": "240 249 252",

    /* Focus Ring Indicator  */
    "--color-indicator-primary": "47 93 98",
    "--color-indicator-info": "91 192 222",
    "--color-indicator-error": "217 83 79",
  }),
  dark: vars({
    /* Primary (Lighter Teal) */
    "--color-primary-50": "10 28 27", // Darkest
    "--color-primary-100": "19 55 53",
    "--color-primary-200": "38 107 103",
    "--color-primary-300": "57 158 153",
    "--color-primary-400": "76 210 203", // Lighter shade 
    "--color-primary-500": "104 176 171", // Base: #68B0AB
    "--color-primary-600": "131 191 187",
    "--color-primary-700": "159 207 204",
    "--color-primary-800": "186 222 220",
    "--color-primary-900": "214 238 237",
    "--color-primary-950": "230 245 244", // Lightest

    /* Secondary (Muted Brown) */
    "--color-secondary-50": "30 24 20", // Darkest
    "--color-secondary-100": "59 48 39",
    "--color-secondary-200": "115 93 77",
    "--color-secondary-300": "171 139 115",
    "--color-secondary-400": "227 185 153", // Lighter shade
    "--color-secondary-500": "169 139 116", // Base: #A98B74
    "--color-secondary-600": "180 151 130",
    "--color-secondary-700": "191 164 144",
    "--color-secondary-800": "202 177 159",
    "--color-secondary-900": "224 203 188",
    "--color-secondary-950": "237 222 211", // Lightest

    /* Tertiary (Accent - Lighter Coral) */
    "--color-tertiary-50": "51 10 5", // Darkest
    "--color-tertiary-100": "102 21 11",
    "--color-tertiary-200": "204 41 22",
    "--color-tertiary-300": "255 77 55",
    "--color-tertiary-400": "255 118 99", // Lighter shade
    "--color-tertiary-500": "255 154 139", // Base: #FF9A8B
    "--color-tertiary-600": "255 175 161",
    "--color-tertiary-700": "255 196 184",
    "--color-tertiary-800": "255 217 207",
    "--color-tertiary-900": "255 238 230",
    "--color-tertiary-950": "255 247 243", // Lightest

    /* Error (Lighter Soft Red) */
    "--color-error-0": "61 15 15", // Darkest
    "--color-error-50": "106 26 26",
    "--color-error-100": "150 38 38",
    "--color-error-200": "195 50 50",
    "--color-error-300": "212 83 83",
    "--color-error-400": "221 99 99",
    "--color-error-500": "229 115 115", // Base: #E57373
    "--color-error-600": "234 137 137",
    "--color-error-700": "238 158 158",
    "--color-error-800": "243 180 180",
    "--color-error-900": "249 213 213",
    "--color-error-950": "252 230 230", // Lightest

    /* Success (Keep existing dark success) */
    "--color-success-0": "27 50 36",
    "--color-success-50": "20 83 45",
    "--color-success-100": "22 101 52",
    "--color-success-200": "32 111 62",
    "--color-success-300": "42 121 72",
    "--color-success-400": "52 131 82",
    "--color-success-500": "72 151 102",
    "--color-success-600": "102 181 132",
    "--color-success-700": "132 211 162",
    "--color-success-800": "162 241 192",
    "--color-success-900": "202 255 232",
    "--color-success-950": "228 255 244",

    /* Warning (Sandy Brown) */
    "--color-warning-0": "62 33 15", // Darkest
    "--color-warning-50": "109 58 26",
    "--color-warning-100": "156 83 37",
    "--color-warning-200": "203 108 48",
    "--color-warning-300": "224 135 73",
    "--color-warning-400": "234 149 85",
    "--color-warning-500": "244 162 97", // Base: #F4A261
    "--color-warning-600": "246 175 119",
    "--color-warning-700": "248 188 141",
    "--color-warning-800": "250 201 163",
    "--color-warning-900": "253 227 207",
    "--color-warning-950": "254 239 226", // Lightest

    /* Info (Keep existing dark info) */
    "--color-info-0": "3 38 56",
    "--color-info-50": "5 64 93",
    "--color-info-100": "7 90 131",
    "--color-info-200": "9 115 168",
    "--color-info-300": "11 141 205",
    "--color-info-400": "13 166 242",
    "--color-info-500": "50 180 244",
    "--color-info-600": "87 194 246",
    "--color-info-700": "124 207 248",
    "--color-info-800": "162 221 250",
    "--color-info-900": "199 235 252",
    "--color-info-950": "236 248 254",

    /* Typography (Light Greys/Near White) */
    "--color-typography-0": "10 10 10", // Near Black (for contrast if needed)
    "--color-typography-50": "40 40 40",
    "--color-typography-100": "70 70 70",
    "--color-typography-200": "100 100 100",
    "--color-typography-300": "130 130 130",
    "--color-typography-400": "160 160 160", // Text Secondary: #A0A0A0
    "--color-typography-500": "175 175 175",
    "--color-typography-600": "190 190 190",
    "--color-typography-700": "205 205 205",
    "--color-typography-800": "224 224 224", // Text Primary: #E0E0E0
    "--color-typography-900": "235 235 235",
    "--color-typography-950": "245 245 245", // Near White: #F5F5F5

    /* Outline (Medium Dark Grey) */
    "--color-outline-0": "10 10 10", // Darkest
    "--color-outline-50": "25 25 25",
    "--color-outline-100": "40 40 40",
    "--color-outline-200": "55 55 55",
    "--color-outline-300": "66 66 66", // Base: #424242
    "--color-outline-400": "80 80 80",
    "--color-outline-500": "95 95 95",
    "--color-outline-600": "110 110 110",
    "--color-outline-700": "125 125 125",
    "--color-outline-800": "140 140 140",
    "--color-outline-900": "170 170 170",
    "--color-outline-950": "200 200 200", // Lightest

    /* Background */
    "--color-background-0": "10 10 10", // Darkest
    "--color-background-50": "18 18 18",
    "--color-background-100": "26 26 26", // Base Background: #1A1A1A
    "--color-background-200": "33 33 33",
    "--color-background-300": "44 44 44", // Surface: #2C2C2C
    "--color-background-400": "55 55 55",
    "--color-background-500": "66 66 66",
    "--color-background-600": "77 77 77",
    "--color-background-700": "88 88 88",
    "--color-background-800": "99 99 99",
    "--color-background-900": "115 115 115",
    "--color-background-950": "130 130 130", // Lightest Grey

    /* Background Special */
    "--color-background-error": "61 15 15", // Match Error-0
    "--color-background-warning": "62 33 15", // Match Warning-0
    "--color-background-success": "27 50 36", // Match Success-0
    "--color-background-muted": "44 44 44", // Match Background-300 (Surface)
    "--color-background-info": "3 38 56", // Match Info-0

    /* Focus Ring Indicator */
    "--color-indicator-primary": "131 191 187", // Match Primary-600
    "--color-indicator-info": "87 194 246", // Match Info-600
    "--color-indicator-error": "234 137 137", // Match Error-600
  }),
};

// export default config;
