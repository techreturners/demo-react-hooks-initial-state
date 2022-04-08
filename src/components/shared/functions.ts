// we would never do this in real life, but for demos it's sometimes good to slow things down
// so here's a little function we can use to artificially make our requests take longer
export const sleep = (milliseconds: number) => {
	return new Promise((resolve) => setTimeout(resolve, milliseconds));
};
