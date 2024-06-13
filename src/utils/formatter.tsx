export const formatCurrency = (value: string | number): string => {
    const formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
    });

    return formatter.format(Number(value));
};
