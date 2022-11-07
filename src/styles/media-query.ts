const breakpoints: { [index: string]: number } = {
    sm: 580,
    md: 768,
    lg: 1024,
    xl: 1380,
};

export const mq = Object.keys(breakpoints)
    .map(key => [key, breakpoints[key]] as [string, number])
    .reduce((prev, [key, breakpoint]) => {
        prev[key] = `@media (max-width: ${breakpoint}px)`;
        return prev;
    }, {} as { [index: string]: string });
