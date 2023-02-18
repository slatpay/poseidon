import { colors, fonts, fontSizes, fontWeights, lineHeights, radii, space } from "@slat-ui/tokens";
import { createStitches, defaultThemeMap } from "@stitches/react";

export const {
    styled,
    css,
    globalCss,
    keyframes,
    getCssText,
    theme,
    createTheme,
    config,
    
} = createStitches({
    theme: {
        colors,
        fonts,
        fontSizes,
        fontWeights,
        space,
        lineHeights,
        radii,
    },
    themeMap: {
        ...defaultThemeMap,
        height: 'space',
        width: 'space', 
    }
})