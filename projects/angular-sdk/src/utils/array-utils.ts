export class ArrayUtils {

    /**
     * Check if a given array contains a given value
     * @param arrayObj array
     * @param value value
     */
    public static contains(arrayObj: any[], value: any): boolean {
      let result = false;
      if (arrayObj && arrayObj.indexOf(value) > -1) {
          result = true;
      }
      return result;
    }
  
    /**
     * Check if a given array is undefined
     * @param arrayObj array
     */
    public static isUndefined(arrayObj: any[]): boolean {
      return (!arrayObj || arrayObj === undefined);
    }
  
    /**
     * Check if a given array is not empty
     * @param arrayObj array
     */
    public static isNotEmpty(arrayObj: any[]): boolean {
      return (arrayObj && arrayObj !== null && arrayObj.length > 0);
    }
  
    /**
     * Check if a given array is empty
     * @param arrayObj array
     */
    public static isEmpty(arrayObj: any[]): boolean {
      return !ArrayUtils.isNotEmpty(arrayObj);
    }
  }