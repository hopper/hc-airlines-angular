export class StringUtils {

    public static leftPad(value: string, character: string, size: number): string {
        while (value.length < size) value = character + value;
        return value;
    }

    /**
     * Check if a given string is not empty
     * @param value string
     */
    public static isNotEmpty(value: string | undefined): boolean {
        if (value && value !== null && value.length > 0) {
            return true;
        }
        return false;
    }

    /**
     * Check if a given string is empty
     * @param value string
     */
    public static isEmpty(value: string| undefined): boolean {
        return !StringUtils.isNotEmpty(value);
    }
}