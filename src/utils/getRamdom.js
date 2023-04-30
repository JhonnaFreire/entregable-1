export const getRamdomNumber = (number) => {
    const ramdom = Math.random();
    const roundedRamdom = Math.round(ramdom * number);

    return roundedRamdom;
};