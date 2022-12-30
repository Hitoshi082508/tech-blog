module.exports = {
  typescript: true,
  svgProps: {
    fill: '{fill ? theme.color[fill] : "none"}',
    stroke: '{stroke ? theme.color[stroke] : "none"}',
  },
  svgoConfig: {
    plugins: [
      { name: 'removeAttrs', params: { attrs: '(fill|stroke|height|width)' } },
      {
        name: 'preset-default',
        params: {
          overrides: {
            removeViewBox: false,
          },
        },
      },
    ],
  },
  template: (variables, { tpl }) => {
    return tpl`
    /* eslint-disable react/display-name */
    import { CustomSvgProps } from '@/components/Atoms/Icons/svgr';
    import { useTheme } from '@emotion/react';

    export default ({ fill, stroke, ...props }: CustomSvgProps): JSX.Element => {
      const theme = useTheme();
      return ${variables.jsx}
    };
    `
  },
}
