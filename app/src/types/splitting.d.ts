declare module 'splitting' {
  interface SplittingOptions {
    target?: Element | Element[] | string;
    by?: string;
    key?: string;
  }

  interface SplittingResult {
    el: Element;
    chars: Element[];
    words: Element[];
  }

  function Splitting(options?: SplittingOptions): SplittingResult[];
  export default Splitting;
}

declare module 'splitting/dist/splitting.css' {
  const content: string;
  export default content;
}
