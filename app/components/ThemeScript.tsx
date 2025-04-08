"use client";

import { getThemeInitScript } from '@/lib/theme-script';

export default function ThemeScript() {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: getThemeInitScript()
      }}
    />
  );
}
