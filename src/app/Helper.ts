export class Helper {
  // FIXME it does not work! it print the inner func as native code
  static toTitleCase(str: string): string {
    return str.replace(/\w\S*/g, (txt) =>
      txt.charAt(0).toUpperCase + txt.substr(1).toLowerCase()
    );
  }
}
