import { setTimeout } from "node:timers/promises";

export async function sleep(timeInSeconds: number, signal?: AbortSignal): Promise<void> {
	await setTimeout(timeInSeconds * 1000, undefined, {
		signal,
	});
}
