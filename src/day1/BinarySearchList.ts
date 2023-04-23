export default function bs_list(haystack: number[], needle: number): boolean {
    let low = 0;
    let high = haystack.length;
    do {
        const mid = Math.floor(low + (high - low) / 2);

        const midValue = haystack[mid];

        if (midValue === needle) {
            return true;
        } else if (midValue < needle) {
            low = mid + 1;
        } else {
            high = mid;
        }
    } while (low < high);
    return false;
}