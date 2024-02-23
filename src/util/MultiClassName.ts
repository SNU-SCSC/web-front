/**
 * Joins classnames excluding falsy values. That is, if the className is provided as false value, it will be ignored in the joining process.
 * Usage should be like this:
 * ```ts
 * MultiClassName([
 *    "className1",
 *     (1 == 2) && "className2",
 *     (1 == 1) && "className3",
 *     undefined,
 * ]) -> emits "className1 className3"
 * ```
 * @param cnlist The list of classnames to join
 * @returns The joined classnames
 */
export default function MultiClassName(cnlist: any[] = [""]) {
    return cnlist.filter((cn) => cn).join(" ");
}