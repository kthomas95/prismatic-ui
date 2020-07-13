export const colorTypes = [
    "primary",
    "secondary",
    "success",
    "warning",
    "danger",
    "error",
    "background",
    "text"
];
export const colorScales = (color: string) => [
    { bg: `${color}.verylight`, color: `${color}.dark` },
    { bg: `${color}.light`, color: `${color}.dark` },
    { bg: `${color}.main`, color: `${color}.text` },
    { bg: `${color}.dark`, color: `${color}.verylight` },
    { bg: `${color}.text`, color: `${color}.verylight` }
];
