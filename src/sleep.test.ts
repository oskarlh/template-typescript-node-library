import { sleep } from "./sleep.js";

describe(sleep.name, () => {
	it("resolves", async () => {
		await expect(sleep(0)).resolves.toStrictEqual(undefined);
	});
});
