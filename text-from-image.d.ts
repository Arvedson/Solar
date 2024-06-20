declare module 'text-from-image' {
    function textFromImage(imagePath: string): Promise<string>;
    export = textFromImage;
  }
  