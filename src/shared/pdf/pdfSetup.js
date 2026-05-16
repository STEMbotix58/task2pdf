import { Font } from "@react-pdf/renderer";

Font.registerHyphenationCallback((word) => [word]);
