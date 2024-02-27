import React from "react";

/**
 * Joins styles excluding falsy values. That is, if the style is provided as false value, it will be ignored in the joining process.
 * Usage should be like this:
 * ```ts
 * MultiStyles([
 *     { color: "red" },
 *     { backgroundColor: "blue" },
 *     (1 == 2) && { fontSize: "12px" },
 * ]) -> emits { color: "red", backgroundColor: "blue" }
 * ```
 * @param stlist The list of styles to join
 * @returns The joined styles
 */
export default function MultiStyles(stlist: (React.CSSProperties | undefined | false | null)[]) {
    return stlist.reduce((acc, st) => {
        if (st) return { ...acc, ...st };
        else return acc;
    }) as React.CSSProperties;
}