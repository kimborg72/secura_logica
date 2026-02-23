import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';

const fontRegular = readFileSync(join(process.cwd(), 'src/assets/fonts/SpaceGrotesk-Regular.ttf'));
const fontBold = readFileSync(join(process.cwd(), 'src/assets/fonts/SpaceGrotesk-Bold.ttf'));

const logoData = readFileSync(join(process.cwd(), 'public/images/logos/logo_verit_light_2026.png'));
const logoBase64 = `data:image/png;base64,${logoData.toString('base64')}`;

export async function generateOgImage(title: string, subtitle?: string): Promise<Buffer> {
  const svg = await satori(
    {
      type: 'div',
      props: {
        style: {
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          backgroundColor: '#121212',
          padding: '60px 64px',
        },
        children: [
          // Logo
          {
            type: 'img',
            props: {
              src: logoBase64,
              width: 127,
              height: 45,
              style: { objectFit: 'contain' },
            },
          },
          // Title + subtitle block
          {
            type: 'div',
            props: {
              style: { display: 'flex', flexDirection: 'column', gap: '12px' },
              children: [
                {
                  type: 'div',
                  props: {
                    style: {
                      fontSize: title.length > 40 ? 44 : 52,
                      fontWeight: 700,
                      color: '#ffffff',
                      lineHeight: 1.2,
                      letterSpacing: '-0.02em',
                    },
                    children: title,
                  },
                },
                ...(subtitle
                  ? [
                      {
                        type: 'div',
                        props: {
                          style: {
                            fontSize: 24,
                            fontWeight: 400,
                            color: '#a0a0a0',
                            lineHeight: 1.4,
                          },
                          children: subtitle,
                        },
                      },
                    ]
                  : []),
              ],
            },
          },
          // Accent bar
          {
            type: 'div',
            props: {
              style: {
                width: '120px',
                height: '4px',
                backgroundColor: '#F3FFAF',
                borderRadius: '2px',
              },
            },
          },
        ],
      },
    },
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: 'Space Grotesk',
          data: fontRegular,
          weight: 400,
          style: 'normal' as const,
        },
        {
          name: 'Space Grotesk',
          data: fontBold,
          weight: 700,
          style: 'normal' as const,
        },
      ],
    },
  );

  const resvg = new Resvg(svg, {
    fitTo: { mode: 'width', value: 1200 },
  });

  return resvg.render().asPng();
}
