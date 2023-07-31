import { setTimeout } from "node:timers/promises";

export function sleep(timeInSeconds: number, signal?: AbortSignal): Promise<void> {
	return setTimeout<void>(timeInSeconds * 1000, undefined, {
		signal,
	});
}
