// import { BaseTheme } from "./base-theme";
// import { Theme, ThemeSet } from "./theme";

// const darks = [
//     "hsl(230, 30%, 5%)",
//     "hsl(230, 25%, 8%)",
//     "hsl(230, 21%, 11%)", // Night.Background.Dark // Day.Text.Dark
//     "hsl(230, 18%, 15%)", // Night.Background.Main
//     "hsl(230, 16%, 21%)", // Night.Background.Light
//     "hsl(230, 14%, 26%)", // Day.Text.Main
//     "hsl(230, 12%, 31%)", // Night.Background.VeryLight
//     "hsl(230, 8%, 40%)", // Day.Text.Light
//     "hsl(230, 8%, 63%)" // Day.Text.VeryLight
// ];

// const lights = [
//     "hsl(230, 2%, 98%)",
//     "hsl(230, 2%, 95%)",
//     "hsl(230, 2%, 90%)",
//     "hsl(230, 2%, 86%)",
//     "hsl(230, 2%, 83%)",
//     "hsl(230, 2%, 80%)",
//     "hsl(230, 2%, 76%)",
//     "hsl(230, 2%, 72%)",
//     "hsl(230, 2%, 67%)",
//     "hsl(230, 2%, 62%)",
//     "hsl(230, 2%, 57%)"
// ];

// const DayMode = {
//     text: {
//         verylight: darks[8],
//         light: darks[7],
//         main: darks[5],
//         dark: darks[2],
//         verydark: darks[1],
//         text: lights[0]
//     },
//     background: {
//         verylight: lights[0],
//         light: lights[1],
//         main: lights[2],
//         dark: lights[3],
//         verydark: lights[4],
//         text: darks[2]
//     }
// };

// const NightMode = {
//     background: {
//         verylight: darks[6],
//         light: darks[4],
//         main: darks[3],
//         dark: darks[2],
//         verydark: darks[0],
//         text: lights[0]
//     },
//     text: {
//         verylight: lights[10],
//         light: lights[7],
//         main: lights[3],
//         dark: lights[2],
//         verydark: lights[0],
//         text: darks[0]
//     }
// };

// // const primary = {
// //     verylight: "hsl(245, 70%, 76%)",
// //     light: "hsl(245, 66%, 72%)",
// //     main: "hsl(245, 52%, 55%)",
// //     dark: "hsl(245, 47%, 50%)",
// //     text: "hsl(245, 85%, 97%)"
// // };

// const primary = {
//     verylight: "hsl(255, 68%, 78%)",
//     light: "hsl(255, 62%, 72%)",
//     main: "hsl(255, 33%, 63%)",
//     dark: "hsl(255, 50%, 25%)",
//     text: "hsl(255, 10%, 10%)",
//     lightalpha: "hsla(255, 43%, 60%, .15)",
//     darkalpha: "hsla(255, 43%, 60%, .3)"
//     // text: "hsl(255, 97%, 98%)"
// };

// const secondary = {
//     verylight: "hsl(169, 30%, 82%)",
//     light: "hsl(169, 35%, 75%)",
//     main: "hsl(169, 33%, 65%)",
//     dark: "hsl(169, 45%, 20%)",
//     lightalpha: "hsla(169, 33%, 65%, .15)",
//     darkalpha: "hsla(169, 33%, 65%, .3)",
//     text: "hsl(169, 45%, 10%)"
//     // text: "hsl(179, 85%, 97%)"
// };

// const error = {
//     verylight: "hsl(3, 74%, 84%)",
//     light: "hsl(3, 71%, 76%)",
//     main: "hsl(3, 52%, 60%)",
//     dark: "hsl(3, 80%, 20%)",
//     lightalpha: "hsla(3, 52%, 60%, .15)",
//     darkalpha: "hsla(3, 52%, 60%, .3)",
//     text: "hsl(3, 80%, 10%)"
//     // text: "hsl(3, 85%, 97%)"
// };

// const success = {
//     verylight: "hsl(132, 47%, 72%)",
//     light: "hsl(132, 53%, 65%)",
//     main: "hsl(138, 35%, 58%)",
//     lightalpha: "hsla(132, 45%, 48%, .15)",
//     darkalpha: "hsla(132, 45%, 48%, .3)",
//     dark: "hsl(132, 45%, 17%)",
//     text: "hsl(132, 45%, 10%)"
//     // text: "hsl(129, 85%, 97%)"
// };

// const danger = {
//     verylight: "hsl(22, 80%, 72%)",
//     light: "hsl(22, 75%, 67%)",
//     main: "hsl(22, 53%, 61%)",
//     lightalpha: "hsla(22, 43%, 61%, .15)",
//     darkalpha: "hsla(22, 43%, 61%, .3)",
//     dark: "hsl(22, 80%, 18%)",
//     text: "hsl(22, 80%, 0%)"
//     // text: "hsl(22, 85%, 97%)"
// };

// const warning = {
//     verylight: "hsl(54, 94%, 77%)",
//     light: "hsl(54, 91%, 71%)",
//     main: "hsl(54, 66%, 68%)",
//     lightalpha: "hsla(54, 66%, 68%, .25)",
//     darkalpha: "hsla(54, 66%, 68%, .5)",
//     dark: "hsl(54, 100%, 14%)",
//     text: "hsl(54, 100%, 14%)"
// };

// const Prismatic: ThemeSet = {
//     day: {
//         ...BaseTheme,
//         colors: {
//             primary,
//             secondary,
//             error,
//             success,
//             danger,
//             warning,
//             ...DayMode
//         }
//     },
//     night: {
//         ...BaseTheme,
//         colors: {
//             primary,
//             secondary,
//             error,
//             success,
//             danger,
//             warning,
//             ...NightMode
//         }
//     }
// };
